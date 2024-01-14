<script>
  import Button from './components/Button.vue';
  import Navbar from './components/Navbar.vue';
  import We from './components/We.vue';
  import emailjs from '@emailjs/browser';

  export default {
    name: "App",
    components: {
      Navbar,
      Button,
      We,
    },

    data: () => ({
      message: "",
      loading: false,
    }),

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
      },

      sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('serviceID', 'templateID', 'form', 'publicKey')
          .then((result) => {
              this.message = "Successfuly sent email"
              this.loading = true
              
              setTimeout(() => {
                this.message = ""
                this.loading = false
                this.$refs.form.reset()
              }, 3000)
          }, (error) => {
              console.log(error.text);
          });
      },
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

      function scrollTo(pos1, pos2) {
        console.log('1234')
          if(window.innerWidth < 1020){
              window.scrollTo({top: pos1, behavior: "smooth"});
          } else {
              window.scrollTo({top: pos2, behavior: "smooth"});
          }
      }

      return{Wes, data, scrollTo}
    }
  };
</script>

<template>
    <Navbar/>
  <div>

    <div class="">
      <img src="./assets/hero-background.jpg" class="absolute top-0 left-0 z-[-1] 2xl:h-[980px] h-[600px] xl:h-screen lg:h-[700px]"/>
      <div class="lg:flex  2xl:max-w-[1400px] xl:max-w-[1224px] lg:max-w-[988px] ml-auto mr-auto gap-12 items-center justify-center h-screen">

        <div class="pt-32 lg:pt-0 md:mt-0 px-6 lg:px-0 lg:pl-[1.5rem] xl:pl-0">
          <h1 class="text-white font-black 2xl:text-5.5xl lg:text-5xl md:w-[600px] lg:w-auto text-5xl lato">Start Getting More Clients With a <span class="text-green-main">Free Website</span></h1>
          <h3 class="mt-[1.25rem] xl:text-xl lg:text-lg text-base text-white 2xl:pr-32 w-[300px] md:w-[600px] lg:w-auto">Stop struggling with leads. We’ll build you a stunning website, for FREE, and you only pay $100/month to keep it going. Attract clients, boost sales, dominate online, all risk-free.</h3>
          <button @click="scrollTo(5000, 4300)" class="mt-[1.25rem] flex bg-green-main duration-300 text-[#1E1E1E] rounded lg:py-3 py-3 lg:px-10 px-6 xl:text-base text-sm font-bold">GET YOUR FREE WEBSITE NOW
            <img src="./assets/arrow.png" class="mt-auto mb-auto ml-2 w-5"/>
          </button>
        </div>

        <div class="mt-[1.25rem] lg:mt-0 px-6 lg:px-0 lg:pr-[1.5rem] xl:pr-0">
          <div class="relative ">
            <img src="./assets/this-to-this.png" class="absolute xl:right-24 lg:right-14 right-8 xl:top-[120px] lg:top-[70px] top-12 w-32 md:right-48 md:top-[100px]"/>
            <img src="./assets/arrow-up.png" class="absolute xl:bottom-32 lg:bottom-20 bottom-16 xl:left-28 lg:left-16 left-14 xl:w-12 lg:w-10 w-8 -rotate-[16deg] md:left-48 md:bottom-24"/>
            <img src="./assets/difference.png" class="2xl:w-[1452px] xl:w-[1550px] lg:w-[1200px] sm:w-[70%] ml-auto mr-auto lg:ml-0 lg:mr-0"/>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center 2xl:mt-44 mt-24 relative bg-white z-[3] px-6 lg:px-0">
      <h2 class="xl:text-5xl lg:text-4xl text-3xl font-bold lato">Open Up to Online Opportunity</h2>
      <div class="bg-blue-main h-[5px] w-8 ml-auto mr-auto mt-3 rounded"></div>
      <p class="xl:text-xl text-lg mt-2 lg:w-[760px] ml-auto mr-auto">In today's digital world, a website isn't a luxury, it’s a necessity. It’s a 24/7 storefront that represents your business and why the user should buy from you and not your competition.</p>
    </div>

    <div class="relative bg-white z-[3] lg:pb-44 pb-24">
      <div class="lg:flex  2xl:max-w-[1400px] xl:max-w-[1224px] lg:max-w-[988px] ml-auto mr-auto lg:pt-32 pt-16 gap-8">
        <div class="lg:w-1/2 px-6 lg:px-0 lg:pl-[1.5rem] xl:pl-0">
          <h2 class="xl:text-4xl text-3xl font-semibold lato">Rent-to-Own Website</h2>
          <p class="xl:mt-4 lg:mt-6 sm:mt-3 xl:text-xl text-lg text-black-text">But let's be honest, building a website can feel like climbing Mount Everest in flip-flops. Costs, tech jargon, endless tweaking – it's enough to send any small business owner running for the hills.</p>
          <p class="lg:mt-6 sm:mt-2 xl:text-xl text-lg text-black-text">That's where we come in. We believe every small business deserves a powerful online presence, regardless of budget.</p>
          <p class="lg:mt-6 sm:mt-2 xl:text-xl text-lg text-black-text font-semibold">That's why we're offering a magical deal.</p>
          <p class="lg:mt-6 sm:mt-2 xl:text-xl text-lg text-black-text">A completely free website creation, with a low monthly fee to keep it sparkling clean. Think of it as a rent-to-own website.</p>
          <button @click="scrollTo(5000, 4300)" class="flex mt-6 bg-green-main duration-300 text-[#1E1E1E] rounded py-3 px-10 lg:text-md text-sm font-bold">GET YOUR FREE WEBSITE NOW
            <img src="./assets/arrow.png" class="mt-auto mb-auto ml-2 w-5"/>
          </button>
        </div>
        <div class="lg:w-1/2 px-6 mt-12 xl:mt-0 lg:mt-auto lg:mb-auto">
          <img src="./assets/conversions.png" alt="Double Conversions" class="lg:pr-[1.5rem] xl:pr-0 sm:w-[60%] lg:w-auto ml-auto mr-auto lg:ml-0 lg:mr-0">
        </div>
      </div>
    </div>

    <div class="relative bg-white overflow-hidden">
      <div class="bg-[#A9CBFF] blur-[175px] rounded-full w-[80rem] h-[63rem] absolute -bottom-[28rem] -left-[60rem] z-[1]" />
      <div class="bg-[#A9CBFF] blur-[175px] rounded-full w-[80rem] h-[63rem] absolute -right-[50rem] -top-[20rem] z-[1]" />
      <div class="bg-[#D4F0FF]">
        <img src="./assets/top-waves2.png" alt="Top Waves" class="w-full relative z-[2]">
      </div>
      <div class="bg-[#D4F0FF] px-6 lg:px-0">
        <h2 class="xl:text-5xl lg:text-4xl text-3xl font-semibold text-center lato pt-24 relative z-[5]">Your Website Transformation Journey</h2>
        <div class="bg-blue-main h-[5px] w-8 ml-auto mr-auto mt-3 rounded relative z-[10]"></div>
        <p class="xl:text-2xl text-xl mt-2 lg:w-[940px] ml-auto mr-auto text-center relative z-[10]">Here's how we make your online dreams a reality:</p>
      </div>
    
      <div class="pt-24 pb-24 bg-[#D4F0FF]">

        <div class="lg:flex ml-auto mr-auto lg:max-w-[1400px] relative z-[5] px-[1.5rem] lg:py-0">
          <div class="lg:w-1/3 lg:px-6 xl:px-16 md:w-2/3 ml-auto mr-auto">
            <img src="./assets/listen.png" alt="Listen" class="w-10">
            <h3 class="xl:text-xl text-lg font-bold mt-1 lg:mt-0">We Listen</h3>
            <p class="xl:text-xl text-lg">Tell us your vision, your goals, your favorite color (just kidding, mostly). We get to know your unique brand and target audience. </p>
          </div>
          <div class="lg:w-1/3 lg:px-6 xl:px-16 my-12 lg:my-0 md:w-2/3 ml-auto mr-auto">
            <img src="./assets/design.png" alt="Design" class="w-10">
            <h3 class="xl:text-xl text-lg font-bold mt-1 lg:mt-0">We Design</h3>
            <p class="xl:text-xl text-lg">Our expert designers craft a stunning website that reflects your personality and resonates with your customers. Think sleek, modern, and user-friendly.</p>
          </div>
          <div class="lg:w-1/3 lg:px-6 xl:px-16 md:w-2/3 ml-auto mr-auto">
            <img src="./assets/build.png" alt="Build" class="w-10">
            <h3 class="xl:text-xl text-lg font-bold mt-1 lg:mt-0">We Build</h3>
            <p class="xl:text-xl text-lg">We handle all the coding mumbo jumbo, leaving you free to focus on what you do best – running your amazing business.</p>
          </div>
        </div>

        <div class="lg:flex ml-auto mr-auto max-w-[1400px] justify-center lg:mt-16 mt-12 relative z-[5] px-[1.5rem]">
          <div class="lg:w-1/3 lg:px-6 xl:px-16 md:w-2/3 ml-auto mr-auto">
            <img src="./assets/optimize.png" alt="Optimize" class="w-10">
            <h3 class="xl:text-xl text-lg font-bold mt-1 lg:mt-0">We Optimize</h3>
            <p class="xl:text-xl text-lg">We sprinkle SEO to ensure your website climbs the search engine ranks like a determined climber.</p>
          </div>
          <div class="lg:w-1/3 lg:px-6 xl:px-16 mt-12 lg:mt-0 md:w-2/3 ml-auto mr-auto">
            <img src="./assets/launch.png" alt="Launch" class="w-10">
            <h3 class="xl:text-xl text-lg font-bold mt-1 lg:mt-0">We Launch</h3>
            <p class="xl:text-xl text-lg">We launch your website with enthusiasm and provide ongoing support to keep it running smoothly.</p>
          </div>
        </div>

      </div>
      <div class="bg-[#D4F0FF]">
        <img src="./assets/bottom-waves2.png" alt="Bottom Waves" class="w-full z-[3] relative ">
      </div>
    </div>


    <div class="bg-white relative z-[5] overflow-hidden px-6 lg:pb-44 pb-24">
          <div class="text-center lg:pt-44 pt-24 bg-wite z-50 relative px-6">
            <h2 class="xl:text-5xl lg:text-4xl text-3xl font-semibold lato">From Invisible to Irresistible <br> Launch Your Free Website Now</h2>
            <div class="bg-blue-main h-[5px] w-8 ml-auto mr-auto mt-3 rounded"></div>
            <p class="xl:text-2xl text-xl mt-2 lg:w-[940px] ml-auto mr-auto">Tired of feeling invisible online? Don't let the fear of upfront costs hold you back from unleashing your business potential. This free website offer is your golden ticket to online success.</p>
            <p class="xl:text-2xl text-xl mt-4 lg:w-[940px] ml-auto mr-auto font-semibold">Here's what you're missing out on if you don't act now:</p>
          </div>
        <div class="bg-[#A9CBFF] blur-[175px] rounded-full w-[80rem] h-[63rem] absolute -bottom-[38rem] -left-[70rem] z-[1]" />
        <div class="bg-[#A9CBFF] blur-[175px] rounded-full w-[60rem] h-[30rem] absolute -right-[50rem] top-[20rem] z-[6]" />
        <div class="lg:flex ml-auto mr-auto lg:max-w-[1400px] gap-10 lg:pt-20 pt-12 justify-center relative z-[10]">
          <div class="xl:w-[22rem] w-[20rem] xl:p-10 p-6 gradient-one ml-auto mr-auto lg:ml-0 lg:mr-0 border-[#103060] border-[3px] rounded-2xl text-white">
            <img src="./assets/leads.png" alt="Design" class="ml-auto mr-auto xl:w-28 w-20">
            <div class="bg-white h-[5px] w-full ml-auto mr-auto mt-3 rounded"></div>
            <h3 class="xl:text-xl text-lg font-bold mt-3">More leads and customers</h3>
            <p class="xl:text-xl text-lg">Attract a wider audience and turn them into raving fans</p>
          </div>
          <div class="mt-6 lg:mt-0 xl:w-[22rem] w-[20rem] xl:p-10 p-6 gradient-two ml-auto mr-auto lg:ml-0 lg:mr-0 border-[#103060] border-[3px] rounded-2xl text-white">
            <img src="./assets/awareness.png" alt="Design" class="ml-auto mr-auto xl:w-28 w-20">
            <div class="bg-white h-[5px] w-full ml-auto mr-auto mt-3 rounded"></div>
            <h3 class="xl:text-xl text-lg font-bold mt-3">Increased brand awareness</h3>
            <p class="xl:text-xl text-lg">Become a recognized business in your community.</p>
          </div>
          <div class="mt-6 lg:mt-0 xl:w-[22rem] w-[20rem]  xl:p-10 p-6  gradient-three ml-auto mr-auto lg:ml-0 lg:mr-0 border-[#103060] border-[3px] rounded-2xl  text-white">
            <img src="./assets/credibility.png" alt="Design" class="ml-auto mr-auto xl:w-28 w-20">
            <div class="bg-white h-[5px] w-full ml-auto mr-auto mt-3 rounded"></div>
            <h3 class="xl:text-xl text-lg font-bold mt-3">Boosted credibility</h3>
            <p class="xl:text-xl text-lg">A professional website makes you look established and trustworthy.</p>
          </div>
        </div>
        <div class="lg:flex ml-auto mr-auto max-w-[1400px] justify-center gap-10 mt-6 lg:mt-[40px] relative z-10">
          <div class="xl:w-[22rem] w-[20rem] xl:p-10 p-6 gradient-four ml-auto mr-auto lg:ml-0 lg:mr-0 border-[#103060] border-[3px] rounded-2xl text-white">
            <img src="./assets/sales.png" alt="Design" class="ml-auto mr-auto xl:w-28 w-20">
            <div class="bg-white h-[5px] w-full ml-auto mr-auto mt-3 rounded"></div>
            <h3 class="xl:text-xl text-lg font-bold mt-3">24/7 sales machine</h3>
            <p class="xl:text-xl text-lg">Your website never sleeps, working even while you're enjoying a well-deserved nap.</p>
          </div>
          <div class=" mt-6 lg:mt-0 xl:w-[22rem] w-[20rem] xl:p-10 p-6 gradient-five ml-auto mr-auto lg:ml-0 lg:mr-0 border-[#103060] border-[3px] rounded-2xl text-white">
            <img src="./assets/competition.png" alt="Design" class="ml-auto mr-auto xl:w-28 w-20">
            <div class="bg-white h-[5px] w-full ml-auto mr-auto mt-3 rounded"></div>
            <h3 class="xl:text-xl text-lg font-bold mt-3">Competitive edge</h3>
            <p class="xl:text-xl text-lg">Stay ahead of the curve in today's digital landscape.</p>
          </div>
        </div>
    </div>

    <div class="call-gradient text-center lg:py-24 py-12 relative z-[5] px-6">
      <h2 class="xl:text-5xl lg:text-4xl text-3xl font-semibold lato">Ready to leave the offline shadows<br> behind and step into the online spotlight?</h2>
      <p class="xl:text-2xl text-xl mt-6 lg:w-[640px] ml-auto mr-auto">Simply click the <span class="font-semibold"> "Get Your Free Website" </span> button below, and together, let's turn your digital dreams into reality!</p>
      
      <div class="mt-6 ">
        <form ref="form" @submit="sendEmail" method="POST" class="md:w-[612px] ml-auto mr-auto">
          <div>
            <input type="text" id="name" name="user_name" v-model="user_name" placeholder="First Name" required
              class="pl-3 rounded py-3 md:w-[300px] border-2 border-green-300 w-full"
            >
            <input type="email" id="email" name="user_email" v-model="user_email" placeholder="Email" required
              class="pl-3 md:ml-2 mt-2 lg:mt-0 rounded py-3 md:w-[300px] w-full border-2 border-green-300"
            >
          </div>
          <button :disabled='this.loading'  type="submit" class="bg-green-main w-full py-3 text-base font-bold rounded mt-2 disabled:bg-green-200">Send</button>
          <p class="mt-3 text-green-500">{{ message }}</p>
        </form>
      </div>
    </div>

    <div class=" 2xl:max-w-[1400px] lg:max-w-[1224px] lg:mt-44 mt-24 text-center ml-auto mr-auto">
      <h2 class="xl:text-5xl lg:text-4xl text-3xl font-semibold lato px-6 lg:px-0">Frequently Asked Questions</h2>
      <p class="xl:text-2xl text-xl px-6 lg:px-0 mt-3 lg:w-[640px] ml-auto mr-auto">Answers to your most common questions</p>
      
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

    <div class="bg-blue-main mt-32 text-white text-center pt-16 pb-6 px-6 lg:px-0">
      <h2 class="xl:text-5xl lg:text-4xl text-3xl font-bold lato">Dalton Solutions</h2>
      <p class="xl:text-2xl text-xl mt-3 lg:w-[640px] ml-auto mr-auto">Start getting customers on autopilot & beat your competition by getting a FREE website.</p>
      <a href="https://tiktok.com/@softwareentrepreneur" target="_blank"><img src="./assets/tiktok.png" alt="Tik Tok" class="ml-auto mr-auto mt-3"></a>
      <p className='lg:flex justify-center text-center mt-20'>© 2023
        <a className='text-red-500 ml-1 mr-1' target="_blank" href='https://zenithevolutions.com'> Zenith Evolutions.</a>
        All rights reserved.
      </p>
    </div>

  </div>
</template>

<style scoped>

</style>
