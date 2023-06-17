<template>
  <button class="button" @click="clicked" :disabled="disabled">
    {{ btnName }}
  </button>
</template>

<script lang="ts">
export default {
  name: 'buttonUI',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    btnName: {
      type: String,
      default: 'Продолжить',
    },
  },
  setup(_, { emit }) {
    const clicked = () => {
      emit('click')
    }

    return {
      clicked,
    }
  },
}
</script>

<style scoped>
.button {
  min-width: 50px;
  min-height: 35px;
  padding: 10px 20px;
  border: 1px solid #673ab7;
  border-radius: 5px;
  color: #8d14f0;
  cursor: pointer;
}
.button:hover {
  background-color: thistle;
  color: #fff;
}
.button:disabled {
  background-color: transparent;
  border-color: #726981;
  color: #c9a2e9;
  cursor: default;
}
</style>
