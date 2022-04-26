<script setup>
import GameCarousel from './components/GameCarousel.vue'
import InfiniteList from './components/InfiniteList.vue'
import GameList from './components/GameList.vue'
import Search from './components/Search.vue';
import Sort, { DEFAULT_FILTERS } from './components/Sort.vue';
import Install from './components/icons/Install.vue'

import { ref, watch, reactive } from "vue";
import { useSteamData } from './useSteamData'

const NUMBER_TO_FETCH = 10

const options = reactive({
  startFrom: 0,
  titleFilter: '',
  orderModifier: DEFAULT_FILTERS[0],
})

const { data: carouselData, loading: carouselDataLoading, fetchData: fetchCourouselData } = useSteamData(5)
// Random order for the carousel (adding some freshness)
fetchCourouselData({orderModifier: DEFAULT_FILTERS[Math.floor(Math.random() * DEFAULT_FILTERS.length)]})

const { data, loading, fetchData, count, error } = useSteamData(NUMBER_TO_FETCH)
fetchData(options)

const fetchMoreData = () => {
  options.startFrom += NUMBER_TO_FETCH
  fetchData(options)
}

watch([() => options.orderModifier, () => options.titleFilter], () => {
  options.startFrom = 0
  fetchData(options)
})
</script>

<template>
  <header class="flex items-center">
    <a href="#" class="font-bold uppercase text-[40px] text-white">STAEM</a>
    <button
      class="ml-auto rounded-3xl bg-[#214B6B] text-white p-1 px-3 inline-flex items-center justify-center gap-2 group">
      <Install class="transition-transform group-hover:-translate-y-[3px]" />
      <span>Install</span>
    </button>
  </header>

  <GameCarousel :games="carouselData" :loading="carouselDataLoading" />

  <main class="flex flex-col w-full transition-all lg:overflow-hidden md:px-16">
    <h2
      class="relative inline-flex text-[28px] mb-8 mr-auto sm:text-4xl transition-all font-bold first-letter:text-white x-framed">
      New &
      Trending</h2>

    <div class="flex flex-col gap-3 mb-6 md:flex-row">
      <Search :debounce="300" v-model="options.titleFilter" />
      <Sort v-model="options.orderModifier" />
    </div>

    <InfiniteList :disabled="loading || count < options.startFrom + NUMBER_TO_FETCH" @load="fetchMoreData">
      <GameList :games="data" :loading="loading">
       
      </GameList>
    </InfiniteList>

  </main>
</template>

<style>
#app {
  @apply max-w-7xl p-4 m-auto text-white;
}

.line {
  @apply rounded-3xl w-32 h-2 bg-[#214b6b];
}

.x-framed::before {
  @apply line content-[''] absolute top-1/2 -translate-y-1/2 right-full -translate-x-2.5;
}

.x-framed::after {
  @apply line content-[''] absolute top-1/2 -translate-y-1/2 left-full translate-x-2.5;
}
</style>

