/**
 * FRAC entity hierarchy → legacy role/competency shape transformer
 *
 * The static competencyAssets role/competency JSON is deprecated; role and
 * competency data now comes from the FRAC service
 * (proxies/v8/entity/v1/hierarchy) for every position. Downstream consumers
 * (request-util, self-assessment) keep reading the per-position shape
 * { position, roles, activity, competency }, so this util maps a FRAC Position
 * hierarchy onto that exact shape.
 *
 * The FRAC hierarchy is queried by Position entityCode (e.g. "UP-P1", "P11"),
 * but the app knows the user's designation string (e.g. "ANM_UP", "AWW"). The
 * designation → entityCode mapping is fetched live from entity/v1/search
 * (entityType: Position, name → code). FRAC_POSITION_CODES below is only an
 * offline fallback used when that search call fails; config.fracPositionCodes
 * can still override any entry at runtime.
 */

/**
 * Offline fallback: designation / position name → FRAC Position entityCode.
 * Mirrors entity/v1/search (entityType: Position); the live search response is
 * preferred and this is only used when that call is unavailable.
 */
export const FRAC_POSITION_CODES: { [position: string]: string } = {
  'ANM_UP': 'UP-P1',
  'ANM': 'P1',
  'ANM-Bihar': 'P2',
  'ANM-Facility': 'P3',
  'ANM-Facility-UP': 'P4',
  'ANM-Faculty-Bihar': 'P5',
  'ANM-Outreach': 'P6',
  'ANM-Outreach-UP': 'P7',
  'ANM-Student-Bihar': 'P8',
  'ANM-UP': 'P9',
  'ANM/MPW': 'P10',
  'AWW': 'P11',
  'GNM': 'P12',
  'GNM-Bihar': 'P13',
  'GNM-UP': 'P14',
  'Gnm-Bihar': 'P15',
  'Nursing Faculty': 'P16',
  'Staff Nurse': 'P17',
  'Zonal Nursing Specialist': 'P18'
}

/**
 * Resolve the FRAC Position entityCode for a designation/position.
 * Precedence: config.fracPositionCodes override → live search map → offline
 * fallback. Returns undefined when the position has no known FRAC mapping.
 */
export const resolveFracPositionCode = (position: string, config?: any, liveMap?: any): string | undefined => {
  if (!position) {
    return undefined
  }
  const overrides = (config && config.fracPositionCodes) || {}
  const map = { ...FRAC_POSITION_CODES, ...(liveMap || {}), ...overrides }
  return map[position]
}

const mkAdditionalProperties = (node: any, hiNode: any) => {
  const props: any = { 'Code': node.entityCode }
  if (hiNode) {
    props['lang-hi-name'] = hiNode.entityName
    props['lang-hi-description'] = hiNode.entityDescription
  }
  return props
}

/**
 * Resolve the legacy `id` for a FRAC node: the numeric entityId from the code→id
 * map, falling back to the entityCode (roles/activities, or code-based ids like
 * "UP-C2").
 *
 * FRAC returns entityId as a STRING ("100") but the legacy ids were NUMBERS (100),
 * and the progress/level matching in RequestUtil compares with a strict `===`
 * against `_.toNumber(passbook.competencyId)`. A string id therefore never matches
 * and every level/percentage silently reads as 0 — so numeric ids must be coerced
 * back to numbers here. Non-numeric ids (e.g. "UP-C2") are left as-is.
 */
const resolveLegacyId = (node: any, idMap?: any) => {
  const raw = (idMap && idMap[node.entityCode]) || node.entityCode
  const numeric = Number(raw)
  return (raw !== '' && raw !== null && !Number.isNaN(numeric)) ? numeric : raw
}

/**
 * Legacy entity node with the fields the consumers read populated from FRAC.
 */
