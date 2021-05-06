<template>
  <div id="app" class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import Painel from './components/shared/Painel.vue';
import ImgResponsiva from './components/shared/ImgResponsiva.vue';

export default {
  name: 'app',
  components: {
    'meu-painel': Painel,
    'img-reponsiva': ImgResponsiva,
  },
  data () {
    return {
      title: 'AluraPic',
      fotos: [],
      filtro: '',
    }
  },
  created() {
    // Requisição das fotos
    this.$http.get('http://localhost:3000/v1/fotos')
    .then(data => data.json() )
    .then(
      imgs => this.fotos = imgs, 
      err => console.error(err)
    );
  },
  computed: {
    fotosComFiltro() {
      if(this.filtro) {
        let exp = RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos
      }
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,900;1,400&display=swap');

  .container {
    max-width: 1160px;
    margin: 0 auto;
    padding: 60px 0;
    font: 16px 'Montserrat', sans-serif;
  }

  .title {
    color: #673ab7;
    font-size: 32px;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
  }
</style>
