<script setup lang="ts">
import UsersSearchResult from '@/components/UsersSearchResult.vue'
import { ref } from 'vue'
import NavBar from '@/components/NavBar.vue'

const search = ref('fact')
</script>

<template>
  <NavBar>
    <input
      v-model="search"
      name="search"
      class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
      placeholder="Search"
      type="search"
    />
  </NavBar>

  <main>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-6xl py-4">
        <UsersSearchResult :query="search" per-page="25" />
      </div>
    </div>
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
