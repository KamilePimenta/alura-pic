<template>
  <div id="app">
    <Header />
    <div class="container">
      <transition name="page">
        <router-view></router-view>
      </transition>
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
    color: #555;
    font: 14px 'Montserrat', sans-serif;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }

  .flex {
    display: flex;
  }

  .a-center {
    align-items: center;
  }
  .a-start {
    align-items: flex-start;
  }
  .a-end {
    align-items: flex-end;
  }
  .a-stretch {
    align-items: stretch;
  }

  .j-start {
    justify-content: flex-start;
  }
  .j-end {
    justify-content: flex-end;
  }
  .j-around {
    justify-content: space-around;
  }
  .j-between {
    justify-content: space-around;
  }
  .j-evenly {
    justify-content: space-evenly;
  }

  .wrap {
    flex-wrap: wrap;
  }

  .container {
    max-width: 1160px;
    margin: 0 auto;
    padding: 60px 0;
  }

  .page-enter,
  .page-leave-active {
    opacity: 0;
  }

  .page-leave-active,
  .page-enter-active {
    transition: opacity .2s ease;
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
