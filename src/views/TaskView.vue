<template>
  <div class="container">
    <TaskForm />
    <TaskList />
  </div>
</template>

<script lang="ts">
import TaskForm from '@/components/TaskForm.vue'
import TaskList from '@/components/TaskList.vue'

export default {
  name: 'TaskView',
  components: {
    TaskForm,
    TaskList,
  },
}
</script>
