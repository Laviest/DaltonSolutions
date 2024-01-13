<template>
    <div>
        <img :src="getImageUrl()" :alt="alt">
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

function getImageUrl() {
  // This path must be correct for your file
  return new URL(`../assets/${props.imageName}`, import.meta.url)
}

// export default {
//     props: {
//         imageName: String,
//         title: String,
//         desc: String,
//         alt: String,
//     }
// }

</script>