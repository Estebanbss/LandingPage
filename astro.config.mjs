import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

import criticalCss from "astro-critical-css";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress({
    Path: ["./Target", "./Build"],
    CSS: true,
    HTML: true,
    Image: true,
    JavaScript: true,
    SVG: true
  }), robotsTxt(), criticalCss()]
});