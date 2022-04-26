<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Loading from './icons/Loading.vue';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import '@splidejs/vue-splide/css';

const { smaller } = useBreakpoints(breakpointsTailwind)
const mdOrLess = smaller('md')

defineProps(['games', 'loading'])
</script>

<template>
    <div class="relative flex flex-col items-center w-full my-16 select-none sm:my-24">
        <div class="w-full h-full -z-10 elipse bg-[#4D6E95]/50 absolute filter blur-[300px] ">
        </div>
        <Splide class="relative w-full" v-if="!loading" :options="{
            type: 'loop', padding: `${mdOrLess ? 0 : 20}%`, updateOnMove: true, perPage: 1, keyboard: false, drag: mdOrLess, gap: `${+mdOrLess}rem`, isNavigation: true, focus: 'center', classes: {
                pagination: 'custom-pagination',
                page: 'custom-page',
                arrow: 'hidden'
            }
        }">
            <SplideSlide v-for="game in games" :key="game.id">
                <img :src="game.image" class="overflow-hidden rounded-[30px]" :alt="game.title" />
            </SplideSlide>
        </Splide>
        <div v-else class="w-full bg-white/20 h-60 flex items-center justify-center rounded-[30px]">
            <Loading  />
        </div>
    </div>
</template>

<style >
@media screen(sm) {
    .splide__slide:not(.is-active) {
        @apply flex items-center !important;
    }

    .splide__slide:not(.is-active)>img {
        @apply w-2/3 !important;
    }

    .splide__slide.is-prev>img {
        @apply ml-auto mr-11 !important;
    }

    .splide__slide.is-next>img {
        @apply mr-auto ml-11 !important;
    }
}

.splide__slide:not(.is-active)>img {
    @apply opacity-50 !important;
}

.splide__slide>img {
    @apply w-full !important;
}

.splide__slide.is-active {
    @apply border-none outline-none !important;
}

.custom-pagination {
    @apply flex items-center justify-center gap-2 mt-3 static !important;
}

.custom-page {
    @apply w-2 h-2 rounded-full bg-white/50 !important;
}

.custom-page.is-active {
    @apply w-2 h-2 bg-white scale-100 !important;
}
</style>