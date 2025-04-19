<template>
    <div class="w-full">
        <div class="w-full pb-5 border-b border-black flex items-center justify-between mb-5">
            <p class="text-xs">
                Up Next - {{ new Date(info.start).toUTCString()  }} 
            </p>
            <ButtonIcon
                :imageURL="'/images/icons/home-black.png'"
                :invertedImageURL="'/images/icons/home-filled.png'"
            />
        </div>
        <div class="w-full flex items-center gap-5 mb-5">
            <NuxtImg :src="info.AwayBadge" alt="" class="w-20"/>
            <div>
                <h2 class="text-xl font-bold text-[#424242]">
                    {{ info.AwayTeamName }}
                </h2>
                <p class="font-thin">
                    {{ info.AwayTeamName }} - Away
                </p>
            </div>
        </div>
        <div class="flex items-center gap-5">
            <ButtonPrimary 
                :imageURL="'/images/icons/desktop-white.png'"
                :invertedImageURL="'/images/icons/desktop.png'"
                :label="'PREVIEW'"
            />
            <ButtonOutline
                :imageURL="'/images/icons/play.png'"
                :invertedImageURL="'/images/icons/play-white.png'"
                :label="'FIXTURES'"
            />
        </div>
    </div>
</template>
<script setup>
import axios from "axios";
import { storeToRefs } from "pinia";
import { onBeforeMount, ref } from "vue";
const info = ref({})
const store = useStore();
const { BLappId, BLRestApiKey } = storeToRefs(store)
const getInfo = async () => {
    try {
        const currentTime = new Date().getUTCMilliseconds();
        const url = `https://api.kibouapp.co.uk/${BLappId.value}/${BLRestApiKey.value}/data/Fixtures?pageSize=1&where=end%20%3E%20'${currentTime}'%20AND%20isPostponed%20%3D%20FALSE&sortBy=%60start%60%20asc`
        const res = await axios.get(url);
        info.value = res.data[0];
        console.log(info);

    } catch (error) {
        console.log('Get Result Error:', error);
    }
}
onBeforeMount(()=>{
    getInfo();
})
</script>