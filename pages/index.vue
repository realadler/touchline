<template>
    <HeaderHero/>
    <Summary/>
    <LatestNews/>
    <Advertise/>
    <FeaturedItems/>
    <Ads/>
    <Sponsor/>
</template>
<script setup>
import axios from 'axios'

onBeforeMount( async ()=>{
    // const BLappId = "2960A7E2-432D-4AD8-9349-7601C2ED58B4";
    // const BLRestApiKey = "C7DEECF4-82EB-4F42-86BD-49ACA7E19114";
    // try {
    //     const respose = await axios.get(
    //         `https://api.kibouapp.co.uk/${BLappId}/${BLRestApiKey}/data/CMSContent?pageSize=10&sortBy=%60created%60%20desc`
    //     )
    //     console.log(respose);
    // } catch (error) {
    //     console.log("Error:" , error);
        
    // }
    
})
</script>