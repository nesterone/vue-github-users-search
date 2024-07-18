<script setup lang="ts">
import {useFetch, useDebounceFn} from "@vueuse/core";
import {computed, ref, watch} from "vue";
import UserCard from "@/components/UserCard.vue";
import {API_BASE_URL} from "@/config";

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

    <div v-else-if="error" class="border-l-4 border-yellow-400 bg-yellow-50 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"/>
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm text-yellow-700">
            You’re going too fast! Please try again in 1 minute.
          </p>
        </div>
      </div>
    </div>


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
