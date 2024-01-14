<template>
    <div class=" p-12">
        <img :src="imageUrl" :alt="alt">
        <div class="rounded h-5 w-full bg-white"/>
        <h3>{{ title }}</h3>
        <p>{{ desc }}</p>
    </div>
</template>
<script setup >

import {defineProps} from "vue";

const props = defineProps({
        imageName: String,
        title: String,
        desc: String,
        alt: String,
})

const imageUrl = new URL(`/src/assets/${imageName}.png`, import.meta.url).href

// function getImageUrl() {
//   // This path must be correct for your file
//   return new URL(`../assets/${props.imageName}`, import.meta.url)
// }

// export default {
//     props: {
//         imageName: String,
//         title: String,
//         desc: String,
//         alt: String,
//     }
// }

</script>