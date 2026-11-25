export const sectionReveal = {
  hidden: { opacity: 0.35, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: 'easeOut' } },
};

export const sectionViewport = { once: true, margin: '140px 0px -40px 0px', amount: 0.02 };

export const getProjectSlug = (title) =>
  title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const getProjectSlugFromPath = () =>
  window.location.pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1] || null;
