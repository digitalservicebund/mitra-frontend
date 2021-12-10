# 6. Use Playwright for E2E testing

Date: 2021-12-10

## Status

Accepted

## Context

Practicing continuous delivery, in order to streamline cross-browser development and prevent bugs from reaching production to a high degree, we need to implement efficient cross-browser end-to-end (E2E) testing for the 3 mayor browser engines (Chrome, Safari, Firefox).

A fast feedback-loop is desirable, that is, running E2E tests can ideally occur on developer machines.

Cypress though does not support

- testing in Safari
- testing multiple browsers in parallel (except in CI with additional setup)

## Decision

We switch from using [Cypress](https://www.cypress.io) to using [Playwright](https://playwright.dev) for E2E testing.

## Consequences

Things that become easier:

- Only a minimal E2E testing setup is required, without additional TypeScript configuration
- Expectations in tests are similar to Jest, thus we gain a more streamlined experience when writing unit and E2E tests
- Playwright supports visual testing out-of-the-box
- Running tests from within the IDE with the [VSCode extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

Risks:

Playwright runs tests only in the latest of each of the supported browser engines, thus E2E tests may not reflect problems in slightly older but supported browsers. Thus developers are not freed from testing manually and services such as [BrowserStack](https://www.browserstack.com) might still be useful to allow for a broader cross-browser testing.
