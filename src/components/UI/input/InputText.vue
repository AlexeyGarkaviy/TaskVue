<template>
  <input
    :type="type"
    :required="required"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
    class="input"
  />
</template>

<script lang="ts">
export default {
  name: 'InputText',
  props: {
    value: [String, Number],
    placeholder: {
      type: String,
      default: 'Введите текст',
    },
    type: {
      type: String,
      default: 'text',
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.input {
  width: 100%;
  height: 35px;
  padding: 5px 15px;
  margin: 5px 0;
  border: 1px solid thistle;
  border-radius: 5px;
}
.input:focus {
  outline: none;
  border-color: #673ab7;
}
</style>
