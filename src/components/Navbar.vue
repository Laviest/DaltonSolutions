<template>
    <div class="absolute w-full ml-auto mr-auto" :class="[open ? 'bg-blue-main' : '']">

    
    <div class="text-white py-4 md:flex justify-between items-center 2xl:max-w-[1400px] xl:max-w-[1224px] lg:max-w-[988px] ml-auto mr-auto">
    <div class="flex items-center px-6 lg:px-0">
        <h1 class="text-xl font-semibold">Dalton Solutions</h1>
    </div>

    <span @click="MenuOpen()" class="absolute md:hidden right-6 top-4 cursor-pointer text-4xl">
        <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>


    <ul class="md:flex md:items-center md:px-0 px-4 md:pb-0 pb-10 md:static absolute md:w-auto w-full top:14 duration-700 ease-in"
        :class="[open ? 'left-0 bg-blue-main' : 'left-[-100%]']">
        <li class="md:mx-4 md:my-0 my-6" v-for="link in Links" :key="link.name">
            <a  @click="scrollTo(link.pos1, link.pos2)" class="hover:cursor-pointer font-semibold hover:text-green-500">{{link.name}}</a>
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
            {name: "Home", link : "#", pos1: '0', pos2: '0'},
            {name: "About", link : "#", pos1: '2200', pos2: '2100'},
            {name: "Why Us", link : "#", pos1: '1150', pos2: '1000'},
            {name: "FAQs", link : "#", pos1: '6200', pos2: '5100'}
        ]

        function MenuOpen() {
            open.value = !open.value
        }

        function scrollTo(pos1, pos2) {
            if(window.innerWidth < 1020){
                window.scrollTo({top: pos1, behavior: "smooth"});
            } else {
                window.scrollTo({top: pos2, behavior: "smooth"});
            }
        }

        return{Links, open, MenuOpen, scrollTo}
    }
}
</script>
