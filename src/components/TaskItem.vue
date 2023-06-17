<template>
  <div class="task">
    <TaskModal
      :task="task"
      :visible="modalVisible.value"
      @closeModal="closeModal"
    />
    <div class="task-header">
      <span class="task-header__title">{{ `${number}. ${task?.title}` }}</span>
      <div v-if="!task?.status" class="task-header__actions">
        <img
          @click="completeTask"
          class="task-header__actions-icon"
          src="@/assets/complete.png"
          width="15px"
          height="15px"
        />
        <img
          @click="editTask"
          class="task-header__actions-icon"
          src="@/assets/edit.png"
          width="15px"
          height="15px"
        />
        <img
          @click="deleteTask"
          class="task-header__actions-icon"
          src="@/assets/delete.png"
          width="15px"
          height="15px"
        />
      </div>
    </div>
    <div class="task-description">
      {{ task?.body }}
    </div>
  </div>
</template>

<script lang="ts">
import { ref, PropType } from '@vue/composition-api'
import { useStore } from '@/store/index'
import Task from '@/model/task'
import TaskModal from '@/components/TaskModal.vue'

export default {
  name: 'TaskItem',
  components: {
    TaskModal,
  },
  props: {
    number: Number,
    task: Object as PropType<Task>,
  },
  setup(props) {
    const store = useStore()
    const modalVisible = ref(false)

    const completeTask = () => {
      console.log(props.task?.id)
      store.dispatch('completeTask', props.task?.id)
    }

    const deleteTask = () => {
      console.log(props.task?.id)
      store.dispatch('deleteTask', props.task?.id)
    }

    const editTask = () => {
      modalVisible.value = true
    }

    const closeModal = () => {
      modalVisible.value = false
    }

    return {
      completeTask,
      deleteTask,
      editTask,
      modalVisible,
      closeModal,
    }
  },
}
</script>

<style scoped>
.task {
  width: 600px;
  margin: 10px 0;
  padding: 10px 10px;
  border: 1px solid #673ab7;
  border-radius: 5px;
}
.task-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.task-header__title {
  font-weight: 600;
}
.task-header__actions {
  display: flex;
  gap: 10px;
}
.task-header__actions-icon {
  cursor: pointer;
}
</style>
