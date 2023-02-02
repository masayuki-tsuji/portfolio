import { defineNuxtPlugin } from "#app";
import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  if (!config.public.googleAnalyticsId) {
    console.warn("Does not found google analytics settings.");
    return;
  }
  const router = useRouter();

  nuxtApp.vueApp.use(
    VueGtag,
    {
      appName: "irad-portfolio",
      pageTrackerScreenviewEnabled: true,
      config: { id: config.public.googleAnalyticsId },
    },
    router
  );
});
