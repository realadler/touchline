<template>
    <div class="w-full bg-[#1D71C9]">
        <div class="row relative">
            <NuxtImg src="/images/logo.png" alt="" class="w-24 absolute cursor-pointer hover:scale-95 transition-all duration-150" @click="navigateTo('/')"/>
            <ul class="w-full flex items-center gap-10 justify-end py-3 px-5">
                <li v-for="link in topNavs" :key="link">
                    <NuxtLink to="">
                        <ButtonLink
                            :imageURL="`/images/icons/${link.img}.png`"
                            :invertedImageURL="`/images/icons/${link.invertImg}.png`"
                            :label="link.label"
                        />
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
    <div class="w-full bg-black">
        <div class="row pl-24 flex items-center justify-between">
            <ul class="w-full flex items-center gap-10 py-5 px-5">
                <li 
                    v-for="(link,i) in mainNavs" 
                    :key="link" 
                    :class="selected==i?'border-b-2 border-primary':''" 
                    @click="selected=i"
                    >
                    <NuxtLink to="" class="flex items-center gap-3 text-white font-bold text-base cursor-pointer  hover:border-b-2 border-primary transition-all duration-150">
                        <p>
                            {{ link.label }}
                        </p>
                    </NuxtLink>
                </li>
            </ul>
            <div class="flex items-center gap-5">
                <button class="hover:cursor-pointer hover:scale-105 transition-all duration-150">
                    <NuxtImg src="/images/icons/search-white.png" class="w-6"/>
                </button>
                <button class="hover:cursor-pointer hover:scale-105 transition-all duration-150">
                    <NuxtImg src="/images/icons/menu-white.png" class="w-6"/>
                </button>
            </div>
        </div>
    </div>

</template>
<script setup>

const topNavs = ref([
    { img:"bag-white", invertImg:"bag", label:"Store", path:""},
    { img:"calendar-white", invertImg:"calendar", label:"Events", path:""},
    { img:"ticket-white", invertImg:"ticket", label:"Tickets", path:""},
    { img:"user-white", invertImg:"user", label:"Sign In", path:""},
])
const selected = ref(0)
const mainNavs = ref([
    { label:"Home", path:"" },
    { label:"Matches", path:"" },
    { label:"News", path:"" },
    { label:"Teams", path:"" },
])

</script>