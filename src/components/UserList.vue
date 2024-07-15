<script setup lang="ts">
interface UserListProps {
  items?: [],
}

const {items} = withDefaults(defineProps<UserListProps>(), {
  items: () => []
})
</script>


<template>



 <ul role="list" v-if="items.length">

 </ul>

 <span v-else data-testid="message">No users found.</span>

</template>
