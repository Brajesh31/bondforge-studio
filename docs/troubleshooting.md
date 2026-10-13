# Troubleshooting

Start with the terminal where Vite is running and the browser developer console. The current app is client-side only; it has no backend logs or API responses to inspect.

## Bun install fails or dependencies disagree

- Confirm Bun is installed and run `bun --version`.
- From the repository root, use `bun install --frozen-lockfile` to match the committed `bun.lock`.
- If the lockfile and `package.json` disagree, do not silently regenerate it as part of an unrelated change. Review dependency updates and commit the intentional lockfile change.
- The repository does not contain an npm lockfile; npm installs will not reproduce the Bun lock exactly.

## Vite does not start or port 8080 is busy

- Confirm you are in the repository root and dependencies are installed.
- Run `bun run dev` and read the first error printed in the terminal.
- Vite is configured for port `8080`. If another process is using it, stop that process or pass an alternate port: `bun run dev -- --port 8081`.
- Use the URL printed by Vite; the server is configured to listen on network interfaces, so it may also print a LAN address.

## A nested route returns a host 404 after deployment

The app uses `BrowserRouter`, so paths such as `/about` are handled by the client. Configure the static host to serve `index.html` for app routes while still serving real static assets from their file paths. Verify both opening and refreshing the nested URL. See [Deployment](deployment.md#configure-spa-routing).

## A route shows an under-construction game

This is the current implementation for `/case-studies`, `/portfolio`, `/testimonials`, `/free-consultation`, `/request-a-quote`, and the detailed service routes. It is not a navigation or build failure. See [HTTP routes](api.md) and the [Roadmap](../ROADMAP.md).

## The contact form says it succeeded but no message arrives

The form currently updates local React state, shows a temporary success state, and clears its fields. It sends no request and is not connected to an email service. Do not enter confidential information or treat the message as delivered.

## Images or fonts are missing

- Check the browser Network panel for failed asset requests.
- Local images should resolve from `src/assets/` or `public/` paths. Confirm case-sensitive file names when deploying to Linux hosts.
- Many images and Google Fonts are loaded from third-party hosts; check the visitor's network access and provider availability.
- Confirm hosting rules do not block requests required by the site's configured Content Security Policy.

## Theme preference does not change or persist

The navigation toggle applies a `dark` class to the root document and stores the choice in browser `localStorage`. Browser privacy settings can disable storage. To reset the choice, clear the site's local storage for the current origin; the system theme is used when no saved preference exists.

## Lint or build errors

Run the project scripts and inspect the earliest diagnostic:

```powershell
bun run lint
bun run build
```

There is no automated test suite configured. `bun run preview` previews an existing build locally; it is not a production hosting service.

When asking for help, share the route, browser, steps, and sanitized console/build output. Never include deployment credentials, private customer information, or secret environment values in a public issue. See [Support](../SUPPORT.md) and [Security](../SECURITY.md).
