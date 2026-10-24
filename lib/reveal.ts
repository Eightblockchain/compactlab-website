/** Inline, runs before paint: opt into reveals, and show everything if the app never hydrates. */
export const REVEAL_BOOTSTRAP = `(function(){var d=document.documentElement;if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;d.dataset.reveal="on";setTimeout(function(){if(!d.dataset.revealReady)delete d.dataset.reveal},2500)})();`;
