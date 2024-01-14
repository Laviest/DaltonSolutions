<template>
    <div class="absolute w-full ml-auto mr-auto">

    
    <div class="text-white py-4 md:flex justify-between items-center max-w-[1400px] ml-auto mr-auto">
    <div class="flex items-center">
        <h1 class="text-xl font-semibold">Dalton Solutions</h1>
    </div>

    <span @click="MenuOpen()" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
        <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>


    <ul class="md:flex md:items-center md:px-0 px-3 md:pb-0 pb-10 md:static absolute md:w-auto w-full top:14 duration-700 ease-in"
        :class="[open ? 'left-0' : 'left-[-100%]']">
        <li class="md:mx-4 md:my-0 my-6" v-for="link in Links">
            <a :href="link.link" class=" font-semibold hover:text-green-500">{{link.name}}</a>
        </li>
        <Button>Get a Free Website</Button>
    </ul>
    </div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import Button from './Button.vue'

export default {
    components: {
        Button
    },

    setup() {
        let open = ref(false)
        let Links = [
            {name: "Home", link : "#"},
            {name: "About", link : "#"},
            {name: "Why Us", link : "#"},
            {name: "FAQs", link : "#"}
        ]

        function MenuOpen() {
            open.value = !open.value
        }

        return{Links, open, MenuOpen}
    }
}
</script>
