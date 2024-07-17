<script setup lang="ts">
interface UserCardProps {
  name: string
  avatar: string
}

const { avatar, name } = defineProps<UserCardProps>()
</script>

<template>
  <div class="flex min-w-0 gap-x-4">
    <img class="h-12 w-12 flex-none rounded-full bg-gray-50"
         :src="avatar"
         alt="User Avatar">
    <div class="min-w-0 flex-auto">
      <p class="text-sm font-semibold leading-6 text-gray-900">{{ name }}</p>
<!--      <p class="mt-1 truncate text-xs leading-5 text-gray-500">Organization</p>-->
    </div>
  </div>
  <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
    <p class="text-sm leading-6 text-gray-900">Organization</p>
    <div class="mt-1 flex items-center gap-x-1.5">
      <div class="flex-none rounded-full bg-emerald-500/20 p-1">
        <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
      </div>
      <p class="text-xs leading-5 text-gray-500">Site Admin</p>
    </div>
  </div>
</template>
