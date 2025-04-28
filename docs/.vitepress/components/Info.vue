<!-- .vitepress/components/Info.vue -->
<template>
    <p v-if="infoText">{{ infoText }}</p>
    <p v-else>Нет данных для отображения</p>

</template>

<script setup>
    console.log('test');
    import { useData } from 'vitepress';
    const { frontmatter } = useData();
    const infoText = frontmatter.value.info?.text || '';

    console.log(infoText);

</script>