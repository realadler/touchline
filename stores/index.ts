import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => { 
    const BLappId = ref("2960A7E2-432D-4AD8-9349-7601C2ED58B4");
    const BLRestApiKey = ref("C7DEECF4-82EB-4F42-86BD-49ACA7E19114");
    const BLJsApiKey = ref("975B5D1B-F5D5-4929-82B5-0DB4FEBEAAA5")

    return { 
        BLappId,
        BLRestApiKey,
        BLJsApiKey
     }
  })