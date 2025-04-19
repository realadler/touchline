<template>
    <div class="w-full bg-white">
        <div class="main-row p-5 grid grid-cols-4 gap-5 divide-x">
            <div>
                <NuxtImg src="/images/fc.png" alt="" class="w-14 mb-2"/>
                <h2 class="text-[48px] font-extrabold leading-none text-black">CLUB</h2>
                <h2 class="text-[64px] font-extrabold leading-none text-primary">SLOGAN</h2>
            </div>
            <div class="p-5 text-xs font-bold h-full">
                <ul class="mb-5 space-y-2">
                    <li>Stadium Name</li>
                    <li>Street Address</li>
                    <li>Club City</li>
                    <li>Club County</li>
                    <li>Club Postcode</li>
                </ul>
                <p>Tel: 0000 000 0000</p>
            </div>
            <div class="p-5">
                <ul class="mb-5 space-y-2 text-xs font-bold">
                    <li><NuxtLink to="">ACCESSIBILITY</NuxtLink></li>
                    <li><NuxtLink to="">COMPANY DETAILS</NuxtLink></li>
                    <li><NuxtLink to="">CONTACT US</NuxtLink></li>
                    <li><NuxtLink to="">COOKIE POLICY</NuxtLink></li>
                    <li><NuxtLink to="">PRIVACY POLICY</NuxtLink></li>
                    <li><NuxtLink to="">TERMS OF USE</NuxtLink></li>
                </ul>
            </div>
            <div class="p-5">
                <div class="w-full grid grid-cols-3 gap-5 mb-3">
                    <div class="w-full flex items-center justify-center" v-for=" link in socialLinks" :key="link">
                        <a :href="link.url" target="_blank">
                            <NuxtImg :src="`/images/socialIcons/${link.img}.png`" alt="" class="w-7" />
                        </a>
                    </div>
                </div>
                <p class="text-center text-primary font-bold text-xs mb-2">
                    DOWNLOAD THE OFFICIAL APP
                </p>
                <div class="w-full flex items-center justify-center gap-5">
                    <a href="" target="_blank">
                        <NuxtImg :src="`/images/appStore.png`" alt="" class="h-7" />
                    </a>
                    <a href="" target="_blank">
                        <NuxtImg :src="`/images/playStore.png`" alt="" class="h-7" />
                    </a>
                </div>
            </div>

        </div>
    </div>
    <div class="w-full bg-black">
        <div class="main-row p-5 flex items-center justify-between">
            <p class="text-xs text-white">
                Copyright Touchline Football Club 2025. All Rights Reserved.
            </p>
            <div class="flex items-center gap-5">
                <p class="text-white">
                    Designed & built by
                </p>
                <NuxtImg src="/images/Touchline.png" alt="" class="h-5"/>
            </div>
        </div>

    </div>
</template>
<script setup>
const socialLinks = ref([
    { img:"x", url:"" },
    { img:"insta", url:"" },
    { img:"yt", url:"" },
    { img:"tiktok", url:"" },
    { img:"linkedin", url:"" },
    { img:"fb", url:"" },
])

</script>
<style scoped>
ul li{
    @apply hover:scale-105 transition-all duration-150 cursor-pointer;
}
</style>