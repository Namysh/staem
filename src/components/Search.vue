<script setup>
import { useDebounceFn  } from '@vueuse/core'

const props = defineProps(['modelValue', 'debounce']);
const emit = defineEmits(['update:modelValue']);
const handleInput = useDebounceFn(($event) => emit('update:modelValue', $event.target.value), props.debounce);
</script>

<template>
    <input class="outline-none rounded-[30px] bg-[#1A3A53] placeholder:text-opacity-50 py-1 px-3 text-white"
        type="text" placeholder="Search" @input="handleInput"  />
</template>

