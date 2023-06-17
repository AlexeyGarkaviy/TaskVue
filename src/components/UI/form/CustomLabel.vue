<template>
  <div class="label">
    <label class="label-text">
      {{ label }}
    </label>
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'CustomLabel',
  props: {
    label: String,
  },
}
</script>

<style scoped>
.label {
  width: 100%;
  margin-bottom: 10px;
}
.label-text {
  font-size: 12px;
  font-weight: 500;
  color: #5c5c5c;
}
</style>
