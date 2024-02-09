<script setup lang="ts">
import { ref } from "vue"

const count = ref(0)
</script>

<template>
	<Button @click="count++">Click me!</Button>
	{{ count }}
</template>

<style scoped></style>
