<script setup lang="ts">
interface Props {
  name: string,
  avatar: string
}

const props = defineProps<Props>()
</script>


<template>
 {{props.name}}
  <img alt="User Avatar" :src="props.avatar" />
</template>
