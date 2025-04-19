<template>
    <button 
        class="px-5 py-2 bg-transparent text-white flex items-center justify-center gap-1  cursor-pointer hover:bg-white hover:text-primary transition-all duration-150" 
        @click="emits('click')"
        @mouseenter="hover=true"
        @mouseleave="hover=false">
        <NuxtImg :src="hover?invertedImageURL:imageURL" alt="" class="size-[18px]" v-if="imageURL"/>
        <p class="text-[13px] font-bold  leading-none">
            {{ label }}
        </p>
    </button>
</template>
<script setup>
import { ref } from "vue"
const emits = defineEmits(['click'])
const hover = ref(false)
const props = defineProps({
    label:String,
    imageURL:String,
    invertedImageURL:String,
})

</script>