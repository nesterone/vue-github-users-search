<script setup lang="ts">
import Greetings from './components/Greetings.vue'
import UsersSearchResult from "@/components/UsersSearchResult.vue";
import {ref} from "vue";
import NavBar from "@/components/NavBar.vue";

const search = ref('fact')

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <Greetings msg="Github Users" />
    </div>
    <div>
      <h2>Search</h2>
      <input name="search" v-model="search">
    </div>
  </header>

<!--  <NavBar />-->


  <main>
    <UsersSearchResult :query="search" />
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
