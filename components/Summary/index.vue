<template>
    <div class="custom-shadow w-full max-w-[850px] mx-auto relative z-10 -mt-20 rounded-2xl p-10 grid grid-cols-2 gap-20 mb-5 bg-white">
        <div class="w-full">
            <SummaryNextUp/>
        </div>
        <div class="w-full">
            <SummaryLatest/>
        </div>
    </div>
</template>
<style>
.custom-shadow{
    box-shadow: 0 0 5px #00000020;
}
</style>