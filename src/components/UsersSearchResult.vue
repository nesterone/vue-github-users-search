<script setup lang="ts">
import {useFetch, useDebounceFn} from "@vueuse/core";
import {computed, ref, watch} from "vue";
import UserCard from "@/components/UserCard.vue";
import {API_BASE_URL} from "@/config";
import ErrorMessage from "@/components/ErrorMessage.vue";

interface UserSearchResultProps {
  query: string;
  perPage: string;
}

const props = withDefaults(defineProps<UserSearchResultProps>(), {
  query: () => '',
  perPage: () => '3'
})

const getUrl = (q: string) => `${API_BASE_URL}?q=${q}&per_page=${props.perPage}&page=1`
let url = ref(getUrl(props.query));
const changeUrl = useDebounceFn((newQuery) => {
  url.value = getUrl(newQuery);
}, 500)

watch(() => props.query, changeUrl)

const {data, isFetching, isFinished, error} = useFetch(url, {refetch: true}).json()

const users = computed(() => {
  return data?.value?.items ?? [];
});

</script>

<template>
  <div data-testid="users">
    <span v-if="isFetching">Loading...</span>


    <ErrorMessage v-else-if="error" message="You’re going too fast! Please try again in 1 minute." />


    <div v-else-if="isFinished && users.length === 0" class="text-center">
      <h3 class="mt-2 text-sm font-semibold text-gray-900" data-testid="message">No Users Found</h3>
      <p class="mt-1 text-sm text-gray-500">Try another search query</p>
    </div>

    <ul v-else-if="isFinished && users.length > 0" role="list"
        class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <li v-for="item in users" :key="item.login" role="listitem"
          class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
        <UserCard :name="item.login" :avatar="item.avatar_url" :site-admin="item.site_admin" :type="item.type"/>
      </li>
    </ul>
  </div>
</template>
