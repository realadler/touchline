<template>
    <div class="w-full bg-[#1D71C9]">
        <div class="row relative">
            <NuxtImg src="/images/logo.png" alt="" class="w-24 absolute"/>
            <ul class="w-full flex items-center gap-10 justify-end py-3 px-5">
                <li v-for="link in topNavs" :key="link">
                    <NuxtLink to="" class="flex items-center gap-3 text-white font-bold text-base">
                        <NuxtImg :src="`/images/icons/${link.img}.png`" alt="" class="w-6" />
                        <p>
                            {{ link.label }}
                        </p>
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="w-full bg-black">
        <div class="row pl-24 flex items-center justify-between">
            <ul class="w-full flex items-center gap-10 py-5 px-5">
                <li v-for="link in mainNavs" :key="link">
                    <NuxtLink to="" class="flex items-center gap-3 text-white font-bold text-base">
                        <p>
                            {{ link.label }}
                        </p>
                    </NuxtLink>
                </li>
            </ul>
            <div class="flex items-center gap-5">
                <button>
                    <NuxtImg src="/images/icons/Search-Icon.png" class="w-6"/>
                </button>
                <button>
                    <NuxtImg src="/images/icons/menuIcon.png" class="w-6"/>
                </button>
            </div>
        </div>
    </div>

</template>
<script setup>

const topNavs = ref([
    { img:"bag", label:"Store", path:""},
    { img:"calender", label:"Events", path:""},
    { img:"ticket", label:"Tickets", path:""},
    { img:"user", label:"Sign In", path:""},
])
const mainNavs = ref([
    { label:"Home", path:"" },
    { label:"Matches", path:"" },
    { label:"News", path:"" },
    { label:"Teams", path:"" },
])

</script>