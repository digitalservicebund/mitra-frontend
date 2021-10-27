# Mitra Frontend

[![Pipeline](https://github.com/digitalservice4germany/mitra-frontend/actions/workflows/pipeline.yml/badge.svg)](https://github.com/digitalservice4germany/mitra-frontend/actions/workflows/pipeline.yml)
[![Secrets Check](https://github.com/digitalservice4germany/mitra-frontend/actions/workflows/secrets-check.yml/badge.svg)](https://github.com/digitalservice4germany/mitra-frontend/actions/workflows/secrets-check.yml)

## Prerequisites

Node 16.3.0

The repository contains a `.node-version` file to set up the required Node.js version automatically with [nodenv](https://github.com/nodenv/nodenv).

For the provided Git hooks you will need:

```bash
brew install lefthook talisman
```

## Getting started

**To get started with development run:**

```bash
./run.sh init
```

This will install a couple of Git hooks.

## Development

The project uses [Vite](https://vitejs.dev/guide/) to provide a fast bundler-less [dev server](http://localhost:3000/mitra-frontend/).

**Start server**:

```bash
npm run dev
```

## Tests

The application has unit tests (using [Jest](https://jestjs.io/docs/getting-started)) as well as end-to-end tests (using [Cypress](https://docs.cypress.io/guides/getting-started/writing-your-first-test)) tests.

**To run the unit tests:**

```bash
npm test
```

**To run the E2E tests:**

```bash
npm run test:e2e
```

## Linting & Formatting

Linting is done via [ESLint](https://eslint.org/docs/user-guide/getting-started); consistent formatting for a variety of source code files is being enforced using [Prettier](https://prettier.io/docs/en/index.html) respectively. ESLint and Prettier work in conjunction.

**Lint:**

```bash
npm run lint:check
```

**Autofix linting issues:**

```bash
npm run lint:fix
```

(Some problems might not autofix.)

**Check formatting:**

```bash
npm run format:check
```

**Autoformat sources:**

```bash
npm run format:fix
```

**Check format, lint and run tests in one pass:**

```bash
npm run check
```

(Executing in that order, failing fast.)

## Git hooks

The repo contains a [Lefthook](https://github.com/evilmartians/lefthook/blob/master/docs/full_guide.md) configuration, providing a Git hooks setup out of the box.

**To install these hooks, run:**

```bash
./run.sh init
```

The hooks are supposed to help you to:

- commit properly formatted and linted source code only (and not break the build otherwise)
- write [conventional commit messages](https://chris.beams.io/posts/git-commit/)
- not accidentally push [secrets and sensitive information](https://thoughtworks.github.io/talisman/)

## Deployment

Currently the app is deployed to GitHub Pages from trunk continuously.

:point_right: https://digitalservice4germany.github.io/mitra-frontend/
