<template>
  <div class="container">
    <section class="about">
      <h2 class="about-title">Добро пожаловать в "Таск-менеджер"</h2>
      <p class="about-description">
        "Таск-менеджер" - приложение, оптимизирующее растраты вашего времени на
        построение плана ваших работ.
      </p>
      <img
        class="about-image"
        src="@/assets/logo.png"
        width="200px"
        height="200px"
      />
      <router-link to="/list">
        <ButtonUI btn-name="Перейти к задачам" />
      </router-link>
    </section>
  </div>
</template>

<script lang="ts">
import ButtonUI from '@/components/UI/button/ButtonUI.vue'
export default {
  name: 'HomeView',
  components: {
    ButtonUI,
  },
}
</script>

<style scoped>
.about {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
}
.about-title {
  margin-bottom: 15px;
}
.about-description {
  text-align: center;
  color: #6c6c6c;
  margin-bottom: 50px;
}
.about-image {
  margin-bottom: 50px;
}
</style>
