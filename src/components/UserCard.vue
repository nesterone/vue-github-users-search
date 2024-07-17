<script setup lang="ts">
interface UserCardProps {
  name: string
  avatar: string
}

const { avatar, name } = defineProps<UserCardProps>()
</script>

<template>
  <div class="flex flex-1 flex-col p-8">
    <img class="mx-auto h-32 w-32 flex-shrink-0 rounded-full" :src="avatar" alt="User Avatar">
    <h3 class="mt-6 text-sm font-medium text-gray-900">{{ name }}</h3>
    <dl class="mt-1 flex flex-grow flex-col justify-between">
      <dt class="sr-only">Title</dt>
      <dd class="text-sm text-gray-500">Organization</dd>
      <dt class="sr-only">Role</dt>
      <dd class="mt-3">
        <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Admin</span>
      </dd>
    </dl>
  </div>
</template>
