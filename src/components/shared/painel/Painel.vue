<template>
  <div class="painel">
    <h2 class="title">{{ titulo }}</h2>
    <slot class="content"></slot>
  </div>
</template>

<script>
export default {
  props: ['titulo'],
}
</script>

<style scoped>
  .painel {
    border-radius: 5px;
    box-shadow: 4px 4px 8px rgba(0,0,0,.2);
    overflow: hidden;
  }

  .painel .title {
    margin: 0;
    padding: 15px 20px;
    background-color: #ede7f6;
    color: #444;
    font-size: 24px;
    font-weight: bold;
  }
</style>
