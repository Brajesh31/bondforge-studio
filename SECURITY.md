# Security Policy

## Scope and support

This repository is a client-side React/Vite website. It currently contains no server API, authentication, database, or server-side form processing. There is no published version support matrix or security response schedule; the `main` branch is the active development line.

The contact page currently displays a local success state without transmitting the entered values. Consultation booking, quote, portfolio, case-study, testimonial, and service-detail routes are placeholders. Do not send confidential information through those controls.

## Reporting a vulnerability

Please do not publish suspected vulnerability details in a public issue, pull request, discussion, or social post. Use GitHub's private vulnerability reporting page for this repository:

<https://github.com/Brajesh31/bondforge-studio/security/advisories/new>

If private reporting is unavailable, contact maintainer Brajesh Kumar through the [GitHub profile](https://github.com/brajesh31) and ask for a private reporting channel. Do not include exploit details or sensitive information in a public message.

Include, where possible:

- The affected commit, route, dependency, or hosting configuration.
- The impact and conditions needed to reproduce the issue.
- Sanitized steps or a proof of concept that does not expose real user data.
- Suggested mitigations and relevant logs with secrets removed.

The maintainer will acknowledge and investigate reports as time permits. There is no guaranteed response or remediation timeline. Please allow a reasonable opportunity to investigate and prepare a fix before public disclosure; coordinated disclosure will be discussed when practical.

## Deployment guidance

- Serve the production site over HTTPS and configure the static host to serve only the generated `dist/` directory.
- Treat every `VITE_*` variable as public. Never put private keys, passwords, or privileged tokens in client-side environment variables or source files.
- Keep dependencies current, review lockfile changes, and build from the committed lockfile in a controlled environment.
- Set an appropriate Content Security Policy and other security headers for the actual hosting setup. Account for the site's external Google Fonts and remote image hosts when defining permitted sources.
- Limit third-party requests to those the site needs. Remote fonts and images are fetched by visitors' browsers and may disclose request metadata to those providers.
- Keep hosting credentials and deployment secrets outside the repository. Restrict access to the hosting account and deployment pipeline.
- Review legal and privacy notices against the real site behavior, hosting logs, and any third-party integrations before launch. Static policy text is not a technical consent or privacy control.

See [Deployment](docs/deployment.md) for static hosting and [Troubleshooting](docs/troubleshooting.md) for safe diagnostics.
