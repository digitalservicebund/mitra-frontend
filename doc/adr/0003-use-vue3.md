# 3. use Vue3

Date: 2021-10-25

## Status

Accepted

## Context

Mitra must run in most browsers. We want to develop quickly.

## Decision

We will use Vue 3.x as frontend framework.

## Consequences

Vue is mature and has a big ecosystem. Hence, we can rely on third party component libraries. Furthermore, [Jest](https://jestjs.io/docs/testing-frameworks) and [Testing Library](https://testing-library.com/docs/vue-testing-library/intro) come with Vue support.

Vue has TypeScript support und we can use Single File Components.

The learning curve for the developers will not be as steep as with React. The big community promises more long-term support than smaller frameworks such as Svelte.

We will not be able to support IE11 without polyfills.
