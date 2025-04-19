<template>
    <div class="w-full bg-white">
        <div class="main-row">
            <h2 class="text-black font-bold text-4xl mb-5">
                LATEST NEWS
            </h2>
            <div class="w-full grid grid-cols-5 gap-5">
                <div class="w-full space-y-5">
                    <div class="w-full h-[276px] bg-black rounded-2xl flex flex-col justify-end">
                        <div class="p-2.5">
                            <p class="text-xl font-bold text-white mb-2">
                                NEWS TITLE EXAMPLE GOES HERE
                            </p>
                            <p class="py-2 border-t border-white text-xs text-white w-20">
                                1 APR 2025
                            </p>
                        </div>
                    </div>
                    <div class="w-full h-[191px] bg-black rounded-2xl">
                        <div class="p-2.5">
                            <p class="text-xl font-bold text-white mb-2">
                                NEWS TITLE EXAMPLE GOES HERE
                            </p>
                            <p class="py-2 border-t border-white text-xs text-white w-20">
                                1 APR 2025
                            </p>
                        </div>
                    </div>
                </div>
                <div class="w-full h-full col-span-2">
                    <div class="w-full h-full bg-black rounded-2xl  flex flex-col justify-end">
                        <div class="p-5">
                            <p class="py-2 border-b border-white text-xs font-bold text-white w-20">
                                2 DAYS AGO
                            </p>
                            <p class="text-[33px] font-bold text-white mb-2">
                                NEWS TITLE EXAMPLE GOES HERE
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div class="w-full col-span-2 space-y-5">
                    <div class="w-full h-[289px] bg-[#1D71C9] rounded-2xl"></div>
                    <div class="w-full h-[179px] grid grid-cols-2 gap-5">
                        <div class="w-full h-full bg-black rounded-2xl  flex flex-col justify-end">
                            <div class="p-2.5">
                                <p class="text-base font-bold text-white mb-2">
                                    NEWS TITLE EXAMPLE GOES HERE
                                </p>
                                <p class="py-2 border-t border-white text-xs text-white w-20">
                                    1 APR 2025
                                </p>
                            </div>
                        </div>
                        <div class="w-full h-full bg-black rounded-2xl  flex flex-col justify-end">
                            <div class="p-2.5">
                                <p class="text-base font-bold text-white mb-2">
                                    NEWS TITLE EXAMPLE GOES HERE
                                </p>
                                <p class="py-2 border-t border-white text-xs text-white w-20">
                                    1 APR 2025
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex items-center justify-center p-5">
                <ButtonOutline
                    :label="'VIEW MORE'"
                />
            </div>
        </div>
    </div>
</template>