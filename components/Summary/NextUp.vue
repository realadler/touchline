<template>
    <div class="w-full">
        <div class="w-full pb-5 border-b border-black flex items-center justify-between mb-5">
            <p>
                Up Next - 15:00, Sat 22 Mar 
            </p>
            <NuxtImg src="/images/icons/home-black.png" alt="" class="w-5"/>
        </div>
        <div class="w-full flex items-center gap-5 mb-5">
            <NuxtImg src="/images/fc.png" alt="" class="w-20"/>
            <div>
                <h2 class="text-xl font-bold text-[#424242]">
                    BARWELL FC
                </h2>
                <p class="font-thin">
                    New Meadow Lane - Away
                </p>
            </div>
        </div>
        <div class="flex items-center gap-5">
            <ButtonPrimary 
                :imageURL="'/images/icons/desktop-white.png'"
                :label="'PREVIEW'"
            />
            <ButtonOutline
                :imageURL="'/images/icons/play-blue.png'"
                :label="'FIXTURES'"
            />
        </div>
    </div>
</template>