<template>
    <div class="w-full bg-white py-16">
        <div class="main-row">
            <h2 class="text-black font-bold text-4xl mb-5">
                FEATURED ITEMS            
            </h2>
            <div class="w-full grid grid-cols-3 gap-10">
                <FeaturedCard/>
                <FeaturedCard/>
                <FeaturedCard/>
            </div>
            <div class="w-full flex items-center justify-center p-5 mt-5">
                <ButtonOutline
                    :label="'VIEW MORE'"
                />
            </div>
        </div>
    </div>
</template>