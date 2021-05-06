import Home from './views/Home.vue';
import Cadastro from './views/Cadastro.vue';

export const routes = [
  {
    id: 1,
    path: '/',
    component: Home,
    title: 'Home',
  },
  {
    id: 2,
    path: '/cadastro',
    component: Cadastro,
    title: 'Cadastro',
  },
];