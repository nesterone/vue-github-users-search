<script setup lang="ts">
import UserList from "./UserList.vue";
import {useFetch} from "@vueuse/core";
import {computed} from "vue";

interface UserSearchResultProps {
  query: string
}

const { query } = withDefaults(defineProps<UserSearchResultProps>(), {
  query: () => ''
})


const { data } =  useFetch(`https://api.github.com/search/users?q=${query}&per_page=3&page=1`).json()

const users = computed(() => {
  return data?.value?.items.map((i: any) => ({ name: i.login, avatar: i.avatar_url}))
})


</script>

<template>
    <UserList v-if="users" :items="users" />
</template>
