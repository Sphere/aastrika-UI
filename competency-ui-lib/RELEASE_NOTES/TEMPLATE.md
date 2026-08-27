# Release <version> — <YYYY-MM-DD>

|                              |                                              |
| ---------------------------- | -------------------------------------------- |
| **Package**                  | `@aastrika_npmjs/comptency` (npm)           |
| **Version published**        | `<X.Y.Z>`                                    |
| **Baseline (previous)**      | `<previous X.Y.Z>`                           |
| **Consumed by**              | eagle-fusion (`^<X.Y.Z>`)                    |
| **Commits**                  | `<n>`                                        |
| **Author**                   | <name>                                       |

## Summary

<2–3 line, plain-language overview a non-engineer stakeholder can read. What does this
release change for users / org admins, and why does it matter?>

## ✨ Features

- **<scope>** — <user-facing description of the change> (`<short-sha>`)

## 🐛 Fixes

- **<scope>** — <what was broken, now fixed> (`<short-sha>`)

## 🏗️ Build / Chore

- <change> (`<short-sha>`)

## ⚠️ Deploy notes & risk

> Delete the lines that don't apply; keep this section honest.

- **Config / env / secret changes:** <none | describe>
- **Backend / API contract dependencies:** <none | describe + which service / endpoints>
- **Breaking changes:** <none | describe + migration step>
- **Mobile:** <supported | not supported — reason>

## ✅ Pre-publish checklist

- [ ] Version bumped in `projects/competency-ui/package.json` (the library manifest ng-packagr publishes)
- [ ] Build clean (`npm run build-lib`) → `dist/competency-ui` shows the new version
- [ ] Bundle audit: expected endpoints present, deprecated ones absent
- [ ] Backend endpoints reachable in the target environment
- [ ] Consumer `package.json` + lockfile updated to `^<X.Y.Z>`

## Publish & rollback

**Publish** — npm package (no Jenkins). Bump `projects/competency-ui/package.json`,
`npm run build-lib`, then:

```bash
cd dist/competency-ui
npm publish --access public        # @aastrika_npmjs publish rights required (+ --otp if 2FA)
```

**Rollback** — consumers pin the previous version (`<previous X.Y.Z>`), reinstall, redeploy.
Published npm versions are immutable and are not unpublished.

---
_File naming: `RELEASE_NOTES/release-<X.Y.Z>.md`._
