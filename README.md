# Mitra Frontend

[![Pipeline](https://github.com/digitalservice4germany/mitra-frontend/actions/workflows/pipeline.yml/badge.svg)](https://github.com/digitalservice4germany/mitra-frontend/actions/workflows/pipeline.yml)
[![Secrets Check](https://github.com/digitalservice4germany/mitra-frontend/actions/workflows/secrets-check.yml/badge.svg)](https://github.com/digitalservice4germany/mitra-frontend/actions/workflows/secrets-check.yml)

## Prerequisites

**Node.js 16.13.0**

The repository contains a `.node-version` file to set up the required Node.js version automatically with [nodenv](https://github.com/nodenv/nodenv).

For E2E testing with [Playwright](https://playwright.dev/docs/intro) you will need to install the supported browsers:

```bash
npx playwright install
```

For the provided Git hooks you will need:

```bash
brew install lefthook talisman
```

## Development

### Getting started

**Optional - install [Git hooks](#git-hooks):**

```bash
./run.sh init
```

### Dev server

The project uses [Vite](https://vitejs.dev/guide/) to provide a fast bundler-less [dev server](http://localhost:3000/mitra-frontend/).

**Start server**:

```bash
npm run dev
```

### Testing

The application has

- unit tests (using [Jest](https://jestjs.io/docs/getting-started))
- end-to-end tests (using [Playwright](https://playwright.dev/docs/intro))
- accessibility tests (using [pa11y](https://github.com/pa11y/pa11y-ci))

**To run the unit tests:**

```bash
npm test
```

**With watcher:**

```bash
npm test -- --watch
```

**Gather coverage**:

```bash
npm run coverage
```

**To run the E2E tests:**

```bash
npm run test:e2e
```

**To run a11y tests:**

```bash
npm run test:a11y
```

Note that automated accessibility testing will help root out about 30% of the errors in code, but can't replace auditing by humans.

### Style (linting & formatting)

Linting is done via [ESLint](https://eslint.org/docs/user-guide/getting-started); consistent formatting for a variety of source code files is being enforced using [Prettier](https://prettier.io/docs/en/index.html). ESLint and Prettier work in conjunction.

**Check style:**

```bash
npm run style:check
```

**Autofix issues:**

```bash
npm run style:fix
```

(Some problems might not autofix.)

**Check format, lint and run tests in one pass:**

```bash
npm run check
```

(Executing in that order, failing fast.)

### Git hooks

The repo contains a [Lefthook](https://github.com/evilmartians/lefthook/blob/master/docs/full_guide.md) configuration, providing a Git hooks setup out of the box.

**To install these hooks, run:**

```bash
./run.sh init
```

The hooks are supposed to help to:

- commit properly formatted and linted source code only (and not break the build otherwise)
- write [conventional commit messages](https://chris.beams.io/posts/git-commit/)
- not accidentally push [secrets and sensitive information](https://thoughtworks.github.io/talisman/)

## Deployment

Currently the app is deployed to GitHub Pages from trunk continuously, upon a successful build.

Entry point creator :point_right: https://digitalservice4germany.github.io/mitra-frontend/creator

Entry point buyer :point_right: https://digitalservice4germany.github.io/mitra-frontend/einkauf

## Audits

### Lighthouse

A [Lighthouse](https://developers.google.com/web/tools/lighthouse/) audit is performed against the deployed application as part of the pipeline's audit job and fails when metric values drop below a score of 90 (`recommended` [preset](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md#preset)).

**Execute locally**:

```bash
npm run audit:lighthouse
```

### License scanning

Continuous license scanning is performed as part of the pipeline's audit job. Whenever a production dependency is being added with a yet unknown license the build is going to fail.

**Execute locally**:

```bash
npm run audit:licences
```

## Architecture

:point_right: [doc/ARCHITECTURE.md](doc/ARCHITECTURE.md)
