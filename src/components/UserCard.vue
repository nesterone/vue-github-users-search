<script setup lang="ts">
import {computed} from "vue";

interface UserCardProps {
  name: string
  avatar: string
  type: string
  siteAdmin: boolean
}

const props = defineProps<UserCardProps>()
const { avatar, name, type } = props;

const color = computed(() => props.siteAdmin ? 'green': 'red');

const badgeClass = computed(() => {
  const val = color.value
  return `inline-flex items-center rounded-full bg-${val}-50 px-2 py-1 text-xs font-medium text-${val}-700 ring-1 ring-inset ring-${val}-600/20`;
})

</script>

<template>
  <div class="flex flex-1 flex-col p-8">
    <img class="mx-auto h-32 w-32 flex-shrink-0 rounded-full" :src="avatar" alt="User Avatar">
    <h3 class="mt-6 text-sm font-medium text-gray-900">{{ name }}</h3>
    <dl class="mt-1 flex flex-grow flex-col justify-between">
      <dt class="sr-only">Type</dt>
      <dd class="text-sm text-gray-500">{{ type }}</dd>
      <dt class="sr-only">Role</dt>
      <dd class="mt-3">
        <span :class="badgeClass">Site Admin</span>
      </dd>
    </dl>
  </div>
</template>
