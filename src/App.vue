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

    methods: {
      handleToggle(e) {
        console.log(e)
        const question = e.target 
        const answer = e.target.nextSibling 

        if(question.classList.contains('faq-accordion-question-button-active')) {
            question.classList.remove('faq-accordion-question-button-active')
            answer.classList.remove('faq-accordion-answer-active')
        } else {
            // // reset 
            const openQuestions = document.querySelectorAll('.faq-accordion-answer-active')
            const openBtn = document.querySelectorAll('.faq-accordion-question-button-active')
            openQuestions?.forEach(item => item.classList.remove('faq-accordion-answer-active'))      
            openBtn?.forEach(btn => btn.classList.remove('faq-accordion-question-button-active'))

            question.classList.add('faq-accordion-question-button-active')           
            answer.classList.toggle('faq-accordion-answer-active')
        }
      }
    },

    setup() {
      let Wes = [
        {imageName: './assets/bottom-waves.png', alt: 'Listen', title: 'We Listen', desc: 'Tell us your vision, your goals, your favorite color (just kidding, mostly). We get to know your unique brand and target audience.'},
        {imageName: './assets/design.png', alt: 'Design', title: 'We Design', desc: 'Our expert designers craft a stunning website that reflects your personality and resonates with your customers. Think sleek, modern, and user-friendly.'},
        {imageName: 'build', alt: 'Build', title: 'We Build', desc: 'We handle all the coding mumbo jumbo, leaving you free to focus on what you do best – running your amazing business.'},
        {imageName: 'optimize.png', alt: 'Optimize', title: 'We Optimize', desc: 'We sprinkle SEO to ensure your website climbs the search engine ranks like a determined climber.'},
        {imageName: 'launch.png', alt: 'Launch', title: 'We Launch', desc: 'We launch your website with enthusiasm and provide ongoing support to keep it running smoothly.'} 
      ]

    const data = [
        {
            id: 1,
            question: "What do you mean by free?",
            answer: "Most website development companies charge thousands of dollars to build a website. We build websites for free and charge a small monthly licensing fee.",
        },
        {
            id: 2,
            question: "How much is the licensing fee?",
            answer: "For content only websites the licensing fee is $99 per month. This includes hosting, revisions, maintenance, and technical support. If you have more complex needs we can certainly take care of you.",
        },
        {
            id: 3,
            question: "How soon can you build my website?",
            answer: "We typically deliver websites within 1 week.",
        },
        {
            id: 4,
            question: "Can you include contact forms?",
            answer: "Yes, each website can feature a contact form which we will integrate with your domain name.",
        },
        {
            id: 5,
            question: "Do you host the website?",
            answer: "Yes, websites are hosted on our servers.",
        },
        {
            id: 5,
            question: "Can you build a custom web application?",
            answer: "Yes, we can build a custom web application for you.",
        },
        {
            id: 5,
            question: "What if I don't like the website you build?",
            answer: "We offer unlimited revisions. We will work with you until you are completely satisfied with your website.",
        },
        {
            id: 5,
            question: "What if I want to cancel?",
            answer: "You can cancel at any time.",
        },
        {
            id: 5,
            question: "How am I billed?",
            answer: "We'll set you up with a monthly subscription via our payment processor, Stripe.com.",
        },
    ]

      return{Wes, data}
    }
  };
</script>

