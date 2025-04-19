<template>
    <div class="w-full">
        <div class="w-full pb-5 border-b border-black flex items-center justify-between mb-5">
            <p class="text-xs">
                Latest Result - {{ new Date(info.start).toUTCString()  }} 
            </p>
            <ButtonIcon
                :imageURL="'/images/icons/home-black.png'"
                :invertedImageURL="'/images/icons/home-filled.png'"
            />
        </div>
        <div class="w-full flex items-center gap-5 mb-5">
            <NuxtImg :src="info.HomeBadge" alt="" class="w-20"/>
            <div>
                <div class="w-full flex items-center gap-5">
                    <p class="text-primary font-bold text-xl w-5">
                        2
                    </p>
                    <div class="h-5 w-[0.5px] bg-primary"></div>
                    <p class="text-primary font-bold text-xl">
                        {{ info.HomeTeamName }}
                    </p>
                </div>
                <div class="w-full flex items-center gap-5">
                    <p class="text-black font-thin text-xl w-5">
                        {{ info.awayGoals }}
                    </p>
                    <div class="h-5 w-[0.5px] bg-black"></div>
                    <p class="text-black font-thin text-xl">
                        {{ info.AwayTeamName }}
                    </p>
                </div>
            </div>
        </div>
        <div class="flex items-center gap-5">
            <ButtonPrimary 
                :imageURL="'/images/icons/desktop-white.png'"
                :invertedImageURL="'/images/icons/desktop.png'"
                :label="'REPORT'"
            />
            <ButtonOutline
                :imageURL="'/images/icons/play.png'"
                :invertedImageURL="'/images/icons/play-white.png'"
                :label="'HIGHLIGHTS'"
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