<script setup lang="ts">
import UserList from "./UserList.vue";
import {useFetch, useDebounceFn} from "@vueuse/core";
import {computed, ref, watch} from "vue";

interface UserSearchResultProps {
  query: string
}

const props = withDefaults(defineProps<UserSearchResultProps>(), {
  query: () => ''
})

const getUrl = (q: string) => `https://api.github.com/search/users?q=${q}&per_page=3&page=1`

let url = ref(getUrl(props.query));
const {data} = useFetch(url, {refetch: true}).json()
const changeUrl = useDebounceFn((newQuery) => {
  url.value = getUrl(newQuery);
}, 500)

watch(() => props.query, changeUrl)

const users = computed(() => {
  return data?.value?.items.map((i: any) => ({name: i.login, avatar: i.avatar_url}))
})


</script>

<template>
    <p>{{ JSON.stringify(data, null, 2) }}}</p>
    <UserList v-if="users" :items="users" />
</template>
