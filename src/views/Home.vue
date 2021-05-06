<template>
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
        <Painel :titulo="foto.titulo">
          <ImgResponsiva :url="foto.url" :titulo="foto.titulo" />
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
import ImgResponsiva from '../components/shared/ImgResponsiva.vue';
import Button from '../components/shared/Button.vue';

export default {
  components: {
    Painel,
    ImgResponsiva,
    Button,
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

  .field {
    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto 60px;
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

  .button {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
</style>