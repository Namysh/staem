<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const emit = defineEmits(['load'])
const props = defineProps(['disabled'])

const infiniteScrollTrigger = ref()

const intersectionObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting && !props.disabled) emit('load')
}, { threshold: 1 });

onMounted(() => intersectionObserver.observe(infiniteScrollTrigger.value));
onUnmounted(() => intersectionObserver.disconnect())
</script>


<template>
    <slot></slot>

    <div ref="infiniteScrollTrigger">
    </div>
</template>