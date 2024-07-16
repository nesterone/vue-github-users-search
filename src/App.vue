<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import UserList from "@/components/UserList.vue";
import { useFetch } from '@vueuse/core'

import {computed} from "vue";

const { data } =  useFetch('https://api.github.com/search/users?q=fact&per_page=3&page=1').json()

const users = computed(() => {
  return data?.value?.items.map((i: any) => ({ name: i.login, avatar: i.avatar_url}))
})


</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="Github Users" />
    </div>
  </header>

  <main>

    <UserList v-if="users" :items="users" />

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
