import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealMath from "reveal.js/plugin/math/math.js";

let deck = new Reveal({
  plugins: [Markdown, RevealMath.KaTeX],
});
deck.initialize();

deck.on("ready", (event) => {
  // event.currentSlide, event.indexh, event.indexv
  console.log(event.indexh);
});
deck.on("slidechanged", (event) => {
  // event.previousSlide, event.currentSlide, event.indexh, event.indexv
  console.log(event.indexh);
});
