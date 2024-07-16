<script setup lang="ts">
import UserList from "./UserList.vue";
import {useFetch} from "@vueuse/core";
import {computed, ref, watch} from "vue";

interface UserSearchResultProps {
  query: string
}

const props = withDefaults(defineProps<UserSearchResultProps>(), {
  query: () => ''
})

let url = ref(`https://api.github.com/search/users?q=${props.query}&per_page=3&page=1`);
const {data} = useFetch(url, {refetch: true}).json()

watch(() => props.query, (newQuery) => {
  url.value = `https://api.github.com/search/users?q=${newQuery}&per_page=3&page=1`
})

const users = computed(() => {
  return data?.value?.items.map((i: any) => ({name: i.login, avatar: i.avatar_url}))
})


</script>

<template>
    <p>{{ JSON.stringify(data, null, 2) }}}</p>
    <UserList v-if="users" :items="users" />
</template>
