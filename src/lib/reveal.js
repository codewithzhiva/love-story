/** Svelte action: adds 'visible' class when element enters viewport */
export function reveal(node, { delay = 0, threshold = 0.15 } = {}) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => node.classList.add('visible'), delay);
          observer.unobserve(node);
        }
      });
    },
    { threshold }
  );

  node.classList.add('reveal');
  observer.observe(node);

  return {
    destroy() { observer.disconnect(); }
  };
}
