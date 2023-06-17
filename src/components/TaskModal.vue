<template>
  <div v-if="visible" class="modal" @click.self="closeModal">
    <div class="modal-content">
      <CustomLabel label="Название задачи">
        <InputText
          v-model="title.value"
          placeholder="Введите название задачи"
          required
        />
      </CustomLabel>
      <CustomLabel label="Описание задачи">
        <InputText
          v-model="body.value"
          placeholder="Введите описание задачи"
          required
        />
      </CustomLabel>
      <ButtonUI
        @click="updateTask"
        btn-name="Изменить задачу"
        :disabled="isDisabled.value"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, computed, PropType } from '@vue/composition-api'
import { useStore } from '@/store/index'
import Task from '@/model/task'
import InputText from '@/components/UI/input/InputText.vue'
import CustomLabel from '@/components/UI/form/CustomLabel.vue'
import ButtonUI from '@/components/UI/button/ButtonUI.vue'

export default {
  name: 'TaskModal',
  components: {
    InputText,
    CustomLabel,
    ButtonUI,
  },
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const store = useStore()
    const title = ref(props.task?.title || '')
    const body = ref(props.task?.body || '')

    const isDisabled = computed(
      () => title.value === props.task?.title && body.value === props.task?.body
    )

    const closeModal = () => emit('closeModal')

    const updateTask = () => {
      store.dispatch('updateTask', {
        ...props.task,
        title: title.value,
        body: body.value,
      })
      closeModal()
    }

    return {
      title,
      body,
      isDisabled,
      closeModal,
      updateTask,
    }
  },
}
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-content {
  padding: 15px;
  background-color: #fff;
  width: 600px;
  border-radius: 5px;
}
</style>
