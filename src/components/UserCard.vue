<script setup lang="ts">
interface UserCardProps {
  name: string
  avatar: string
}

const {avatar, name} = defineProps<UserCardProps>()
</script>

<template>
  <img alt="User Avatar" :src="avatar" width="72" height="72" />
  <p>  {{ name }}</p>
</template>
