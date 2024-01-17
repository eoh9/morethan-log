const CONFIG = {
  // profile setting (required)
  profile: {
    name: "oerin2",
    image: "https://notion-avatar.vercel.app/api/img/eyJmYWNlIjoxMCwibm9zZSI6MTAsIm1vdXRoIjoxMCwiZXllcyI6OSwiZXllYnJvd3MiOjAsImdsYXNzZXMiOjAsImhhaXIiOjI1LCJhY2Nlc3NvcmllcyI6MTMsImRldGFpbHMiOjAsImJlYXJkIjowLCJmbGlwIjowLCJjb2xvciI6InJnYmEoMjU1LCAwLCAwLCAwKSIsInNoYXBlIjoibm9uZSJ9" alt="notion avatar", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "backend developer",
    bio: "I develop everything using node.",
    email: "erin35127@gmail.com",
    linkedin: "https://www.linkedin.com/in/erinoh02/",
    github: "https://github.com/eoh9",
    instagram: "https://www.instagram.com/o_erin2/",
  },
  
  // blog setting (required)
  blog: {
    title: "erin-log",
    description: "welcome to erin-log!",
  },

  // CONFIG configration (required)
  link: "https://erin-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords:["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
