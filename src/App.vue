<script>
import Button from './components/Button.vue';
  import Navbar from './components/Navbar.vue'

  export default {
    name: "App",
    components: {
      Navbar,
        Button,
    },
  };
</script>

<template>
  <div class="h-screen">
    <Navbar/>
    <div>
      <img src="./assets/hero-background.jpg" class="absolute top-0 left-0 z-[-1] 2xl:h-[980px] xl:h-screen"/>
      <div class="md:flex max-w-[1400px] ml-auto mr-auto mt-32 gap-12">
        <div class="mt-auto mb-auto">
          <h1 class="text-white font-bold text-[56px]">Start Getting More Clients With a <span class="text-green-main">Free Website</span></h1>
          <h3 class="mt-2 text-xl text-white pr-32">Stop struggling with leads. We’ll build you a stunning website, for FREE, and you only pay $100/month to keep it going. Attract clients, boost sales, dominate online, all risk-free.</h3>
          <button class="flex mt-3 bg-green-main duration-300 text-[#1E1E1E] rounded py-3 px-10 text-md font-bold">GET YOUR FREE WEBSITE NOW
            <img src="./assets/arrow.png" class="mt-auto mb-auto ml-2 w-5"/>
          </button>
        </div>
        <div>
          <div class="relative">
            <img src="./assets/this-to-this.png" class="absolute right-24 top-[120px]"/>
            <img src="./assets/arrow-up.png" class="absolute bottom-32 left-28 w-12 -rotate-[16deg]"/>
            <img src="./assets/difference.png" class="w-[1452px]"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
