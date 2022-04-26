<script setup>
import Windows from './icons/Windows.vue'
import Mac from './icons/Mac.vue'
import Loading from './icons/Loading.vue'

defineProps(['games', 'loading'])

const formatPrice = (price) => `$${price}${price.indexOf('.') === -1 ? '.00' : ''}`
const open = link => window.open(link, '_blank');
</script>

<template>
    <ul class="flex flex-col gap-10 transition-all scroll-smooth">
        <li @click="open(game.link)" class="flex flex-col overflow-hidden cursor-pointer lg:flex-row rounded-3xl"
            v-for="(game, index) in  games" :key="game.id" style="background-color: #17202d">
            <img class="h-auto" :src="game.image" alt="" />

            <div class="flex flex-col flex-grow gap-4 p-5 overflow-hidden lg:flex-row md:p-7">
                <div class="flex flex-col flex-grow gap-2 overflow-hidden">
                    <h2 class="text-[28px] font-semibold text-white line-clamp-2 lg:line-clamp-1 break-words">{{
                            game.title
                    }}</h2>
                    <span class="text-xl text-white/50 line-clamp-2">{{ game.tags.join(", ") }}</span>
                    <div class="mt-2 line"></div>
                </div>

                <div class="flex flex-row items-end flex-grow mt-auto shrink-0 lg:mt-0 lg:flex-col">
                    <div class="flex gap-2 ml-0 lg:flex-col lg:ml-auto ">
                        <component :is="{ Mac, Windows }[platform]" v-for="platform in game.platforms" :key="platform" />
                    </div>
                    <span
                        class="ml-auto text-[40px] leading-none xl:text-5xl transition-all font-bold text-white lg:mt-auto ">{{
                                formatPrice(game.price +
                                    '')
                        }}</span>

                </div>
            </div>
        </li>
        <Loading class="col-span-2 m-auto" v-show="loading"/>
    </ul>
</template>