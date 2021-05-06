<template>
  <div id="header">
    <div class="container">
      <router-link class="logo" :to="routes[0].path">AluraPic</router-link>
      <nav class="menu">
        <ul class="list">
          <li class="item" v-for="route in routes" :key="route.id">
            <router-link class="link" :to="route.path">{{ route.title }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import { routes } from '../routes';
export default {
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

  #header a {
    color: currentColor;
    text-decoration: none;
  }
  
  #header .logo {
    font-size: 32px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
  }

  #header .menu .list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
  }

  #header .menu .item  {
    margin-left: 30px;
  }
</style>
