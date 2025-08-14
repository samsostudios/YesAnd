import loadComponent from '$utils/loadComponent';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log('🌀 Yes& 🧠');

  loadComponent('.component_banner', () => import('$components/banner'));
  // loadComponent('.section_preloader', () => import('$components/preloader'));
});
