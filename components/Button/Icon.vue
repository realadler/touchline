<template>
    <button 
        class="cursor-pointer"
        @click="emits('click')"
        @mouseenter="hover=true"
        @mouseleave="hover=false">
        <NuxtImg :src="hover?invertedImageURL:imageURL" alt="" class="size-5" v-if="imageURL"/>
    </button>
</template>
<script setup>
import { ref } from "vue"

const props = defineProps({
    imageURL:String,
    invertedImageURL:String,
})
const emits = defineEmits(['click'])
const hover = ref(false)
</script>