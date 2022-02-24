# Architecture

## Ports & Adapters

Following Domain-driven design principles the application is built implementing the Ports and Adapters (Hexagonal) architecture:

The domain package in the core has no outward dependencies whatsoever and input/output can only reach it through ports, that is interfaces provided by the core and implemented by adapters in the infrastructure layer surrounding it.

<br>
<br>

```mermaid
classDiagram
  direction LR
  IncomingPort <|.. Domain : implements
  OutgoingPort <.. Domain : uses
  DrivingAdapter ..> IncomingPort : uses
  DrivenAdapter ..|> OutgoingPort : implements
  <<Service>> Domain
  <<interface>> IncomingPort
  <<interface>> OutgoingPort
```

<br>
<br>

The application's source code is structured accordingly, with the following main packages:

- `components` (Vue.js based UI, primary/driving adapters)
- `domain` (domain entities/business logic)
- `infra` (persistence, secondary/driven adapters)
- `routes` (URL <> View mapping for the Vue.js SPA)

<br>
<br>

## Architecture Decision Records

The `docs/adr` directory contains [Architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions).
For adding new records the [adr-tools](https://github.com/npryce/adr-tools) command-line tool is helpful but not necessary:

```bash
brew install adr-tools
```
