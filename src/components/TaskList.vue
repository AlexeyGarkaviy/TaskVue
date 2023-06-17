<template>
  <div class="container">
    <div class="list">
      <div class="list-content">
        <hr class="list-divider" />
        <h1 class="list-header">Задачи:</h1>
        <template v-if="unresolvedTask.value.length">
          <TaskItem
            v-for="(task, index) in unresolvedTask.value"
            :key="task.id"
            :task="task"
            :number="index + 1"
          />
        </template>
        <h1 v-else>У вас нет активных задач</h1>
      </div>
      <div v-if="resolvedTask.value.length">
        <hr class="list-divider" />
        <h1 class="list-header">Выполненные задачи:</h1>
        <TaskItem
          v-for="(task, index) in resolvedTask.value"
          :key="task.id"
          :task="task"
          :number="index + 1"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from '@vue/composition-api'
import { useStore } from '@/store/index'
import TaskItem from '@/components/TaskItem.vue'
import Task from '@/model/task'

export default {
  name: 'TaskList',
  components: { TaskItem },
  setup() {
    const state = useStore()
    const tasks = computed(() => state.getters.getTasks)
    const resolvedTask = computed(() =>
      tasks.value.filter((task: Task) => task.status)
    )
    const unresolvedTask = computed(() =>
      tasks.value.filter((task: Task) => !task.status)
    )
    return { resolvedTask, unresolvedTask }
  },
}
</script>

<style scoped>
.list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.list-header {
  margin-bottom: 20px;
}
.list-content {
  width: 600px;
}
.list-divider {
  margin: 20px 0;
}
</style>
