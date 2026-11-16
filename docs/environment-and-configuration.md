# ⚙️ Environment and Configuration Reference

## Current configuration

The current frontend does not read application-specific environment variables. A local `.env` file is not required to install, develop or build the website.

| File | Purpose | Sensitive values? |
|---|---|---|
| `.env.example` | Explains that no application variables are currently required | No |
| `package.json` | Scripts and dependency declarations | No |
| `bun.lock` | Locked dependency graph | No |
| `vite.config.ts` | Vite configuration, aliases and development server | No |
| `tsconfig.json` | TypeScript compiler settings | No |
| `index.html` | Static document metadata and external font references | No |

## Vite environment variable warning

Any variable prefixed with `VITE_` is exposed to browser-side code and may appear in the generated assets. Never place passwords, private API keys, database credentials, signing keys or privileged tokens in a Vite client environment variable.

If a public configuration value is introduced:
1. Add a documented placeholder to `.env.example`.
2. Validate the value at startup/build time.
3. State whether the value is public.
4. Document local and deployment configuration.
5. Avoid committing actual `.env` files.
6. Add a test for missing or malformed configuration.

## Development server

Vite is configured for port 8080. The actual host and port should be confirmed from `vite.config.ts` and the terminal output. Do not assume a deployment provider uses the same port.

## Configuration change checklist

- [ ] Confirm whether the value is public or secret.
- [ ] Add only safe placeholders to `.env.example`.
- [ ] Update installation and deployment documentation.
- [ ] Add validation and a useful failure message.
- [ ] Add the value to the deployment environment securely.
- [ ] Check the built bundle for accidental secret exposure.
- [ ] Update privacy/security documentation if the value enables tracking or data collection.
