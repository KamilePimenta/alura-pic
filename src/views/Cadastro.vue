<template>
  <div class="register">
    <h1 class="title">{{ title }}</h1>

    <form @submit.prevent="save">
      <Input
        :identifier="'title'"
        :label="'Título'"
        :value="img.titulo"
        @setValue="img.titulo = $event"
      />
      <Input
        :identifier="'url'"
        :label="'URL'"
        :value="img.url"
        @setValue="img.url = $event"
      />
      <Textarea
        :identifier="'description'"
        :label="'Descrição'"
        :value="img.descricao"
        @setValue="img.descricao = $event"
      />

      <Painel v-show="img.url" :titulo="img.titulo">
        <ImgResponsive :url="img.url" :titulo="img.titulo" />
      </Painel>

      <div class="actions flex a-center j-end">
        <router-link to="/">
          <Button :label="'Voltar'"/>
        </router-link>
        <Button :type="'submit'" :label="'Cadastrar'" :action="'success'"/>
      </div>
    </form>
  </div>
</template>

<script>
import Input from '../components/shared/Input.vue';
import Textarea from '../components/shared/Textarea.vue';
import Button from '../components/shared/Button.vue';
import Painel from '../components/shared/Painel.vue';
import ImgResponsive from '../components/shared/ImgResponsive.vue';

import Img from '../domain/Img.js';

export default {
  components: {
    Input,
    Textarea,
    Button,
    Painel,
    ImgResponsive,
  },
  data () {
    return {
      title: 'Cadastro',
      img: new Img(),
    }
  },
  methods: {
    save() {
      this.$http
        .post('http://localhost:3000/v1/fotos', this.img)
        .then(() => this.img = new Img())
        .catch(() => console.error('Não foi possível cadastrar a imagem.'));
    },
  },
}
</script>

<style lang="scss" scoped>
  .actions {
    max-width: 400px;
    margin: 0 auto;
  }
</style>