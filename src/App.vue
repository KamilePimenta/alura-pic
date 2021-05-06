<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

export default {
  components: { Header, Footer },
  name: 'app',
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,900;1,400&display=swap');

  * {
    margin: 0;
    padding: 0;
  }

  body {
    font: 14px 'Montserrat', sans-serif;
  }

  .container {
    max-width: 1160px;
    margin: 0 auto;
    padding: 60px 0;
  }

  .title {
    margin-bottom: 30px;
    color: #673ab7;
    font-size: 32px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
  }
</style>
