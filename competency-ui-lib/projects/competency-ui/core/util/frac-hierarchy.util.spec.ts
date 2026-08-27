import {
  FRAC_POSITION_CODES,
  resolveFracPositionCode,
  transformFracHierarchyToLegacy
} from './frac-hierarchy.util';

const fracEn = {
  entityType: 'Position',
  entityCode: 'UP-P1',
  entityName: 'ANM_UP',
  entityDescription: 'ANM_UP',
  competencies: null,
  children: [
    {
      entityType: 'Role',
      entityCode: 'UP-R2',
      entityName: 'Provide Antenatal services',
      entityDescription: 'Provide Antenatal services',
      competencies: null,
      children: [
        {
          entityType: 'Activity',
          entityCode: 'UP-A1',
          entityName: 'Detect pregnancy',
          entityDescription: 'Detect pregnancy',
          competencies: null,
          children: [
            {
              entityType: 'Competency',
              entityCode: 'UP-C2',
              entityName: 'Pregnancy Identification',
              entityDescription: 'Identifies pregnancy',
              competencies: [
                { levelNumber: 1, levelName: 'Understands anatomy', levelDescription: 'Understands anatomy in detail' },
                { levelNumber: 2, levelName: 'Identifies pregnancy', levelDescription: 'Identifies pregnancy using kit' }
              ],
              children: null
            }
          ]
        }
      ]
    }
  ]
};

const fracHi = {
  entityType: 'Position',
  entityCode: 'UP-P1',
  entityName: 'एएनएम_यूपी',
  entityDescription: 'एएनएम_यूपी',
  competencies: null,
  children: [
    {
      entityType: 'Role',
      entityCode: 'UP-R2',
      entityName: 'प्रसव पूर्व सेवाएं',
      entityDescription: 'प्रसव पूर्व सेवाएं',
      competencies: null,
      children: [
        {
          entityType: 'Activity',
          entityCode: 'UP-A1',
          entityName: 'गर्भावस्था का पता लगाना',
          entityDescription: 'गर्भावस्था का पता लगाना',
          competencies: null,
          children: [
            {
              entityType: 'Competency',
              entityCode: 'UP-C2',
              entityName: 'गर्भावस्था की पहचान',
              entityDescription: 'गर्भावस्था की पहचान करता है',
              competencies: [
                { levelNumber: 1, levelName: 'शरीर रचना को समझता है', levelDescription: 'शरीर रचना को विस्तार से समझता है' },
                { levelNumber: 2, levelName: 'गर्भावस्था की पहचान करता है', levelDescription: 'किट से गर्भावस्था की पहचान करता है' }
              ],
              children: null
            }
          ]
        }
      ]
    }
  ]
};

describe('resolveFracPositionCode', () => {
  it('should resolve built-in FRAC positions', () => {
    expect(resolveFracPositionCode('ANM_UP')).toBe('UP-P1');
    expect(resolveFracPositionCode('ANM')).toBe('P1');
    expect(resolveFracPositionCode('AWW')).toBe('P11');
    expect(FRAC_POSITION_CODES['ANM_UP']).toBe('UP-P1');
  });

  it('should return undefined for unknown / empty positions', () => {
    expect(resolveFracPositionCode('ASHAs')).toBeUndefined();
    expect(resolveFracPositionCode('')).toBeUndefined();
    expect(resolveFracPositionCode(undefined as any)).toBeUndefined();
  });

  it('should honour config overrides without a library change', () => {
    const config = { fracPositionCodes: { 'ASHAs': 'P99' } };
    expect(resolveFracPositionCode('ASHAs', config)).toBe('P99');
    expect(resolveFracPositionCode('ANM_UP', config)).toBe('UP-P1');
  });
});

describe('transformFracHierarchyToLegacy', () => {
  it('should produce the legacy per-position shape', () => {
    const out = transformFracHierarchyToLegacy(fracEn, fracHi, 'ANM_UP');
    expect(out.position).toBe('ANM_UP');
    expect(out.roles.length).toBe(1);
    expect(Object.keys(out.roles[0])[0]).toBe('UP-R2');
    expect(Object.keys(out.activity[0])[0]).toBe('UP-A1');
    expect(Object.keys(out.competency[0])[0]).toBe('UP-C2');
  });

  it('should fall back to entity codes as ids when no id map is given', () => {
    const out = transformFracHierarchyToLegacy(fracEn, fracHi, 'ANM_UP');
    const role = out.roles[0]['UP-R2'];
    expect(role.id).toBe('UP-R2');
    expect(role.additionalProperties.Code).toBe('UP-R2');
    expect(role.children[0].id).toBe('UP-A1');
    expect(out.competency[0]['UP-C2'].id).toBe('UP-C2');
  });

  it('should resolve competency id to the numeric entityId from the id map', () => {
    const idMap = { 'UP-C2': '101' };
    const out = transformFracHierarchyToLegacy(fracEn, fracHi, 'ANM_UP', idMap);
    // competency id becomes the numeric entityId (what courses/passbook match on)
    expect(out.competency[0]['UP-C2'].id).toBe('101');
    // Code is preserved on additionalProperties
    expect(out.competency[0]['UP-C2'].additionalProperties.Code).toBe('UP-C2');
    // roles/activities are not in the competency map -> keep their code as id
    expect(out.roles[0]['UP-R2'].id).toBe('UP-R2');
    expect(out.activity[0]['UP-A1'].id).toBe('UP-A1');
  });

  it('should carry Hindi names from the hi hierarchy', () => {
    const out = transformFracHierarchyToLegacy(fracEn, fracHi, 'ANM_UP');
    const role = out.roles[0]['UP-R2'];
    expect(role.additionalProperties['lang-hi-name']).toBe('प्रसव पूर्व सेवाएं');
    expect(out.competency[0]['UP-C2'].additionalProperties['lang-hi-name']).toBe('गर्भावस्था की पहचान');
  });

  it('should serialise levels as legacy competencyLevelDescription JSON', () => {
    const out = transformFracHierarchyToLegacy(fracEn, fracHi, 'ANM_UP');
    const levels = JSON.parse(out.competency[0]['UP-C2'].additionalProperties.competencyLevelDescription);
    expect(levels.length).toBe(2);
    expect(levels[0].level).toBe('1');
    expect(levels[0].name).toBe('Understands anatomy');
    expect(levels[0]['lang-hi-name']).toBe('शरीर रचना को समझता है');
    expect(levels[1].level).toBe('2');
  });

  it('should fall back gracefully when the hi hierarchy is missing', () => {
    const out = transformFracHierarchyToLegacy(fracEn, null, 'ANM_UP');
    const role = out.roles[0]['UP-R2'];
    expect(role.additionalProperties['lang-hi-name']).toBeUndefined();
    const levels = JSON.parse(out.competency[0]['UP-C2'].additionalProperties.competencyLevelDescription);
    expect(levels[0].name).toBe('Understands anatomy');
    expect(levels[0]['lang-hi-name']).toBeUndefined();
  });

  it('should always emit an array for activity children', () => {
    const noCompetency = {
      ...fracEn,
      children: [{
        entityType: 'Role', entityCode: 'R1', entityName: 'r', entityDescription: 'r', competencies: null,
        children: [{ entityType: 'Activity', entityCode: 'A1', entityName: 'a', entityDescription: 'a', competencies: null, children: null }]
      }]
    };
    const out = transformFracHierarchyToLegacy(noCompetency, null, 'X');
    expect(Array.isArray(out.activity[0]['A1'].children)).toBe(true);
    expect(out.activity[0]['A1'].children.length).toBe(0);
  });
});
