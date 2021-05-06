<template>
  <div id="header">
    <div class="container">
      <router-link class="logo" :to="routes[0].path">AluraPic</router-link>
      <Menu :routes="routes"/>
    </div>
  </div>
</template>
<script>
import { routes } from '../routes';
import Menu from './Menu.vue';
export default {
  components: { Menu },
  data() {
    return {
      routes
    };
  }
};
</script>

<style scoped>
  #header {
    padding: 15px 0;
    background-color: #673ab7;
    color: #fff;
  }
  
  #header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }
  
  #header .logo {
    font-size: 32px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
  }
</style>