const mkLegacyNode = (node: any, hiNode: any, children: any, idMap?: any) => ({
  id: resolveLegacyId(node, idMap),
  type: node.entityType,
  name: node.entityName,
  description: node.entityDescription,
  additionalProperties: mkAdditionalProperties(node, hiNode),
  status: 'VERIFIED',
  source: null,
  level: 'INITIATE',
  levelId: 0,
  isActive: true,
  createdDate: null,
  createdBy: null,
  updatedDate: null,
  updatedBy: null,
  reviewedDate: null,
  reviewedBy: null,
  wfId: null,
  children
})

/** FRAC level list → legacy competencyLevelDescription JSON string */
const mkLevelDescription = (node: any, hiNode: any): string => {
  const hiLevels = (hiNode && hiNode.competencies) || []
  const levels = (node.competencies || []).map((lvl: any) => {
    const hiLvl = hiLevels.find((h: any) => h.levelNumber === lvl.levelNumber)
    const level: any = {
      'level': String(lvl.levelNumber),
      'name': lvl.levelName,
      'description': lvl.levelDescription
    }
    if (hiLvl) {
      level['lang-hi-name'] = hiLvl.levelName
      level['lang-hi-description'] = hiLvl.levelDescription
    }
    return level
  })
  return JSON.stringify(levels)
}

/**
 * Transform a FRAC Position hierarchy (en + optional hi) into the legacy
 * per-position object. hiResult may be null — Hindi labels then fall back to
 * English downstream (getHiName already handles the missing lang-hi-name key).
 * idMap resolves competency code → numeric entityId (from entity/v1/search) so
 * course / passbook / progress matching keeps working.
 */
export const transformFracHierarchyToLegacy = (enResult: any, hiResult: any, position: string, idMap?: any) => {
  const hiIndex: { [code: string]: any } = {}
  const indexHi = (node: any) => {
    if (!node) {
      return
    }
    hiIndex[node.entityCode] = node
    ;(node.children || []).forEach(indexHi)
  }
  indexHi(hiResult)

  const roles: any[] = []
  const activityMap: { [code: string]: any } = {}
  const competencyMap: { [code: string]: any } = {}

  ;(enResult.children || [])
    .filter((node: any) => node.entityType === 'Role')
    .forEach((roleNode: any) => {
      const activityLeaves: any[] = []
      ;(roleNode.children || [])
        .filter((node: any) => node.entityType === 'Activity')
        .forEach((activityNode: any) => {
          // roles[].children carry the activity without competencies (legacy shape)
          activityLeaves.push(mkLegacyNode(activityNode, hiIndex[activityNode.entityCode], null, idMap))

          const competencies = (activityNode.children || [])
            .filter((node: any) => node.entityType === 'Competency')
            .map((competencyNode: any) => {
              const hiNode = hiIndex[competencyNode.entityCode]
              const legacy = mkLegacyNode(competencyNode, hiNode, null, idMap)
              legacy.additionalProperties['competencyLevelDescription'] = mkLevelDescription(competencyNode, hiNode)
              competencyMap[competencyNode.entityCode] = legacy
              return legacy
            })

          // activity[] carries the competencies as children; merge when the same
          // activity appears under several roles
          const existing = activityMap[activityNode.entityCode]
          if (existing) {
            competencies.forEach((competency: any) => {
              if (!existing.children.some((child: any) => child.id === competency.id)) {
                existing.children.push(competency)
              }
            })
          } else {
            activityMap[activityNode.entityCode] =
              mkLegacyNode(activityNode, hiIndex[activityNode.entityCode], competencies, idMap)
          }
        })
      roles.push({ [roleNode.entityCode]: mkLegacyNode(roleNode, hiIndex[roleNode.entityCode], activityLeaves, idMap) })
    })

  return {
    position,
    roles,
    competency: Object.keys(competencyMap).map((code) => ({ [code]: competencyMap[code] })),
    activity: Object.keys(activityMap).map((code) => ({ [code]: activityMap[code] }))
  }
}
