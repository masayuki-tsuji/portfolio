const siteDomain = "https://portfolio.irad.site";
const titleContent = "辻将幸(Masayuki Tsuji)のポートフォリオ";
const descriptionContent =
  "CTO、Webエンジニアとして活動している辻将幸(Masayuki Tsuji)のポートフォリオサイト。「アイラッド」の屋号を掲げフリーランス（個人事業主）として事業をエンジニアリングでサポートしています。";

export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: `%s | ${titleContent}`,
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: descriptionContent,
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: titleContent,
        },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: siteDomain,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: titleContent,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: descriptionContent,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: `${siteDomain}/images/logo.jpg`,
        },
        {
          hid: "apple-mobile-web-app-title",
          name: "apple-mobile-web-app-title",
          content: titleContent,
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@500&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  css: ["~/assets/scss/global.scss"],
  runtimeConfig: {
    public: {
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
});
