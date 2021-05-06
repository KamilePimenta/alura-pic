<template>
  <div class="painel">
    <h2 class="title" @click="visible = !visible">{{ titulo }}</h2>
    <transition name="painel-fade">
      <div class="content" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ['titulo'],
  data() {
    return {
      visible: true,
    };
  },
}
</script>

<style scoped>
  .painel {
    border-radius: 5px;
    box-shadow: 4px 4px 8px rgba(0,0,0,.2);
    overflow: hidden;
  }

  .painel .title {
    margin-bottom: 0;
    padding: 15px 20px;
    background-color: rgba(104, 58, 183, 0.6);
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-transform: none;
    transition: background-color .3s ease;
  }

  .painel:hover .title {
    background-color: #673ab7;
  }

  .painel .content {
    position: relative;
  }

  .painel .content::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(104, 58, 183, .2);
    transform: scale(0);
    transition: transform .2s ease-in;
  }

  .painel:hover .content::after {
    transform: scale(1);
  }

  .painel-fade-enter,
  .painel-fade-leave-active {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
  }

  .painel-fade-enter,
  .painel-fade-leave-active,
  .painel-fade-enter-active {
    transition: all 1s ease;
  }

  .painel-fade-enter-active {
    max-height: none;
    opacity: 1;
  }
</style>
