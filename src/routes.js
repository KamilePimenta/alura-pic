import Home from './views/Home.vue';
import Cadastro from './views/Cadastro.vue';

export const routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: '/cadastro',
    component: Cadastro,
  },
];