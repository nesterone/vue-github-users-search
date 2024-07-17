<script setup lang="ts">
import {useFetch, useDebounceFn} from "@vueuse/core";
import {computed, ref, watch} from "vue";
import UserCard from "@/components/UserCard.vue";
import {API_BASE_URL} from "@/config";

interface UserSearchResultProps {
  query: string
}

const props = withDefaults(defineProps<UserSearchResultProps>(), {
  query: () => ''
})

const getUrl = (q: string) => `${API_BASE_URL}?q=${q}&per_page=3&page=1`
let url = ref(getUrl(props.query));
const changeUrl = useDebounceFn((newQuery) => {
  url.value = getUrl(newQuery);
}, 500)

watch(() => props.query, changeUrl)

const {data, isFetching, isFinished} = useFetch(url, {refetch: true}).json()

const users = computed(() => {
  return data?.value?.items ?? [];
});

</script>

<template>

  <div data-testid="users">
    <span v-if="isFetching">Loading...</span>
    <ul role="list" v-if="isFinished && users.length > 0">
      <li v-for="item in users" :key="item.login" role="listitem">
        <UserCard :name="item.login" :avatar="item.avatar_url" />
      </li>
    </ul>
    <span v-else-if="isFinished && users.length === 0" data-testid="message">User search returned no results.</span>
  </div>
</template>
