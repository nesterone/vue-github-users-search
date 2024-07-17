<script setup lang="ts">
import UserCard from '@/components/UserCard.vue'

interface UserListProps {
  items?: {login: string, avatar_url: string }[]
}

const { items } = withDefaults(defineProps<UserListProps>(), {
  items: () => []
})
</script>

<template>
  <div data-testid="users">
    <ul role="list" v-if="items.length">
      <li v-for="item in items" :key="item.login" role="listitem">
        <UserCard :name="item.login" :avatar="item.avatar_url" />
      </li>
    </ul>
    <span v-else data-testid="message">User search returned no results.</span>
  </div>
</template>
