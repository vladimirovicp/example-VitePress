<template>
    <button @click="onClick">Increase</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)
const onClick = ():void => {
    count.value++

    console.log(count.value);
}
</script>