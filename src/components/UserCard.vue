<script setup lang="ts">
interface UserCardProps {
  name: string
  avatar: string
  type: string
}

const props = defineProps<UserCardProps>()
const { avatar, name, type } = props
</script>

<template>
  <div class="flex flex-1 flex-col p-8">
    <img class="mx-auto h-32 w-32 flex-shrink-0 rounded-full" :src="avatar" alt="User Avatar" />
    <h3 class="mt-6 text-sm font-medium text-gray-900">{{ name }}</h3>
    <dl class="mt-1 flex flex-grow flex-col justify-between">
      <dt class="sr-only">Type</dt>
      <dd class="text-sm text-gray-500">{{ type }}</dd>
    </dl>
  </div>
</template>
