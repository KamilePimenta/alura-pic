<template>
  <div id="app">
    <div class="gallery">
      <h1 class="title">{{ title }}</h1>
      <ul class="list photos">
        <li class="item" v-for="foto of fotos" :key="foto.id">
          <div class="painel">
            <h2 class="title">{{ foto.titulo }}</h2>
            <div class="content">
              <img class="img" :src="foto.url" :alt="foto.titulo">
            </div>
          </div>
        </li>
      </ul>
    </div>
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
    // Requisição das fotos
    this.$http.get('http://localhost:3000/v1/fotos')
    .then(data => data.json() )
    .then(
      imgs => this.fotos = imgs, 
      err => console.error(err)
    );
  },
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

  .photos {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: wrap;
    list-style: none;
  }

  .photos .item {
    width: calc(33.33% - 20px);
    margin: 10px;
  }

  .photos .painel {
    border-radius: 5px;
    overflow: hidden;
  }

  .photos .title {
    margin: 0;
    padding: 15px 20px;
    background-color: #ede7f6;
    color: #444;
    font-size: 24px;
    font-weight: bold;
  }

  .photos .img {
    display: block;
    width: 100%;
    max-width: 100%;
    border: 0;
  }
</style>
