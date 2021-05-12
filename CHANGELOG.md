# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

Change categories are:

* `Added` for new features.
* `Changed` for changes in existing functionality.
* `Deprecated` for once-stable features removed in upcoming releases.
* `Removed` for deprecated features removed in this release.
* `Fixed` for any bug fixes.
* `Security` to invite users to upgrade in case of vulnerabilities.

## [Unreleased](https://github.com/saibotsivad/rollup-plugin-npm-run/compare/v1.0.0...HEAD)

*Add changes here.*

## [1.0.2](https://github.com/saibotsivad/rollup-plugin-npm-run/compare/v1.0.1...v1.0.2) - 2021-05-12

### Fixed

- Correct call to child_process/spawn.

## [1.0.1](https://github.com/saibotsivad/rollup-plugin-npm-run/compare/v1.0.0...v1.0.1) - 2021-05-12

### Fixed

- Made this a CommonJS module and forgot to drop the imports.

## [1.0.0](https://github.com/saibotsivad/rollup-plugin-npm-run/compare/v0.0.0...v1.0.0) - 2021-05-12

Going to v1 because the API is stable.

### Added

- Optional `args` to be able to pass in more things to the npm run script.
- This changelog! And a bit better documentation.
