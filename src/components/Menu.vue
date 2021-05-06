<template>
  <nav class="menu">
    <ul class="list">
      <li class="item" v-for="route in routes" :key="route.id">
        <router-link class="link" :to="route.path">{{ route.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    routes: {
      type: Array,
      required: true,
    }
  }
};
</script>

<style scoped>
  .menu .list {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
  }

  .menu .item  {
    margin-left: 30px;
  }
</style>
