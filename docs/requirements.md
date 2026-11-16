# 📋 Product Requirements and Acceptance Criteria

## 1. Purpose

Social Bond is represented in this repository as a marketing website for presenting the company and its services and allowing visitors to find contact information. This document captures the requirements supported by the current implementation and separates them from work that remains unimplemented.

## 2. Scope

### In current scope
- Browser-rendered responsive website.
- Home, about, services overview, contact, FAQ and legal-information pages.
- Client-side route navigation and a not-found route.
- Shared navigation, footer, reusable UI components and theme styling.
- Static assets and hard-coded page content.

### Explicitly not implemented
- Server-side lead capture or message delivery.
- User registration, sign-in, roles or protected dashboards.
- Database-backed content management.
- Scheduling, quote generation, newsletter subscription or CRM integration.
- Analytics or cookie-consent enforcement.
- A public API.

## 3. Functional requirements

| ID | Requirement | Current status | Acceptance evidence |
|---|---|---|---|
| FR-01 | Visitor can open the home page | Implemented | Route `/` renders without runtime error |
| FR-02 | Visitor can navigate to company information | Implemented | `/about` is registered in `src/App.tsx` |
| FR-03 | Visitor can view the services overview | Implemented | `/services` is registered |
| FR-04 | Visitor can view FAQ content | Implemented | `/faqs` renders static content |
| FR-05 | Visitor can open contact information | Implemented | `/contact` renders the contact page |
| FR-06 | Visitor can submit a contact message for delivery | Not implemented | Requires a server endpoint and delivery evidence |
| FR-07 | Visitor can book a consultation | Not implemented | Requires a real scheduling provider and confirmation |
| FR-08 | Visitor can request a quote | Not implemented | Requires a defined quote workflow and receiving service |
| FR-09 | Unknown paths show a not-found experience | Implemented | Catch-all route in `src/App.tsx` |
| FR-10 | Visitor can change theme | Present in UI/source | Verify persistence and accessible state after UI changes |

## 4. Non-functional requirements

- **Usability:** navigation and page content should remain understandable at desktop and mobile sizes.
- **Accessibility:** target WCAG 2.2 AA for new work; conformance requires testing, not documentation alone.
- **Performance:** ship only required assets, avoid oversized images and monitor production build output.
- **Security:** keep secrets out of client bundles; do not collect sensitive information through nonfunctional forms.
- **Privacy:** describe actual browser requests and data handling. Do not claim that static policy copy implements consent.
- **Maintainability:** use typed React components, shared primitives and focused page modules.
- **Reliability:** provide a static-host SPA fallback for direct navigation to nested paths.

## 5. Acceptance criteria for production lead capture

A future contact workflow is not complete until all criteria below are met:
1. A documented endpoint receives the request over HTTPS.
2. Server-side schema validation rejects malformed or oversized input.
3. Abuse prevention and rate limiting are enabled.
4. The user receives success only after the receiving service confirms acceptance.
5. Failures are visible and do not silently discard the message.
6. Duplicate submissions are handled safely.
7. Personal data retention and deletion rules are documented.
8. The privacy notice matches the actual processing.
9. Automated tests cover validation, delivery, failure and accessibility.
10. Production configuration and secrets are managed outside the browser bundle.

## 6. Change control

Any change that adds tracking, external integrations, personal-data collection, persistence, authentication or payments must include a security and privacy review before release. Record material architectural choices in an ADR using [the ADR template](templates/adr-template.md).
