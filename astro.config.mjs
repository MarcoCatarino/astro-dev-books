// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  //? Para las dinamic islands
  output: "server",

  integrations: [tailwind()],

  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({
        default: true,
        context: "server",      //? server || client
        access: "public",       //? public || secret
      }),

      SCORE_API_ENDPOINT: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },

  adapter: vercel(),
});