<template>
  <div id="app">
    <TaskMain />
  </div>
</template>

<script lang="ts">
import TaskMain from '@/layout/TaskMain.vue'

export default {
  name: 'App',
  components: {
    TaskMain,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  color: #0b0b0b;
  background-color: #f2f2f2;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
</style>
