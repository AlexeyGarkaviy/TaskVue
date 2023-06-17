<template>
  <div>
    <nav class="main-nav">
      <div class="container main-nav__content">
        <router-link to="/" class="main-nav__title">Таск-менеджер</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'TaskMain',
}
</script>

<style scoped>
.main-nav {
  background-color: #673ab7;
  height: 50px;
}
.main-nav__content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.main-nav__title {
  font-size: 24px;
  color: #fff;
  text-decoration: none;
}
</style>
