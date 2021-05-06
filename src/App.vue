<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <ul class="list">
      <li class="item" v-for="foto of fotos" :key="foto.id"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'AluraPic',
      fotos: [],
    }
  },
  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
    .then(data => data.json() )
    .then(
      imgs => this.fotos = imgs, 
      err => console.error(err)
    );
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