<template>
    <Navbar/>
  <div>

    <div class="">
      <img src="./assets/hero-background.jpg" class="absolute top-0 left-0 z-[-1] 2xl:h-[980px] xl:h-screen"/>
      <div class="md:flex max-w-[1400px] ml-auto mr-auto gap-12 items-center justify-center h-screen">

        <div class="">
          <h1 class="text-white font-black text-[56px] lato">Start Getting More Clients With a <span class="text-green-main">Free Website</span></h1>
          <h3 class="mt-2 text-xl text-white pr-32">Stop struggling with leads. We’ll build you a stunning website, for FREE, and you only pay $100/month to keep it going. Attract clients, boost sales, dominate online, all risk-free.</h3>
          <button class="flex mt-3 bg-green-main duration-300 text-[#1E1E1E] rounded py-3 px-10 text-md font-bold">GET YOUR FREE WEBSITE NOW
            <img src="./assets/arrow.png" class="mt-auto mb-auto ml-2 w-5"/>
          </button>
        </div>

        <div class="">
          <div class="relative ">
            <img src="./assets/this-to-this.png" class="absolute right-24 top-[120px]"/>
            <img src="./assets/arrow-up.png" class="absolute bottom-32 left-28 w-12 -rotate-[16deg]"/>
            <img src="./assets/difference.png" class="w-[1452px]"/>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-44 relative bg-white z-[3]">
      <h2 class="text-4xl font-bold lato">Open Up to Online Opportunity</h2>
      <div class="bg-blue-main h-[5px] w-8 ml-auto mr-auto mt-3 rounded"></div>
      <p class="text-xl mt-2 w-[760px] ml-auto mr-auto">In today's digital world, a website isn't a luxury, it’s a necessity. It’s a 24/7 storefront that represents your business and why the user should buy from you and not your competition.</p>
    </div>

    <div class="relative bg-white z-[3] pb-44">
      <div class="md:flex max-w-[1400px] ml-auto mr-auto pt-32 gap-8">
        <div class="w-1/2">
          <h2 class="text-4xl font-semibold lato">Rent-to-Own Website</h2>
          <p class="mt-4 text-xl text-black-text">But let's be honest, building a website can feel like climbing Mount Everest in flip-flops. Costs, tech jargon, endless tweaking – it's enough to send any small business owner running for the hills.</p>
          <p class="mt-3 text-xl text-black-text">That's where we come in. We believe every small business deserves a powerful online presence, regardless of budget.</p>
          <p class="mt-3 text-xl text-black-text font-semibold">That's why we're offering a magical deal.</p>
          <p class="mt-3 text-xl text-black-text">A completely free website creation, with a low monthly fee to keep it sparkling clean. Think of it as a rent-to-own website.</p>
          <button class="flex mt-6 bg-green-main duration-300 text-[#1E1E1E] rounded py-3 px-10 text-md font-bold">GET YOUR FREE WEBSITE NOW
            <img src="./assets/arrow.png" class="mt-auto mb-auto ml-2 w-5"/>
          </button>
        </div>
        <div class="w-1/2">
          <img src="./assets/conversions.png" alt="Double Conversions">
        </div>
      </div>
    </div>

    <div class="relative bg-white overflow-hidden">
      <div class="bg-[#A9CBFF] blur-[175px] rounded-full w-[80rem] h-[63rem] absolute -bottom-[28rem] -left-[60rem] z-[1]" />
      <div class="bg-[#A9CBFF] blur-[175px] rounded-full w-[80rem] h-[63rem] absolute -right-[50rem] -top-[20rem] z-[1]" />
      <div class="bg-[#D4F0FF]">
        <img src="./assets/top-waves2.png" alt="Top Waves" class="w-full relative z-[2]">
      </div>
      <div class="bg-[#D4F0FF] ">
        <h2 class="text-5xl font-semibold text-center lato pt-24 relative z-[5]">Your Website Transformation Journey</h2>
        <div class="bg-blue-main h-[5px] w-8 ml-auto mr-auto mt-3 rounded"></div>
        <p class="text-2xl mt-2 w-[940px] ml-auto mr-auto text-center">Here's how we make your online dreams a reality:</p>
      </div>
    
      <div class="pt-24 pb-24 bg-[#D4F0FF]">

        <div class="md:flex ml-auto mr-auto max-w-[1400px] relative z-[5]">
          <div class="w-1/3 px-16 ">
            <img src="./assets/listen.png" alt="Design">
            <h3 class="text-xl font-bold">We Listen</h3>
            <p class="text-xl">Tell us your vision, your goals, your favorite color (just kidding, mostly). We get to know your unique brand and target audience. </p>
          </div>
          <div class="w-1/3 px-16">
            <img src="./assets/design.png" alt="Design">
            <h3 class="text-xl font-bold">We Design</h3>
            <p class="text-xl">Our expert designers craft a stunning website that reflects your personality and resonates with your customers. Think sleek, modern, and user-friendly.</p>
          </div>
          <div class="w-1/3 px-16">
            <img src="./assets/build.png" alt="Design">
            <h3 class="text-xl font-bold">We Build</h3>
            <p class="text-xl">We handle all the coding mumbo jumbo, leaving you free to focus on what you do best – running your amazing business.</p>
          </div>
        </div>

        <div class="md:flex ml-auto mr-auto max-w-[1400px] justify-center mt-16 relative z-[5]">
          <div class="w-1/3 px-16">
            <img src="./assets/optimize.png" alt="Design">
            <h3 class="text-xl font-bold">We Optimize</h3>
            <p class="text-xl">We sprinkle SEO to ensure your website climbs the search engine ranks like a determined climber.</p>
          </div>
          <div class="w-1/3 px-16">
            <img src="./assets/launch.png" alt="Design">
            <h3 class="text-xl font-bold">We Launch</h3>
            <p class="text-xl">We launch your website with enthusiasm and provide ongoing support to keep it running smoothly.</p>
          </div>
        </div>

      </div>
      <div class="bg-[#D4F0FF]">
        <img src="./assets/bottom-waves2.png" alt="Bottom Waves" class="w-full z-[3] relative ">
      </div>
    </div>

    <div class="text-center pt-44 bg-wite z-50 relative">
      <h2 class="text-5xl font-semibold lato">From Invisible to Irresistible <br> Launch Your Free Website Now</h2>
      <div class="bg-blue-main h-[5px] w-8 ml-auto mr-auto mt-3 rounded"></div>
      <p class="text-2xl mt-2 w-[940px] ml-auto mr-auto">Tired of feeling invisible online? Don't let the fear of upfront costs hold you back from unleashing your business potential. This free website offer is your golden ticket to online success.</p>
      <p class="text-2xl mt-4 w-[940px] ml-auto mr-auto font-semibold">Here's what you're missing out on if you don't act now:</p>
    </div>

    <div class="bg-white relative z-[5]">
        <div class="bg-[#A9CBFF] blur-[175px] rounded-full w-[80rem] h-[63rem] absolute -bottom-[28rem] -left-[60rem] z-[1]" />
        <div class="bg-[#A9CBFF] blur-[175px] rounded-full w-[80rem] h-[63rem] absolute -right-[50rem] -top-[20rem] z-[6]" />
        <div class="md:flex ml-auto mr-auto max-w-[1400px] gap-10 pt-20 justify-center relative z-[10]">
          <div class="w-[22rem] px-10 py-10 gradient-one  border-[#103060] border-[3px] rounded-2xl text-white">
            <img src="./assets/leads.png" alt="Design" class="ml-auto mr-auto w-28">
            <div class="bg-white h-[5px] w-full ml-auto mr-auto mt-3 rounded"></div>
            <h3 class="text-xl font-bold mt-3">More leads and customers</h3>
            <p class="text-xl">Attract a wider audience and turn them into raving fans</p>
          </div>
          <div class="w-[22rem] px-10 py-10  gradient-two  border-[#103060] border-[3px] rounded-2xl p-12 text-white">
            <img src="./assets/awareness.png" alt="Design" class="ml-auto mr-auto w-28">
            <div class="bg-white h-[5px] w-full ml-auto mr-auto mt-3 rounded"></div>
            <h3 class="text-xl font-bold mt-3">Increased brand awareness</h3>
            <p class="text-xl">Become a recognized business in your community.</p>
          </div>
          <div class="w-[22rem]  px-10 py-10  gradient-three  border-[#103060] border-[3px] rounded-2xl p-12 text-white">
            <img src="./assets/credibility.png" alt="Design" class="ml-auto mr-auto w-28">
            <div class="bg-white h-[5px] w-full ml-auto mr-auto mt-3 rounded"></div>
            <h3 class="text-xl font-bold mt-3">Boosted credibility</h3>
            <p class="text-xl">A professional website makes you look established and trustworthy.</p>
          </div>
        </div>
        <div class="md:flex ml-auto mr-auto max-w-[1400px] justify-center gap-10 mt-[40px]">
          <div class="w-[22rem] px-10 py-10 gradient-four  border-[#103060] border-[3px] rounded-2xl p-12 text-white">
            <img src="./assets/sales.png" alt="Design" class="ml-auto mr-auto w-28">
            <div class="bg-white h-[5px] w-full ml-auto mr-auto mt-3 rounded"></div>
            <h3 class="text-xl font-bold mt-3">24/7 sales machine</h3>
            <p class="text-xl">Your website never sleeps, working even while you're enjoying a well-deserved nap.</p>
          </div>
          <div class="w-[22rem] px-10 py-10 gradient-five  border-[#103060] border-[3px] rounded-2xl p-12 text-white">
            <img src="./assets/competition.png" alt="Design" class="ml-auto mr-auto w-28">
            <div class="bg-white h-[5px] w-full ml-auto mr-auto mt-3 rounded"></div>
            <h3 class="text-xl font-bold mt-3">Competitive edge</h3>
            <p class="text-xl">Stay ahead of the curve in today's digital landscape.</p>
          </div>
        </div>
    </div>

    <div class="call-gradient text-center py-24 mt-44 relative z-[5]">
      <h2 class="text-5xl font-semibold lato">Ready to leave the offline shadows<br> behind and step into the online spotlight?</h2>
      <p class="text-2xl mt-6 w-[640px] ml-auto mr-auto">Simply click the <span class="font-semibold"> "Get Your Free Website" </span> button below, and together, let's turn your digital dreams into reality!</p>
      <button class=" ml-auto mr-auto flex mt-6 bg-green-main duration-300 text-[#1E1E1E] rounded py-4 px-10 text-lg font-bold">GET YOUR FREE WEBSITE NOW
        <img src="./assets/arrow.png" class="mt-auto mb-auto ml-2 w-5"/>
      </button>
    </div>

    <div class="max-w-[1400px] mt-44 text-center ml-auto mr-auto">
      <h2 class="text-5xl font-semibold lato">Frequently Asked Questions</h2>
      <p class="text-2xl mt-3 w-[640px] ml-auto mr-auto">Answers to your most common questions</p>
      
                <div class='justify-center flex mb-24 ml-6 mr-6 lg:ml-0 lg:mr-0 mt-6 lg:mt-0'>
                    <div class="faq-accordion-content">
                        <div v-for="item in data" class="faq-accordion-question " :key="item.id">

                                <button class="faq-accordion-question-button" 
                                @click="handleToggle"> {{item.question}}
                                </button>
                                <div class="faq-accordion-answer">
                                    <p> {{item.answer}}</p>
                                </div>
                        </div>
                </div>
    </div>
    </div>

    <div class="bg-blue-main mt-32 text-white text-center pt-16 pb-6">
      <h2 class="text-5xl font-bold lato">Dalton Solutions</h2>
      <p class="text-2xl mt-3 w-[640px] ml-auto mr-auto">Start getting customers on autopilot & beat your competition by getting a FREE website.</p>
      <img src="./assets/tiktok.png" alt="Tik Tok" class="ml-auto mr-auto mt-3">
          <p className='lg:flex justify-center text-center mt-20'>© 2023
        <a className='text-red-500 ml-1 mr-1' target="_blank" href='https://zenithevolutions.com'> Zenith Evolutions.</a>
        All rights reserved.
    </p>
    </div>

  </div>
</template>

<style scoped>

</style>
