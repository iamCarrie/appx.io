import 'index.css';
import { createApp } from 'petite-vue';

const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context('_svg/', false, /\.svg$/);

requireAll(req);

// window.onload = function () {
//   const menuButton = document.querySelector('.j-menu-btn');

//   menuButton.onclick = function () {
//     const menuContent = document.querySelector('.j-menu-content');

//     menuContent.classList.toggle('menu-active');
//   };
// };

createApp({
  // exposed to all expressions
  isNav: false,
  count: 0,
  // getters
  get plusOne() {
    return this.count + 1;
  }

}).mount('#app');
