// Section blueprints for every page, derived from The_Social_Bond.xlsx.
// Each page is rendered by <PageScaffold /> using this data.

export type PageSection = {
  title: string;
  theme: "Light" | "Dark";
  purpose: string;
  contains: string[];
};

export type PageBlueprint = {
  slug: string;
  title: string; // for <head>
  metaDescription: string;
  eyebrow: string; // small chip above headline
  heading: string; // hero H1
  headingAccent?: string; // gradient portion of the headline
  intro: string; // hero paragraph
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
  sections: PageSection[];
};

const S = (
  title: string,
  theme: "Light" | "Dark",
  purpose: string,
  contains: string[],
): PageSection => ({ title, theme, purpose, contains });

export const pages: Record<string, PageBlueprint> = {
  services: {
    slug: "services",
    title: "Services — Social Bond",
    metaDescription:
      "Video editing, social media, influencer management, digital marketing and web development — one team, every solution.",
    eyebrow: "Our services ecosystem",
    heading: "Everything you need.",
    headingAccent: "All working together.",
    intro:
      "From content to growth, we handle it all — so you can focus on what you do best. One team. Every solution.",
    primaryCta: { label: "Book a Free Consultation", to: "/free-consultation" },
    secondaryCta: { label: "Request a Quote", to: "/request-a-quote" },
    sections: [
      S("Hero Section", "Light", "Introduce all agency services", [
        "Headline",
        "Supporting Text",
        "Service Summary",
        "CTA Button",
        "Background Visual",
      ]),
      S("Service Ecosystem Overview", "Dark", "Show how services work together", [
        "Content Creation Flow",
        "Marketing Flow",
        "Growth Funnel",
        "Brand Journey Diagram",
      ]),
      S("Video Editing Spotlight", "Light", "Highlight the flagship service", [
        "Showreel",
        "Before vs After",
        "Editing Examples",
        "Motion Graphics Samples",
        "Performance Results",
      ]),
      S("All Services Grid", "Dark", "Display complete service offerings", [
        "Video Editing",
        "Social Media Management",
        "Influencer Management",
        "Digital Marketing",
        "Web Development",
        "Content Strategy",
      ]),
      S("What You Receive", "Light", "Show deliverables clearly", [
        "Reels",
        "Shorts",
        "Long-form Videos",
        "Thumbnails",
        "Content Calendars",
        "Analytics Reports",
        "Websites",
        "Campaign Assets",
      ]),
      S("Industries We Serve", "Dark", "Help visitors identify themselves", [
        "Creators",
        "Coaches",
        "Startups",
        "SaaS Companies",
        "E-Commerce Brands",
        "Agencies",
      ]),
      S("When Should You Hire Us?", "Light", "Qualify potential clients", [
        "Common Business Problems",
        "Growth Challenges",
        "Content Bottlenecks",
        "Scaling Issues",
      ]),
      S("Results Across Services", "Dark", "Demonstrate outcomes", [
        "Views Generated",
        "Leads Acquired",
        "Engagement Growth",
        "Website Traffic",
        "Campaign Performance",
      ]),
      S("Agency vs Freelancer vs In-House", "Light", "Position Social Bond as the smarter choice", [
        "Comparison Table",
        "Cost Comparison",
        "Team Advantages",
        "Scalability Benefits",
      ]),
      S("Process", "Dark", "Reduce uncertainty", [
        "Discovery",
        "Planning",
        "Creation",
        "Review",
        "Delivery",
      ]),
      S("FAQ", "Light", "Remove objections", [
        "Pricing Questions",
        "Delivery Timeline",
        "Revisions",
        "Communication",
        "Contracts",
      ]),
      S("Final CTA", "Dark", "Generate qualified leads", [
        "Consultation Button",
        "Quote Button",
        "Contact Options",
      ]),
    ],
  },

  portfolio: {
    slug: "portfolio",
    title: "Portfolio — Social Bond",
    metaDescription:
      "A curated showcase of reels, shorts, YouTube edits, campaign videos, and web projects we've crafted.",
    eyebrow: "Featured Work",
    heading: "Work that",
    headingAccent: "speaks for itself.",
    intro:
      "A glimpse of what we create for brands, creators and businesses — video, campaigns and full digital experiences.",
    primaryCta: { label: "Start a project", to: "/contact" },
    sections: [
      S("Portfolio Hero", "Light", "Introduce the body of work", [
        "Headline",
        "Filter chips",
        "Reel counter",
      ]),
      S("Reels Showcase", "Dark", "Prove short-form capability", [
        "Vertical grid",
        "Play-on-hover",
        "Category tags",
      ]),
      S("Shorts Showcase", "Light", "YouTube Shorts + Instagram Reels", [
        "Grid of vertical thumbnails",
        "View counts",
      ]),
      S("YouTube Edits", "Dark", "Long-form storytelling", [
        "Featured thumbnail carousel",
        "Retention wins",
      ]),
      S("Campaign Videos", "Light", "Brand campaigns", [
        "Case highlights",
        "Client logos",
        "Format variety",
      ]),
      S("Course Edits", "Dark", "Educational content", [
        "Course previews",
        "Instructor quotes",
      ]),
      S("Website Projects", "Light", "Web design & development", [
        "Site mockups",
        "Live links",
        "Tech stack",
      ]),
      S("View all work CTA", "Dark", "Drive to contact", [
        "Headline",
        "Contact button",
      ]),
    ],
  },

  "case-studies": {
    slug: "case-studies",
    title: "Case Studies — Social Bond",
    metaDescription:
      "Real transformations. Real numbers. See how we turned content into measurable growth for creators and brands.",
    eyebrow: "Proof of work",
    heading: "Real clients.",
    headingAccent: "Real growth.",
    intro:
      "In-depth stories of the strategy, execution and results we've delivered — with the numbers to back it up.",
    primaryCta: { label: "Let's create yours", to: "/free-consultation" },
    sections: [
      S("Case Studies Hero", "Light", "Frame the outcomes", [
        "Headline",
        "Metric tiles",
        "Filter by industry",
      ]),
      S("Featured Case Study", "Dark", "Anchor with a hero story", [
        "Client overview",
        "Problem",
        "Strategy",
        "Execution",
        "Results",
      ]),
      S("Before vs After Gallery", "Light", "Visualise transformation", [
        "Content comparisons",
        "Metric deltas",
        "Playback previews",
      ]),
      S("Growth Metrics Grid", "Dark", "Aggregate impact", [
        "Views",
        "Followers",
        "Engagement rate",
        "Leads generated",
      ]),
      S("Client Testimonials", "Light", "Third-party validation", [
        "Video quotes",
        "Written reviews",
        "Ratings",
      ]),
      S("More Case Studies", "Dark", "Show breadth", [
        "Card grid",
        "Industry tags",
        "Read-more links",
      ]),
      S("CTA", "Light", "Convert readers", [
        "Consultation button",
        "Quote button",
      ]),
    ],
  },

  about: {
    slug: "about",
    title: "About — Social Bond",
    metaDescription:
      "We're a creative growth partner for creators, startups and brands — building content ecosystems that convert.",
    eyebrow: "Who we are",
    heading: "A studio built for",
    headingAccent: "the creator economy.",
    intro:
      "Social Bond is a small, senior team obsessed with content, strategy and growth. We work as an extension of your brand — never a vendor.",
    primaryCta: { label: "Meet the team", to: "/about#team" },
    secondaryCta: { label: "Contact us", to: "/contact" },
    sections: [
      S("About Hero", "Light", "Introduce the studio", [
        "Headline",
        "Manifesto paragraph",
        "Founder portrait",
      ]),
      S("Our Story", "Dark", "Show the journey", [
        "Timeline",
        "Key milestones",
        "Studio photos",
      ]),
      S("What We Believe", "Light", "Values that guide us", [
        "Craft over speed",
        "Story over noise",
        "Growth over vanity",
      ]),
      S("Meet the Team", "Dark", "Humanise the studio", [
        "Team grid",
        "Roles",
        "Specialties",
      ]),
      S("How We Work", "Light", "Explain the model", [
        "Retainer",
        "Sprint projects",
        "Advisory",
      ]),
      S("Studio Numbers", "Dark", "Objective credibility", [
        "Years operating",
        "Countries served",
        "Videos shipped",
      ]),
      S("Careers CTA", "Light", "Attract collaborators", [
        "Open roles",
        "Apply link",
      ]),
    ],
  },

  contact: {
    slug: "contact",
    title: "Contact — Social Bond",
    metaDescription:
      "Tell us about your project. We reply to every enquiry within one business day.",
    eyebrow: "Say hello",
    heading: "Let's build",
    headingAccent: "something together.",
    intro:
      "Whether you have a project scoped or just want to explore ideas, we're happy to chat. Expect a reply within one business day.",
    primaryCta: { label: "Book a Free Consultation", to: "/free-consultation" },
    secondaryCta: { label: "Request a Quote", to: "/request-a-quote" },
    sections: [
      S("Contact Form", "Light", "Capture leads", [
        "Name",
        "Email",
        "Company",
        "Service interest",
        "Budget",
        "Message",
      ]),
      S("Direct Channels", "Dark", "Alternative contact", [
        "Email",
        "WhatsApp",
        "Calendar link",
        "Social DMs",
      ]),
      S("Studio Info", "Light", "Show the studio is real", [
        "Location",
        "Timezone",
        "Response window",
      ]),
      S("FAQ Snippet", "Dark", "Handle top objections", [
        "Pricing",
        "Timelines",
        "Working process",
      ]),
    ],
  },

  "services/video-editing": {
    slug: "services/video-editing",
    title: "Video Editing — Social Bond",
    metaDescription:
      "High-quality video editing that captures attention, holds retention and drives real business results.",
    eyebrow: "Flagship service",
    heading: "Editing that",
    headingAccent: "captures & converts.",
    intro:
      "From short-form hooks to cinematic long-form, we edit content built for the algorithm and the audience.",
    primaryCta: { label: "Book a Free Consultation", to: "/free-consultation" },
    secondaryCta: { label: "Request a Quote", to: "/request-a-quote" },
    sections: [
      S("Hero Section", "Light", "Capture attention and establish expertise", [
        "Headline",
        "Subheadline",
        "Showreel Preview",
        "Primary CTA",
        "Secondary CTA",
      ]),
      S("The Cost of Bad Content", "Dark", "Highlight pain points and create urgency", [
        "Low Engagement",
        "Poor Retention",
        "Weak Branding",
        "Wasted Recording Effort",
        "Inconsistent Content",
      ]),
      S("Featured Showreel", "Light", "Provide instant visual proof", [
        "Best Reels",
        "Shorts Showcase",
        "YouTube Edits",
        "Motion Graphics",
        "Highlight Videos",
      ]),
      S("Why Great Content Wins", "Dark", "Increase perceived value of content", [
        "Attention Economy",
        "Content Competition",
        "Retention Importance",
        "Content Psychology",
        "Brand Impact",
      ]),
      S("Before vs After Transformations", "Light", "Show visual & performance uplift", [
        "Raw Footage",
        "Edited Version",
        "Performance Comparison",
        "Engagement Comparison",
      ]),
      S("Content Engine Framework", "Dark", "Sell systems, not editing alone", [
        "Podcast → Shorts",
        "Shorts → Reels",
        "Reels → LinkedIn Clips",
        "Distribution Workflow",
        "Content Repurposing System",
      ]),
      S("What We Edit", "Light", "Show content editing capabilities", [
        "Reels",
        "Shorts",
        "Podcasts",
        "YouTube Videos",
        "Commercial Ads",
        "Founder Content",
        "Personal Brand Content",
      ]),
      S("Who This Service Is For", "Dark", "Help visitors self-identify", [
        "Creators",
        "Coaches",
        "Founders",
        "Startups",
        "Agencies",
        "SaaS Brands",
        "Podcasters",
      ]),
      S("Editing Styles & Creative Capabilities", "Light", "Show versatility", [
        "Alex Hormozi Style",
        "Documentary Style",
        "Corporate Style",
        "Cinematic Style",
        "Podcast Style",
        "Custom Brand Style",
      ]),
      S("Content Performance Lab", "Dark", "Show strategic content thinking", [
        "Video Comparisons",
        "Hook Analysis",
        "Retention Analysis",
        "Caption Optimization",
        "Performance Breakdown",
      ]),
      S("Results Generated Through Editing", "Light", "Connect editing to outcomes", [
        "Views Growth",
        "Engagement Growth",
        "Reach Growth",
        "Watch Time Increase",
        "Audience Growth",
      ]),
      S("Testimonials", "Dark", "Social proof", [
        "Video Reviews",
        "Written Quotes",
        "Ratings",
      ]),
      S("Pricing & Packages", "Light", "Reduce friction", [
        "Starter",
        "Growth",
        "Custom",
      ]),
      S("FAQ", "Dark", "Handle objections", [
        "Turnaround",
        "Revisions",
        "Raw footage",
        "Ownership",
      ]),
      S("Final CTA", "Light", "Convert intent", [
        "Consultation Button",
        "Quote Button",
      ]),
    ],
  },

  "services/social-media-management": {
    slug: "services/social-media-management",
    title: "Social Media Management — Social Bond",
    metaDescription:
      "Strategic social content, consistent posting and community building — done for you, end to end.",
    eyebrow: "Managed for you",
    heading: "Social media that",
    headingAccent: "actually grows.",
    intro:
      "We plan, produce, publish and analyse — turning your channels into a compounding growth asset.",
    primaryCta: { label: "Book a Free Consultation", to: "/free-consultation" },
    secondaryCta: { label: "Request a Quote", to: "/request-a-quote" },
    sections: [
      S("Hero Section", "Light", "Frame the service value", [
        "Headline",
        "Subheadline",
        "Preview reel of managed accounts",
      ]),
      S("The Cost of Inconsistent Posting", "Dark", "Create urgency", [
        "Missed algorithm windows",
        "Weak brand presence",
        "Slow growth",
      ]),
      S("What We Manage", "Light", "Show scope", [
        "Instagram",
        "TikTok",
        "YouTube",
        "LinkedIn",
        "X / Twitter",
      ]),
      S("Content Engine Framework", "Dark", "Sell the system", [
        "Pillars",
        "Formats",
        "Posting cadence",
        "Repurposing",
      ]),
      S("Deliverables", "Light", "Clarify outputs", [
        "Content Calendar",
        "Reels & Shorts",
        "Static Posts",
        "Captions & Hashtags",
        "Analytics Reports",
      ]),
      S("Community Management", "Dark", "Retention through relationships", [
        "DMs",
        "Comments",
        "Moderation",
        "UGC pipeline",
      ]),
      S("Case Studies", "Light", "Proof", [
        "Before / After",
        "Growth curves",
        "Client quotes",
      ]),
      S("Who It's For", "Dark", "Self-identification", [
        "Founders",
        "Coaches",
        "DTC brands",
        "SaaS",
      ]),
      S("Pricing & Packages", "Light", "Reduce friction", [
        "Starter",
        "Growth",
        "Scale",
      ]),
      S("FAQ", "Dark", "Handle objections", [
        "Content approvals",
        "Reporting",
        "Ownership",
      ]),
      S("Final CTA", "Light", "Book a call", [
        "Consultation Button",
      ]),
    ],
  },

  "services/influencer-management": {
    slug: "services/influencer-management",
    title: "Influencer Management — Social Bond",
    metaDescription:
      "Right creators. Real impact. We source, manage and measure influencer campaigns end-to-end.",
    eyebrow: "Right creators. Real impact.",
    heading: "Influencer campaigns,",
    headingAccent: "measured & managed.",
    intro:
      "From creator sourcing to briefing, contracts, delivery and reporting — one team runs the entire operation.",
    primaryCta: { label: "Book a Free Consultation", to: "/free-consultation" },
    secondaryCta: { label: "Request a Quote", to: "/request-a-quote" },
    sections: [
      S("Hero Section", "Light", "Introduce the service", [
        "Headline",
        "Subheadline",
        "Creator collage",
      ]),
      S("How It Works", "Dark", "Reduce uncertainty", [
        "Discovery",
        "Sourcing",
        "Briefing",
        "Delivery",
        "Reporting",
      ]),
      S("Creator Network", "Light", "Prove reach", [
        "Nano",
        "Micro",
        "Macro",
        "Category coverage",
      ]),
      S("Campaign Types", "Dark", "Show flexibility", [
        "Product seeding",
        "Paid partnerships",
        "Long-term ambassadors",
        "UGC pipelines",
      ]),
      S("Case Studies", "Light", "Prove it works", [
        "Reach",
        "Engagement",
        "Conversions",
      ]),
      S("Deliverables", "Dark", "Clarify outputs", [
        "Creator briefs",
        "Content approvals",
        "Whitelisting",
        "Performance report",
      ]),
      S("FAQ", "Light", "Handle objections", [
        "Contracts",
        "Usage rights",
        "Timelines",
      ]),
      S("Final CTA", "Dark", "Book a call", [
        "Consultation Button",
      ]),
    ],
  },

  "services/digital-marketing": {
    slug: "services/digital-marketing",
    title: "Digital Marketing — Social Bond",
    metaDescription:
      "Data-driven paid media and performance marketing that turns clicks into customers.",
    eyebrow: "Performance-first",
    heading: "Marketing that",
    headingAccent: "moves the needle.",
    intro:
      "Full-funnel paid media, creative testing and analytics — engineered around the numbers that matter to your business.",
    primaryCta: { label: "Book a Free Consultation", to: "/free-consultation" },
    secondaryCta: { label: "Request a Quote", to: "/request-a-quote" },
    sections: [
      S("Hero Section", "Light", "Introduce the offering", [
        "Headline",
        "Subheadline",
        "Dashboard preview",
      ]),
      S("Channels We Run", "Dark", "Show breadth", [
        "Meta Ads",
        "Google Ads",
        "YouTube Ads",
        "TikTok Ads",
        "LinkedIn Ads",
      ]),
      S("Our Growth Framework", "Light", "Reduce uncertainty", [
        "Audit",
        "Strategy",
        "Creative",
        "Launch",
        "Optimize",
      ]),
      S("Creative + Media", "Dark", "Why we're different", [
        "In-house creative team",
        "Rapid ad iteration",
        "Full-funnel storytelling",
      ]),
      S("Reporting You Actually Read", "Light", "Transparency", [
        "Live dashboards",
        "Weekly summaries",
        "Attribution modelling",
      ]),
      S("Results", "Dark", "Prove ROI", [
        "ROAS",
        "CAC reduction",
        "Pipeline generated",
      ]),
      S("FAQ", "Light", "Handle objections", [
        "Ad spend minimums",
        "Reporting cadence",
        "Contracts",
      ]),
      S("Final CTA", "Dark", "Book a call", [
        "Consultation Button",
      ]),
    ],
  },

  "free-consultation": {
    slug: "free-consultation",
    title: "Free Consultation — Social Bond",
    metaDescription:
      "Book a free 30-minute growth strategy session. Get real advice, real recommendations — no pressure.",
    eyebrow: "Free 30-min session",
    heading: "A strategy session,",
    headingAccent: "not a sales pitch.",
    intro:
      "Get a personalised audit of your content and marketing, plus concrete next steps you can action — whether we work together or not.",
    primaryCta: { label: "Book your session", to: "/contact" },
    sections: [
      S("Growth Strategy Session Hero", "Light", "Communicate the value", [
        "Headline",
        "Subheadline",
        "Session Benefits",
        "CTA Button",
        "Trust Indicators",
      ]),
      S("What You'll Walk Away With", "Dark", "Increase perceived value", [
        "Growth Opportunities",
        "Content Strategy Suggestions",
        "Marketing Insights",
        "Brand Improvement Areas",
        "Actionable Recommendations",
      ]),
      S("Is This Session Right For You?", "Light", "Pre-qualify leads", [
        "Ideal Clients",
        "Businesses",
        "Creators",
        "Startups",
        "Coaches",
        "Personal Brands",
        "Not Suitable For List",
      ]),
      S("Common Problems We Help Solve", "Dark", "Align with pain", [
        "Low Engagement",
        "Weak Content Strategy",
        "Lack of Leads",
        "Poor Brand Visibility",
        "Difficulty Scaling",
      ]),
      S("Meet Your Strategy Team", "Light", "Humanise", [
        "Team Members",
        "Roles",
        "Expertise Areas",
        "Specializations",
      ]),
      S("What Happens During The Session?", "Dark", "Reduce uncertainty", [
        "Introduction",
        "Business Review",
        "Opportunity Analysis",
        "Recommendations",
        "Next Steps",
      ]),
      S("The Opportunity Audit Framework", "Light", "Demonstrate expertise", [
        "Content Audit",
        "Branding Audit",
        "Social Media Audit",
        "Marketing Audit",
        "Growth Opportunity Review",
      ]),
      S("Consultation Success Stories", "Dark", "Provide proof", [
        "Client Transformations",
        "Growth Stories",
        "Strategy Wins",
      ]),
      S("What Happens After The Session?", "Light", "Remove sales pressure", [
        "If we're a good fit — proposal",
        "If not — recommendations & resources",
      ]),
      S("Why Businesses Choose Social Bond", "Dark", "Build trust", [
        "Dedicated Specialists",
        "Growth-Focused Approach",
        "Transparent Communication",
        "Long-Term Partnership Mindset",
      ]),
      S("Session Booking Form", "Light", "Capture qualified leads", [
        "Name",
        "Email",
        "Company Name",
        "Website / Social Links",
        "Service Interest",
        "Current Challenges",
        "Preferred Date & Time",
      ]),
      S("FAQ", "Dark", "Handle final objections", [
        "Is it really free?",
        "How long is the call?",
        "What if I'm not ready to buy?",
      ]),
    ],
  },

  "request-a-quote": {
    slug: "request-a-quote",
    title: "Request a Quote — Social Bond",
    metaDescription:
      "Tell us about your project and get a tailored quote within one business day.",
    eyebrow: "Custom pricing",
    heading: "Tell us your goals.",
    headingAccent: "Get a tailored quote.",
    intro:
      "Every brief is different — share your goals, timelines and budget, and we'll come back with a scoped proposal within one business day.",
    primaryCta: { label: "Start your quote", to: "/contact" },
    sections: [
      S("Quote Form", "Light", "Capture qualified leads", [
        "Name",
        "Company",
        "Email",
        "Services required",
        "Budget range",
        "Timeline",
        "Project brief",
      ]),
      S("What Happens Next", "Dark", "Reduce uncertainty", [
        "Brief review",
        "Discovery call",
        "Proposal & scope",
        "Kickoff",
      ]),
      S("Recent Quotes → Wins", "Light", "Social proof", [
        "Client logos",
        "Deal sizes",
        "Outcomes",
      ]),
      S("FAQ", "Dark", "Objections", [
        "Turnaround",
        "Minimum project size",
        "Payment terms",
      ]),
    ],
  },

  testimonials: {
    slug: "testimonials",
    title: "Testimonials — Social Bond",
    metaDescription:
      "What creators, founders and brand leaders say about working with Social Bond.",
    eyebrow: "Client love",
    heading: "Kind words from",
    headingAccent: "the people we build with.",
    intro:
      "Video reviews, written quotes and ratings from creators, founders and brand teams we've partnered with.",
    primaryCta: { label: "Become the next story", to: "/free-consultation" },
    sections: [
      S("Testimonials Hero", "Light", "Establish credibility", [
        "Headline",
        "Aggregate rating",
      ]),
      S("Video Testimonials", "Dark", "Highest-trust proof", [
        "Featured reels",
        "Client names & roles",
      ]),
      S("Written Reviews", "Light", "Skimmable quotes", [
        "Quote grid",
        "Ratings",
        "Company logos",
      ]),
      S("By Industry", "Dark", "Self-identification", [
        "Creators",
        "SaaS",
        "E-commerce",
        "Coaches",
      ]),
      S("Numbers", "Light", "Aggregate impact", [
        "NPS",
        "Retention",
        "Repeat clients",
      ]),
      S("CTA", "Dark", "Convert readers", [
        "Consultation button",
      ]),
    ],
  },

  faqs: {
    slug: "faqs",
    title: "FAQs — Social Bond",
    metaDescription:
      "Answers to the most common questions about pricing, timelines, revisions and how we work.",
    eyebrow: "Everything you want to ask",
    heading: "Questions,",
    headingAccent: "answered honestly.",
    intro:
      "If you can't find what you're looking for, send us a note — we usually reply the same day.",
    primaryCta: { label: "Contact us", to: "/contact" },
    sections: [
      S("Pricing & Packages", "Light", "Handle top objection", [
        "How pricing works",
        "Retainers vs projects",
        "What's included",
      ]),
      S("Delivery & Timelines", "Dark", "Reduce uncertainty", [
        "Turnaround times",
        "Rush options",
        "Milestones",
      ]),
      S("Revisions & Approvals", "Light", "Set expectations", [
        "Revision rounds",
        "Approval process",
        "Feedback flow",
      ]),
      S("Working Process", "Dark", "How collaboration works", [
        "Kickoff",
        "Weekly cadence",
        "Communication tools",
      ]),
      S("Contracts & Ownership", "Light", "Legal comfort", [
        "IP",
        "Usage rights",
        "Confidentiality",
      ]),
      S("Still have questions?", "Dark", "Fallback CTA", [
        "Contact form link",
        "Email",
      ]),
    ],
  },

  "privacy-policy": {
    slug: "privacy-policy",
    title: "Privacy Policy — Social Bond",
    metaDescription:
      "How Social Bond collects, uses and protects your personal information.",
    eyebrow: "Legal",
    heading: "Privacy Policy",
    intro:
      "This Privacy Policy describes how The Social Bond collects, uses and shares information about you when you use our website and services.",
    sections: [
      S("Information We Collect", "Light", "Transparency", [
        "Information you provide",
        "Automatically collected data",
        "Cookies & tracking",
      ]),
      S("How We Use Information", "Light", "Purpose limitation", [
        "Providing services",
        "Communications",
        "Analytics & improvement",
      ]),
      S("Sharing & Disclosure", "Light", "Third-party clarity", [
        "Service providers",
        "Legal requirements",
        "Business transfers",
      ]),
      S("Your Rights", "Light", "Data-subject rights", [
        "Access",
        "Correction",
        "Deletion",
        "Objection",
      ]),
      S("Data Retention", "Light", "How long we keep data", [
        "Retention periods",
        "Deletion policy",
      ]),
      S("Contact Us", "Light", "How to reach us", [
        "Email",
        "Address",
      ]),
    ],
  },

  terms: {
    slug: "terms",
    title: "Terms & Conditions — Social Bond",
    metaDescription:
      "The terms that govern your use of the Social Bond website and services.",
    eyebrow: "Legal",
    heading: "Terms & Conditions",
    intro:
      "By using our website and services, you agree to the terms below. Please read them carefully.",
    sections: [
      S("Use of Services", "Light", "Set the ground rules", [
        "Eligibility",
        "Acceptable use",
        "Account responsibilities",
      ]),
      S("Payments & Refunds", "Light", "Commercial terms", [
        "Fees",
        "Invoicing",
        "Refund policy",
      ]),
      S("Intellectual Property", "Light", "IP ownership", [
        "Our IP",
        "Client-owned IP",
        "Licence to use deliverables",
      ]),
      S("Confidentiality", "Light", "Protect both sides", [
        "Confidential information",
        "Exceptions",
      ]),
      S("Liability", "Light", "Limit exposure", [
        "Warranties",
        "Limitation of liability",
      ]),
      S("Termination", "Light", "How agreements end", [
        "Notice",
        "Effect of termination",
      ]),
      S("Governing Law", "Light", "Jurisdiction", [
        "Applicable law",
        "Dispute resolution",
      ]),
    ],
  },

  "cookie-policy": {
    slug: "cookie-policy",
    title: "Cookie Policy — Social Bond",
    metaDescription:
      "How Social Bond uses cookies and similar technologies on our website.",
    eyebrow: "Legal",
    heading: "Cookie Policy",
    intro:
      "This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies.",
    sections: [
      S("What are cookies?", "Light", "Educate the reader", [
        "Definition",
        "First-party vs third-party",
      ]),
      S("How we use cookies", "Light", "Purposes", [
        "Essential",
        "Analytics",
        "Marketing",
      ]),
      S("Managing cookies", "Light", "Give control", [
        "Browser settings",
        "Opt-out tools",
      ]),
      S("Changes to this policy", "Light", "Housekeeping", [
        "Notification of changes",
      ]),
      S("Contact us", "Light", "Reach us", [
        "Email",
      ]),
    ],
  },
};

export const navPages: { label: string; to: string }[] = [
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const footerGroups = [
  {
    title: "Services",
    links: [
      { label: "Video Editing", to: "/services/video-editing" },
      { label: "Social Media", to: "/services/social-media-management" },
      { label: "Influencer Management", to: "/services/influencer-management" },
      { label: "Digital Marketing", to: "/services/digital-marketing" },
      { label: "All services", to: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Free Consultation", to: "/free-consultation" },
      { label: "Request a Quote", to: "/request-a-quote" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "FAQs", to: "/faqs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms & Conditions", to: "/terms" },
      { label: "Cookie Policy", to: "/cookie-policy" },
    ],
  },
];
