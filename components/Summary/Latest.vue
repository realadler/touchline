<template>
    <div class="w-full">
        <div class="w-full pb-5 border-b border-black flex items-center justify-between mb-5">
            <p>
                Latest Result - 15:00, Sat 22 Mar 
            </p>
            <NuxtImg src="/images/icons/home-black.png" alt="" class="w-5"/>
        </div>
        <div class="w-full flex items-center gap-5 mb-5">
            <NuxtImg src="/images/fc.png" alt="" class="w-20"/>
            <div>
                <div class="w-full flex items-center gap-5">
                    <p class="text-primary font-bold text-xl w-5">
                        2
                    </p>
                    <div class="h-5 w-[0.5px] bg-primary"></div>
                    <p class="text-primary font-bold text-xl">
                        TOUCHLINE FC
                    </p>
                </div>
                <div class="w-full flex items-center gap-5">
                    <p class="text-black font-thin text-xl w-5">
                        2
                    </p>
                    <div class="h-5 w-[0.5px] bg-black"></div>
                    <p class="text-black font-thin text-xl">
                        OTHER TEAM FC
                    </p>
                </div>
            </div>
        </div>
        <div class="flex items-center gap-5">
            <ButtonPrimary 
                :imageURL="'/images/icons/desktop-white.png'"
                :label="'REPORT'"
            />
            <ButtonOutline
                :imageURL="'/images/icons/play-blue.png'"
                :label="'HIGHLIGHTS'"
            />
        </div>
    </div>
</template>