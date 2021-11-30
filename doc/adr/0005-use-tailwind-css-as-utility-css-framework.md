# 5. Use Tailwind CSS as utility CSS framework

Date: 2021-11-30

## Status

Accepted

## Context

We should use a CSS framework for basic/regular styling tasks not being covered by the component library, to ease development and ensure maintainability.

## Decision

We use Tailwind CSS alongside the component library.

## Consequences

Per reuse of Tailwind classes the overall CSS asset size can be reduced (compared to introducing custom classes/selectors); purging unused styles works out of the box. We can rely on Tailwind's JIT mode for purging.

We won't need to resort to `scoped` style blocks which have a negative impact on performance and should be used carefully. Developers need to think less about CSS class naming.
