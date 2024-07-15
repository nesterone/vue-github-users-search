<script setup lang="ts">
interface UserListProps {
  items?: []
}

const { items } = withDefaults(defineProps<UserListProps>(), {
  items: () => []
})
</script>

<template>
  <ul role="list" v-if="items.length">

    <li v-for="(item) in items" :key="item.name" role="listitem">
      {{ item }}
    </li>


  </ul>

  <span v-else data-testid="message">No users found.</span>
</template>
