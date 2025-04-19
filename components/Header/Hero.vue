<template>
    <div class="w-full h-[760px] bgImage">
        <div class="row h-full flex flex-col justify-end  pb-40">
            <div class="w-full">
                <p class="text-white">
                    13 HOURS AGO
                </p>
                <h1 class="text-white font-bold text-[48px] leading-normal w-[680px]">
                    News Title: <span class="font-normal"> Example of the text that will go here! </span>
                </h1>
                <button class="w-[200px] h-[50px] bg-[#1D71C9] flex items-center justify-center font-bold text-white mb-5">
                    Read More
                </button>
                <div class="flex items-center gap-5">
                    <button class="w-14 h-[2px]" v-for="i in 4" :key="i" :class="i===1?'bg-white':'bg-[#434343]'"></button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.bgImage{
    background-image: url('/images/hero.jpeg');
    @apply bg-no-repeat bg-cover bg-center
}
</style>