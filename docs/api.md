# Routes and integrations

This project is a client-side website, not an API server. It defines no JSON endpoints, authentication routes, database endpoints, or server-side form submission endpoints. `src/App.tsx` maps browser paths to React components; the static host serves the SPA entry document for those paths.

## Browser routes

| Path | Page | Current state |
| --- | --- | --- |
| `/` | Home | Marketing landing page. |
| `/about` | About | About, team, capabilities, and process content. |
| `/services` | Services | Services overview. |
| `/services/digital-marketing` | Digital marketing | Under-construction matching-card game. |
| `/services/influencer-management` | Influencer management | Under-construction matching-card game. |
| `/services/social-media-management` | Social media management | Under-construction matching-card game. |
| `/services/video-editing` | Video editing | Under-construction matching-card game. |
| `/contact` | Contact | Contact information and a client-only form success state. |
| `/faqs` | FAQs | Static FAQ content. |
| `/portfolio` | Portfolio | Under-construction matching-card game. |
| `/case-studies` | Case studies | Under-construction matching-card game. |
| `/testimonials` | Testimonials | Under-construction matching-card game. |
| `/free-consultation` | Free consultation | Under-construction matching-card game; no scheduling provider is connected. |
| `/request-a-quote` | Request a quote | Under-construction matching-card game; no quote submission exists. |
| `/privacy-policy` | Privacy policy | Static policy text. |
| `/cookie-policy` | Cookie policy | Static policy text; no consent manager is implemented. |
| `/terms` | Terms | Static terms text. |
| Any other path | Not found | The SPA renders its catch-all 404 component. |

All these routes are client-side browser routes. A static host must return `index.html` for application paths such as `/about` and `/services/video-editing`; see [Deployment](deployment.md).

## Contact form behavior

The form on `/contact` has required fields for full name, email, service interest, and project details. Company, phone, budget, and timeline are optional. Its submit handler only changes local React state, clears the form, and displays a temporary success state. It does not send an HTTP request, open an email client, or persist the values.

There are no current endpoints for contact, quote, calendar availability, booking, newsletter/notification signup, or analytics. Do not send confidential information through the form or present the local success state as delivery confirmation.

## Route implementation

The active route table is declared in `src/App.tsx` using React Router DOM. Some page files retain exports from TanStack Router, but Vite redirects those imports to the compatibility shim in `src/lib/router-shim.tsx`; those route declarations do not register pages. Update `src/App.tsx` when adding or changing a browser route, and keep this guide aligned.
