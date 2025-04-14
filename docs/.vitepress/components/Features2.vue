<!-- .vitepress/components/Features2.vue -->
<template>
  <section class="features2">
    <h2>Наш блок features2</h2>
    <div class="features2-list">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="features2-item"
      >
        <div class="icon">
          <!-- Если иконка задана как строка (например, эмодзи или Unicode) -->
          <span v-if="typeof feature.icon === 'string'">{{ feature.icon }}</span>

          <!-- Если иконка задана как объект с src -->
          <img
            v-else-if="feature.icon && feature.icon.src"
            :src="feature.icon.src"
            :alt="feature.title"
          />

          <!-- Если иконка задана как объект с dark/light вариантами -->
          <img
            v-else-if="feature.icon && feature.icon.dark && feature.icon.light"
            :src="$themeConfig.darkMode ? feature.icon.dark : feature.icon.light"
            :alt="feature.title"
          />
        </div>

        <div class="content">
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.details }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

console.log('555');

defineProps({
  features: {
    type: Array,
    required: true
  }
});
</script>

<style scoped>
.features2 {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.features2 h2 {
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333;
}

.features2-list {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.features2-item {
  flex: 1 1 calc(33% - 20px);
  min-width: 200px;
  text-align: center;
}

.icon {
  font-size: 2rem;
  color: #42b983;
  margin-bottom: 10px;
}

.icon img {
  width: 48px;
  height: 48px;
}

.content h3 {
  margin: 0 0 5px;
  font-size: 1.2rem;
}

.content p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
}
</style>