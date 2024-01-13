<script>
  import Button from './components/Button.vue';
  import Navbar from './components/Navbar.vue';
  import We from './components/We.vue';


  export default {
    name: "App",
    components: {
      Navbar,
      Button,
      We,
    },

    setup() {
      let Wes = [
        {imageName: './assets/bottom-waves.png', alt: 'Listen', title: 'We Listen', desc: 'Tell us your vision, your goals, your favorite color (just kidding, mostly). We get to know your unique brand and target audience.'},
        {imageName: '../assets/design.png', alt: 'Design', title: 'We Design', desc: 'Our expert designers craft a stunning website that reflects your personality and resonates with your customers. Think sleek, modern, and user-friendly.'},
        {imageName: 'buid.png', alt: 'Build', title: 'We Build', desc: 'We handle all the coding mumbo jumbo, leaving you free to focus on what you do best – running your amazing business.'},
        {imageName: 'optimize.png', alt: 'Optimize', title: 'We Optimize', desc: 'We sprinkle SEO to ensure your website climbs the search engine ranks like a determined climber.'},
        {imageName: 'launch.png', alt: 'Launch', title: 'We Launch', desc: 'We launch your website with enthusiasm and provide ongoing support to keep it running smoothly.'} 
      ]

      return{Wes}
    }
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

    <div class="text-center mt-96">
      <h2 class="text-5xl font-semibold">Open Up to Online Opportunity</h2>
      <div class="bg-blue-main h-[5px] w-8 ml-auto mr-auto mt-3 rounded"></div>
      <p class="text-2xl mt-2 w-[940px] ml-auto mr-auto">In today's digital world, a website isn't a luxury, it’s a necessity. It’s a 24/7 storefront that represents your business and why the user should buy from you and not your competition.</p>
    </div>

    <div class="md:flex max-w-[1400px] ml-auto mr-auto mt-32 gap-8">
      <div class="w-1/2">
        <h2 class="text-5xl font-semibold">Rent-to-Own Website</h2>
        <p class="mt-4 text-2xl text-black-text">But let's be honest, building a website can feel like climbing Mount Everest in flip-flops. Costs, tech jargon, endless tweaking – it's enough to send any small business owner running for the hills.</p>
        <p class="mt-3 text-2xl text-black-text">That's where we come in. We believe every small business deserves a powerful online presence, regardless of budget.</p>
        <p class="mt-3 text-2xl text-black-text font-semibold">That's why we're offering a magical deal.</p>
        <p class="mt-3 text-2xl text-black-text">A completely free website creation, with a low monthly fee to keep it sparkling clean. Think of it as a rent-to-own website.</p>
      </div>
      <div class="w-1/2">
        <img src="./assets/conversions.png" alt="Double Conversions">
      </div>
    </div>

    <div class="mt-44">
      <img src="./assets/top-waves.png" alt="Top Waves" class="w-full">
      <div class="bg-[#D4F0FF]">
        <h2 class="text-5xl font-semibold text-center">Your Website Transformation Journey</h2>
        <div class="bg-blue-main h-[5px] w-8 ml-auto mr-auto mt-3 rounded"></div>
        <p class="text-2xl mt-2 w-[940px] ml-auto mr-auto text-center">Here's how we make your online dreams a reality:</p>
      </div>
      <div>
        <We v-for="we in Wes" :img="we.img" :alt='we.alt' :title='we.title' :desc='we.desc'/>
      </div>
      <img src="./assets/bottom-waves.png" alt="Bottom Waves" class="w-full">
    </div>
  </div>
</template>

<style scoped>

</style>
