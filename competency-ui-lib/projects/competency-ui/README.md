# CompetencyUi

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Code scaffolding

Run `ng generate component component-name --project competency-ui` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project competency-ui`.
> Note: Don't forget to add `--project competency-ui` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build competency-ui` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

This library is published to npm as `@aastrika_npmjs/comptency`. Publishing is manual
(no CI). See `RELEASE_NOTES/` for per-release notes (`RELEASE_NOTES/TEMPLATE.md` to start
a new one).

1. **Bump the version in `projects/competency-ui/package.json`** — this is the library
   manifest ng-packagr publishes. The root workspace `package.json` is marked `"private": true`
   and is *not* the published package. npm refuses to republish an existing version, so this
   bump is required.
2. **Build:** `npm run build-lib` (runs `ng build` + copies assets into `dist/competency-ui`).
   Confirm `dist/competency-ui/package.json` shows the new version.
3. **Publish from the built package:**
   ```bash
   cd dist/competency-ui
   npm publish --access public          # add --otp=<code> if your npm account has 2FA
   ```
   Requires `npm login` with publish rights to the `@aastrika_npmjs` scope.
4. **Roll into consumers:** bump eagle-fusion's dependency to the new `^X.Y.Z`, run
   `yarn install` (updates the lockfile), commit, and redeploy.

To hand a build to whoever holds publish rights instead of publishing yourself, run
`npm pack` in `dist/competency-ui` to produce `aastrika_npmjs-comptency-<X.Y.Z>.tgz`, which
they publish with `npm publish <tarball> --access public`.

## Running unit tests

Run `ng test competency-ui` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
