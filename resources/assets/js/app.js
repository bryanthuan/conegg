import './bootstrap';
import router from './routes';
import App from './App.vue';


import PageContent from './components/PageContent';

Vue.component('page-content', PageContent);

//main component <docs></docs>
let Docs = Vue.component('app', App);

let handleSectionTheme = (currentRoute) => {
  let theme = 'default';
  let name = currentRoute.name;

  if (name) {
    if (name === 'dashboard') {
      theme = 'indigo';
    } else if (name.indexOf('themes') >= 0) {
      theme = 'cyan';
    } else if (name.indexOf('ui-elements') >= 0) {
      theme = 'purple';
    } else if (name === 'employees') {
      theme = 'purple';
    } else if (name === 'clients') {
      theme = 'green';
    } else if (name === 'documents') {
      theme = 'blue-grey';
    } else if (name === 'settings') {
      theme = 'blue-grey';
    } else if (name === 'error') {
      theme = 'red';
    }
  }

  Vue.material.setCurrentTheme(theme);
};

Docs = new Docs({
  el: '#app',
  router
});

handleSectionTheme(router.currentRoute);

router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    let mainContent = document.querySelector('.main-content');

    if (mainContent) {
      mainContent.scrollTop = 0;
    }

    Docs.closeSidenav();

    next();
  });
});
router.afterEach((to) => {
  handleSectionTheme(to);
});
