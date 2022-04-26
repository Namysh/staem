<script setup>
import Install from './icons/Install.vue'
</script>

<template>
    <header class="flex items-center">
        <a href="" class="font-bold uppercase text-[40px] text-white">STAEM</a>
        <button
            class="ml-auto rounded-3xl bg-[#214B6B] text-white p-1 px-3 inline-flex items-center justify-center gap-2 group">
            <Install class="transition-transform group-hover:-translate-y-[3px]"></Install>

            <span class="">Install</span>
        </button>
    </header>
</template>