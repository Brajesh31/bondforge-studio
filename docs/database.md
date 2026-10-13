# Data and persistence

There is no database in this repository. No database driver, schema, migration, or server-side persistence layer is configured.

## Current data sources

- Marketing copy, route descriptions, navigation entries, team/service content, and sample metrics are hard-coded in TypeScript under `src/`.
- Images and logos are bundled from `src/assets/`, served from `public/`, or requested from external image hosts.
- The light/dark theme preference is stored in the browser's `localStorage` under the key `theme`.
- Contact-form values live in component state while the visitor fills out the form. Submitting only changes the local success state and clears the values; it does not send or save them.
- The consultation date/time controls and quote/notification-looking controls do not connect to a scheduling, quote, or newsletter service.

TanStack Query is installed and its provider is mounted, but the source does not currently define API queries or mutations. There is no account or authentication data.

## If persistence is added

Choose an approved backend and define the data flow before collecting personal information. Document what fields are submitted, the destination and access controls, validation and abuse protections, retention/deletion behavior, and any third-party processors. Do not put database credentials or private API keys in client code or `VITE_*` variables.

Update the privacy and cookie policy pages to match actual behavior and add tests and deployment instructions for any new persistence service. See [Security](../SECURITY.md) and [Roadmap](../ROADMAP.md).
