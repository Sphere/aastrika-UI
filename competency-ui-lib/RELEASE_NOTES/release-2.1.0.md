# Release 2.1.0 — 2026-07-16

|                              |                                                        |
| ---------------------------- | ------------------------------------------------------ |
| **Package**                  | `@aastrika_npmjs/comptency` (npm)                      |
| **Version published**        | `2.1.0`                                                 |
| **Baseline (previous)**      | `2.0.0`                                                 |
| **Consumed by**              | eagle-fusion (`^2.1.0`)                                 |
| **Commits**                  | `dbdd976` (feature) + version bump / cleanup            |
| **Author**                   | Likhith Thammegowda                                     |

## Summary

The competency dashboard now sources all role and competency data from the **FRAC
entity service** instead of the deprecated static `competencyAssets` JSON files. For
users nothing changes on screen — the Job Description, Passbook and Required tabs look
and behave the same — but the data is now live (no hand-maintained JSON), environment-
aware (hits stage on stage, prod on prod), and the package is dramatically smaller.

## ✨ Features

- **competency (data source)** — migrate role/competency data from the static
  `public/v8/competencyAssets/roleWiseCompetencyData` JSON to the FRAC service:
  `entity/v1/hierarchy` (Position → Roles → Activities → Competencies + levels) plus
  `entity/v1/search` to resolve Position designation → code and Competency code →
  numeric `entityId`. (`dbdd976`)
- **Passbook** — the gained-competency tab now reads from `entity/v1/search`, driven off
  the user's passbook so no already-earned competency is dropped. (`dbdd976`)
- **endpoints are now environment-aware** — FRAC calls use the app's own host
  (`window.location.host`) instead of the hard-coded `sphere.aastrika.org`, so each
  environment calls its own backend. (`dbdd976`)

## 🐛 Fixes

- **progress / levels** — FRAC returns `entityId` as a string (`"100"`) while the legacy
  ids were numbers (`100`); the strict `===` match silently failed, so all progress bars,
  COMPLETED/In Progress status and per-level ticks read as 0. Numeric ids are now coerced
  back to numbers. (`dbdd976`)
- **Job Description progress** — the tab no longer depends on the Passbook tab being
  opened first: it loads its own passbook progress, so ticks/percentages render on a
  direct visit. (`dbdd976`)
- **language** — the Position hierarchy is fetched once in the active language (from the
  eagle-fusion root config) instead of two calls (en + hi). (`dbdd976`)

## 🏗️ Build / Chore

- **removed all deprecated `competencyAssets` APIs** — `roleWiseCompetencyData`,
  `rolesMappingData`, and the `entityCompetency/getAllEntity` + `getEntityById` registry
  calls (plus their unused mobile variants). (`dbdd976`)
- **removed dead code** — `rolesMappingData → roleId`, `getActivityByRoleId`,
  `RequiredCompetencyService.getRequiredCompetencyById`. (`dbdd976`)
- **removed ~4.9 MB of dead static JSON** — the old `rolesWiseCompetencyData.json` was
  still imported (2.3 MB into the self-assessment bundle) and copied as an asset (2.4 MB),
  both unreferenced. The self-assessment bundle dropped from **2.3 MB → 28 KB** and the
  published tarball from **507 KB → 73 KB**. (version bump / cleanup)

## ⚠️ Deploy notes & risk

- **Config / env / secret changes:** none. Endpoints resolve from `window.location.host`.
- **Backend / API contract dependencies:** requires the **FRAC entity service** to be
  available in the target environment at `/apis/proxies/v8/entity/v1/hierarchy` and
  `/apis/proxies/v8/entity/v1/search`. Verify these respond on stage/prod before deploying
  a consumer that uses `2.1.0`.
- **Breaking changes:** none for web consumers. The public API surface (exported
  components, modules, `RequestUtil`) is unchanged.
- **Mobile — not yet supported.** FRAC calls use the web `proxies/v8` path + the app host;
  there are no mobile (`mobileApp/kong`) FRAC variants yet. If the mobile app consumes this
  package, its competency data will not load until mobile FRAC endpoints are added.
- **Legacy passbook ids.** FRAC re-keyed some competencies (e.g. `33 → 292`, `36 → 295`,
  `39 → 298`). They still display in the Passbook (title falls back to the passbook record),
  but a competency earned under an old id will not show progress on the Job Description tab
  until the backend migrates the stored passbook ids or FRAC returns legacy ids as aliases.

## ✅ Pre-publish checklist

- [ ] Version bumped in **`projects/competency-ui/package.json`** (the library manifest
      ng-packagr publishes — not just the root workspace `package.json`)
- [ ] Build clean (`npm run build-lib`) → `dist/competency-ui` shows the new version
- [ ] Bundle audit: `entity/v1/search` present, `roleWiseCompetencyData` / `rolesMappingData`
      / `getAllEntity` absent
- [ ] FRAC endpoints reachable in the target environment
- [ ] Consumer (eagle-fusion) `package.json` + lockfile updated to `^2.1.0`

## Publish & rollback

**Publish** — this is an npm package (no Jenkins). Bump the version in
`projects/competency-ui/package.json`, run `npm run build-lib`, then publish the built
package:

```bash
cd dist/competency-ui
npm publish --access public        # requires @aastrika_npmjs publish rights (+ --otp if 2FA)
```

A pre-built tarball can be handed to whoever holds publish rights:
`dist/competency-ui/aastrika_npmjs-comptency-2.1.0.tgz` → `npm publish <tarball> --access public`.

Then bump the consumer (eagle-fusion `package.json` → `^2.1.0`, `yarn install`) and redeploy.

**Rollback** — consumers pin the previous version: set eagle-fusion's dependency back to
`2.0.0`, `yarn install`, redeploy. (The `2.0.0` package remains on npm; published versions
are immutable and are never unpublished.)

---
_File naming: `RELEASE_NOTES/release-<X.Y.Z>.md`. Adapted from the eagle-fusion / CBP
release-notes template for an npm-published library._
