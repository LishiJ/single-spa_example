import { registerApplication, start } from 'single-spa';

function pathPrefix(prefix) {
  return function(location) {
      return location.pathname.startsWith(prefix);
  }
}

// 导航栏
registerApplication(
  'navBar', 
  () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
  () => true
);

// 首页即React页面
registerApplication(
  // Name of our single-spa application
  'home',
  // loadingFunction
  () => import('./src/home/home.app.js'),
  // activityFunction
  (location) => location.pathname === "" || 
    location.pathname === "/" || 
    location.pathname.startsWith('/home')
);

// angular页面
registerApplication(
  'angularJS', 
  () => import ('./src/angularJS/angularJS.app.js'), 
  pathPrefix('/angularJS')
);

// vue
registerApplication(
  'vue', 
  () => import ('./src/vue/index.js'), 
  pathPrefix('/vue')
);

start();