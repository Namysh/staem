<script>
export const DEFAULT_FILTERS = [
    { label: 'Id: asc', field: 'id', ascending: true,},
    { label: 'Id: desc', field: 'id', ascending: false,},
    { label: 'Price: asc', field: 'price', ascending: true,},
    { label: 'Price: desc', field: 'price', ascending: false,},
    { label: 'Name: asc', field: 'title', ascending: true,},
    { label: 'Name: desc', field: 'title', ascending: false,},
]
</script>

<script setup>
import { computed } from "vue";

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: Object,
    filters: {
        type: Object,
        default: () => (DEFAULT_FILTERS),
    }
});

const value = computed({
    get() {
        return props.modelValue
    },
    set(value) {
        console.log(value)
        emit('update:modelValue', value)
    }
})
</script>

<template>
    <label for="sort" class="inline-flex items-center gap-5 md:ml-auto">
        Sort by
        <select  v-model="value" class="bg-[#1A3A53] outline-none py-1 px-3 flex-grow sm:w-52 rounded-[30px]" id="sort">
            <option v-for="filter in filters" :key="filter.label" :value="filter">{{ filter.label }}</option>
        </select>
    </label>
</template>