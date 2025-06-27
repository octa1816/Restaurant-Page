import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import { router } from './router/index.routes';

document.addEventListener("DOMContentLoaded", () => {
  router(window.location.hash || '#home');

  window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
});
