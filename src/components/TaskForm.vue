<template>
  <div class="container form">
    <h1 class="form-header">Добавить задачу</h1>
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
      @click="addTask"
      btn-name="Создать задачу"
      :disabled="isDisabled.value"
    />
  </div>
</template>

<script lang="ts">
import { ref, computed } from '@vue/composition-api'
import { useStore } from '@/store/index'
import InputText from '@/components/UI/input/InputText.vue'
import CustomLabel from '@/components/UI/form/CustomLabel.vue'
import ButtonUI from '@/components/UI/button/ButtonUI.vue'

export default {
  name: 'TaskForm',
  components: {
    CustomLabel,
    InputText,
    ButtonUI,
  },
  setup() {
    const store = useStore()
    const title = ref('')
    const body = ref('')

    const isDisabled = computed(() => !title.value || !body.value)

    const clearData = () => {
      title.value = ''
      body.value = ''
    }

    const addTask = () => {
      const task = {
        id: Date.now(),
        title: title.value,
        body: body.value,
        status: false,
      }
      store.dispatch('addTask', task)
      clearData()
    }

    return {
      title,
      body,
      isDisabled,
      addTask,
    }
  },
}
</script>

<style scoped>
.form {
  width: 50%;
  margin-top: 50px;
}
.form-header {
  text-align: center;
  margin-bottom: 20px;
}
</style>
