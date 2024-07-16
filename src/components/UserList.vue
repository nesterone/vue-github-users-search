<script setup lang="ts">
import type { User } from '@/api/User'
import UserCard from '@/components/UserCard.vue'

interface UserListProps {
  items?: User[]
}

const { items } = withDefaults(defineProps<UserListProps>(), {
  items: () => []
})
</script>

<template>
  <div data-testid="users">
    <ul role="list" v-if="items.length">
      <li v-for="item in items" :key="item.name" role="listitem">
        <user-card :name="item.name" :avatar="item.avatar" />
      </li>
    </ul>
    <span v-else data-testid="message">User search returned no results.</span>
  </div>
</template>
