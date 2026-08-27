# Release 2.1.1 — 2026-07-24

|                              |                                              |
| ---------------------------- | -------------------------------------------- |
| **Package**                  | `@aastrika_npmjs/comptency` (npm)           |
| **Version published**        | `2.1.1`                                      |
| **Baseline (previous)**      | `2.1.0`                                      |
| **Consumed by**              | eagle-fusion (`^2.1.1`)                      |
| **Commits**                  | `8034f0c` (fix) + version bump               |
| **Author**                   | Likhith Thammegowda (fix), vpPavithra (release) |

## Summary

Patch release on top of 2.1.0. The FRAC entity endpoints introduced in 2.1.0
(`entity/v1/search`, `entity/v1/hierarchy`) only existed as protected proxy routes and
were called unconditionally, so on the mobile app — whose webview cannot reach that
proxy — role/competency and gained-competency data came back empty. This release routes
those calls through the public `mobileApp/kong` gateway when running on mobile, matching
the existing passbook/userdetails pattern, so mobile is fully supported.

## 🐛 Fixes

- **mobile FRAC calls** — `entity/v1/search` and `entity/v1/hierarchy` are now branched
  on `config.isMobileApp`: web keeps calling the protected proxy
  (`/apis/proxies/v8/entity/v1/...`), mobile now calls the public gateway
  (`getEntitySearchMobile` / `getEntityHierarchyMobile` via `mobileApp/kong`), mirroring
  the passbook/userdetails mobile wiring. Applied at every FRAC call site in
  `active-summary`, `self-assessment` and `gained` services. (`8034f0c`)

## 🏗️ Build / Chore

- **removed the hardcoded Authorization bearer token** from `url.config` /
  `data.service` — no longer needed now that the correct gateway (proxy vs. kong) is
  selected per platform. (`8034f0c`)
- **added `url.config.spec.ts`** asserting the web → proxy and mobile → kong endpoint
  wiring. (`8034f0c`)
- version bump: `package.json` (root + `projects/competency-ui`) → `2.1.1`. (`8c539c2`)

## ⚠️ Deploy notes & risk

- **Config / env / secret changes:** none.
- **Backend / API contract dependencies:** requires the public `mobileApp/kong` gateway
  to expose `entity/v1/search` and `entity/v1/hierarchy` on the mobile host, in addition
  to the `2.1.0` proxy requirement. Verify both are reachable in the target environment
  before deploying a consumer that uses `2.1.1` on mobile.
- **Breaking changes:** none. The public API surface (exported components, modules,
  `RequestUtil`) is unchanged.
- **Mobile:** now supported — this is the fix that closes the 2.1.0 mobile gap.

## ✅ Pre-publish checklist

- [ ] Version bumped in `projects/competency-ui/package.json` (the library manifest
      ng-packagr publishes)
- [ ] Build clean (`npm run build-lib`) → `dist/competency-ui` shows `2.1.1`
- [ ] Bundle audit: `getEntitySearchMobile` / `getEntityHierarchyMobile` present,
      hardcoded Authorization bearer token absent
- [ ] `entity/v1/search` / `entity/v1/hierarchy` reachable via both the web proxy and the
      mobile `kong` gateway in the target environment
- [ ] Consumer (eagle-fusion) `package.json` + lockfile updated to `^2.1.1`

## Publish & rollback

**Publish** — npm package (no Jenkins). Bump `projects/competency-ui/package.json`,
`npm run build-lib`, then:

```bash
cd dist/competency-ui
npm publish --access public        # @aastrika_npmjs publish rights required (+ --otp if 2FA)
```

Then bump the consumer (eagle-fusion `package.json` → `^2.1.1`, `yarn install`) and
redeploy.

**Rollback** — consumers pin the previous version (`2.1.0`), reinstall, redeploy.
Published npm versions are immutable and are not unpublished. Note: rolling back to
`2.1.0` reintroduces the mobile data gap this release fixes.

---
_File naming: `RELEASE_NOTES/release-<X.Y.Z>.md`._
