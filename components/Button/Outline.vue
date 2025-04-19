<template>

    <button 
        v-if="dark"
        class="px-[35px] py-[14px] bg-white border border-black text-black flex items-center justify-center gap-1  cursor-pointer hover:bg-black hover:text-white transition-all duration-150" 
        @click="emits('click')"
        @mouseenter="hover=true"
        @mouseleave="hover=false">
        <NuxtImg :src="hover?invertedImageURL:imageURL" alt="" class="size-[18px]" v-if="imageURL"/>
        <p class="text-[13px]  font-bold  leading-none">
            {{ label }}
        </p>
    </button>
    <button 
        v-else
        class="px-[35px] py-[14px] bg-white border border-primary text-primary flex items-center justify-center gap-1  cursor-pointer hover:bg-primary hover:text-white transition-all duration-150" 
        @click="emits('click')"
        @mouseenter="hover=true"
        @mouseleave="hover=false">
        <NuxtImg :src="hover?invertedImageURL:imageURL" alt="" class="size-[18px]" v-if="imageURL"/>
        <p class="text-[13px]  font-bold  leading-none">
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
    dark:Boolean
})

</script>