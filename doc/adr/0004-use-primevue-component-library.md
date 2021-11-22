# 4. Use PrimeVue component library

Date: 2021-11-22

## Status

Accepted

## Context

Mitra will need many UI components in a form-like style. Accessibility is a strict requirement. The source code will be published and can be used by everyone without having to pay for third-party licenses.

## Decision

We will use [PrimeVue](https://github.com/primefaces/primevue) UI components.

## Consequences

We can use most of the components we need from PrimeVue instead of developing them ourselves. We can use the default styling for now and adjust the PrimeVue components with a custom theme afterwards.

PrimeVue puts an emphasis on accessibility. Most components already have aria-label attributes.

PrimeFaces, the company that develops PrimeVue, promises long-term support.

PrimeVue is licenced under the MIT licence and thus does not restrict the use of Mitra.
