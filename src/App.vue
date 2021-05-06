<template>
  <div id="app">
    <div class="gallery">
      <h1 class="title">{{ title }}</h1>
      <input
        class="field filtro"
        type="text"
        placeholder="Busque por uma imagem..."
        @input="filtro = $event.target.value"
        >
      <ul class="list photos">
        <li class="item" v-for="foto of fotosComFiltro" :key="foto.id">
          <meu-painel :titulo="foto.titulo">
            <img class="img" :src="foto.url" :alt="foto.titulo">
          </meu-painel>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Painel from './components/shared/painel/Painel.vue';

export default {
  name: 'app',
  components: {
    'meu-painel': Painel,
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

  .gallery {
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

  .field {
    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto 30px;
    padding: 0 15px;
    background-color: #fafafa;
    line-height: 48px;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    outline: 0;
    box-sizing: border-box;
  }

  .field:focus {
    border-color: #673ab7;
    box-shadow: 0 0 4px rgba(104, 58, 183, 0.5);
  }

  .photos {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: -10px;
    padding: 0;
    list-style: none;
  }

  .photos .item {
    width: calc(33.33% - 20px);
    margin: 10px;
  }

  .photos .img {
    display: block;
    width: 100%;
    max-width: 100%;
    border: 0;
  }
</style>
