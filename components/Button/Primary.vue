<template>
    <button class="px-[35px] py-[14px] bg-primary flex items-center justify-center gap-1" @click="emits('click')">
        <NuxtImg :src="imageURL" alt="" class="w-[18px]" v-if="imageURL"/>
        <p class="text-[13px]  font-bold text-white leading-none">
            {{ label }}
        </p>
    </button>
</template>
<script setup>
const emits = defineEmits(['click'])
const props = defineProps({
    label:String,
    imageURL:String
})

</script>