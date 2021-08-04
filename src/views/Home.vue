<template>
  <div class="gallery">
    <h1 class="title">{{ title }}</h1>
    <Input
      :identifier="'search'"
      :addClass="'filtro'"
      :placeholder="'Busque por uma imagem...'"
      @filter="filtro = $event"
    />
    <ul class="list photos">
      <li class="item" v-for="foto of fotosComFiltro" :key="foto.id">
        <Painel :titulo="foto.titulo">
          <ImgResponsive v-transform :url="foto.url" :titulo="foto.titulo" />
          <Button 
            :label="'Remover'"
            :action="'danger'"
            :confirm="true"
            @buttonClick="removePhoto(foto)"/>
        </Painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../components/shared/Painel.vue';
import ImgResponsive from '../components/shared/ImgResponsive.vue';
import Input from '../components/shared/Input.vue';
import Button from '../components/shared/Button.vue';

import transform from '../directives/transform.js';

export default {
  components: {
    Painel,
    ImgResponsive,
    Input,
    Button,
  },
  directives: {
    transform
  },
  data () {
    return {
      title: 'Galeria',
      fotos: [],
      filtro: '',
    }
  },
  methods: {
    removePhoto(foto) {
      console.log('Você removeu a imagem ' + foto.titulo);
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

<style scoped>
  .photos {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: -10px;
    padding: 0;
    list-style: none;
  }

  .photos .item {
    width: calc(25% - 20px);
    margin: 10px;
  }

  .button {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
</style>