<!-- .vitepress/components/Breadcrumbs.vue -->
<template>
  <nav class="breadcrumbs">
    <ul>
      <li>
        <a href="/">Главная</a>
      </li>
      <li v-for="(crumb, index) in crumbs" :key="index">

        <a v-if="crumb.link"
          :href="crumb.link"
          :aria-current="index === crumbs.length - 1 ? 'page' : null">
            {{ crumb.text }}
          </a>
          <span v-else>{{ crumb.text }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useData } from 'vitepress';
import { computed } from 'vue';

// Получаем данные из VitePress
const { page, site } = useData();

// Вычисляем хлебные крошки
const crumbs = computed(() => {
  const path = page.value.relativePath; // Текущий путь страницы

  function getTitleByPath(path, pages) {
  return pages.find((p) => p.relativePath === path)?.title || '';
}

console.log(path);

console.log(path);

    const currentPagePath = page.value.relativePath;
  const parts = currentPagePath.split('/').filter((part) => part !== '');
  const navPages = site.value.pages;

  console.log('currentPagePath', currentPagePath);
  console.log('parts', parts);
  console.log('navPages', navPages);

  return path
    .split('/') // Разделяем путь по слэшу
    .filter((part) => part !== '') // Убираем пустые части
    .map((part, index, array) => {
      const link = `/${array.slice(0, index + 1).join('/')}/`; // Создаём ссылку
      const text = part.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase()); // Форматируем текст
      return { text, link: index === array.length - 1 ? null : link }; // Последний элемент без ссылки
    });
});

</script>

<style scoped>
.breadcrumbs ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.breadcrumbs li {
  margin-right: 5px;
}

.breadcrumbs li::after {
  content: ' / ';
  color: #666;
}

.breadcrumbs li:last-child::after {
  content: none;
}

.breadcrumbs a {
  text-decoration: none;
  color: #42b983;
}

.breadcrumbs span {
  color: #333;
}
</style>