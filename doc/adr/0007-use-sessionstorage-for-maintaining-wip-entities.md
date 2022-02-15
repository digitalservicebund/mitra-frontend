# 7. Use sessionStorage for maintaining wip entities

Date: 2022-02-14

## Status

Accepted

## Context

We need to maintain app state after reloading the application in the browser, so that users don't loose
their work unexpectedly.

## Decision

TODO: The change that we're proposing or have agreed to implement.

We're backing the already in use [Pinia](https://pinia.vuejs.org) store with `sessionStorage`, with data being automatically written/serialized to `sessionStorage`.
This allows for recreating the app state from its serialized representation.

We're opting for `sessionStorage` in order to limit the attack surface for XSS attacks (`sessionStorage` is accessible only to the current window/tab).

## Consequences

We won't achieve offline capabilities. All data is lost as soon as the browser window/tab is being closed; we may want to make
users aware.

Concurrent editing in two distinct browser tabs/windows is not possible.
