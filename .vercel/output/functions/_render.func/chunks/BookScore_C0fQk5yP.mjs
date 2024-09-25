import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_C1AW0F6G.mjs';
import { s as setOnSetGetEnv } from './setup_qUz3GmrZ.mjs';

// @ts-check

// used while generating the virtual module
// eslint-disable-next-line @typescript-eslint/no-unused-vars
setOnSetGetEnv((reset) => {
	
});
const SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new";

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(SCORE_API_ENDPOINT);
  const scoreValue = await res.text();
  return renderTemplate`${maybeRenderHead()}<span class="text-xs" id="score">
⭐ Puntuacion: ${scoreValue.trim()}/5
</span>`;
}, "C:/Users/marco_0nue3ys/Documents/Cursos/MiduDev/Astro/dev-books/src/components/BookScore.astro", void 0);

const $$file = "C:/Users/marco_0nue3ys/Documents/Cursos/MiduDev/Astro/dev-books/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };
