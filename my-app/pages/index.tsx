import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ButtonTicket } from '../components/button-ticket'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const Home: NextPage = () => {
   const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  })
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-900">
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="navbar" className="flex w-full z-[998] fixed top-0">
        <header className="flex w-full flex-1 items-center justify-between text-center px-20 border-b border-white/10 bg-black h-[4.5rem]">
          <div>
            <a href="#">
              <Image src="/icons/Viz_Media-Logo.wine.svg" height={150} width={150} alt="viz-media"/>
            </a>
          </div>
          <div className='text-white flex justify-around w-2/4'>
            <a href="#" className='hover:bg-white/20'>Home</a>
            <a href="#" className='hover:bg-white/20'>Guest Stars</a>
            <a href="#" className='hover:bg-white/20'>Brands</a>
            <a href="#" className='hover:bg-white/20'>Contact</a>
            <a>More</a>
          </div>
          <ButtonTicket/>
        </header>
      </div>

        <div className="relative w-full min-h-screen h-full flex flex-col bg-black">
          <div className="absolute inset-0 z-0 rounded-br-[200px] overflow-hidden">
            {/* <video muted loop autoPlay src={require('/public/Hologram_Planet_by_nuva.mp4')} width="100%"/> */}
            <video muted loop autoPlay width="100%">
              <source src="/Hologram_Planet_by_nuva.mp4" type="video/mp4"/>
            </video>
          </div>
          <div className="absolute z-30 bottom-0 -translate-y-10 left-4 sm:left-16 flex flex-col items-center gap-y-6">
            <div className="hidden lg:block p-2 rounded-full text-white/80 backdrop-blur-lg border border-white/10 [@supports_not_(backdrop-filter:blur(0px))]:bg-white/100 [@supports_not_(backdrop-filter:blur(0px))]:text-black">
              <div className="flex items-center gap-2 flex-col gap-y-0">
                <a href='#' className="group aspect-square h-14 rounded-full hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                  <Image src="/icons/Instagram-Logo.wine.svg" height={70} width={70} alt="instagram"/>
                </a>
                <a href='#' className="group aspect-square h-14 rounded-full hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                  <Image src="/icons/Facebook-f_Logo-Blue-Logo.wine.svg" height={70} width={70} alt="facebook"/>
                </a>
                <a href='#' className="group aspect-square h-14 rounded-full hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                  <Image src="/icons/Twitter-Logo.wine.svg" height={70} width={70} alt="twitter"/>
                </a>
                <a href='#' className="group aspect-square h-14 rounded-full hover:bg-white/10 transition-colors duration-300 flex items-center justify-center">
                  <Image src="/icons/YouTube-Icon-Full-Color-Logo.wine.svg" height={70} width={70} alt="youtube"/>
                </a>
              </div>
            </div>
          </div>
          <div className="relative z-20 container pt-36 pb-24 lg:pt-48 lg:pb-32 flex flex-col items-center max-w-full">
            <h1 className="font-display flex flex-col items-center text-center relative isolate text-white text-center">   
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Bringing the Best
              </span>
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Pop Culture
              </span>
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-500	">
                Experience
              </span>
            </h1>
            <p className="mt-6 max-w-xl mx-auto text-center text-white/80">
             My App is a platform to celebrate your love for comics & pop culture art forms by creating experiences that are original, exciting, and memorable, to #UnleashTheTrueYou.
            </p>
            <div className="flex flex-col items-center text-center text-white mt-10">
              <h2>Feb 1-2,2023</h2>
              <h3>Jakarta Convention Center</h3>
              <div className="flex flex-col lg:flex-row gap-x-12 gap-y-8 items-center justify-center mt-10">
                <ButtonTicket/>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 lg:pt-24 text-white flex flex-col items-center justify-center w-full">
          <div className="container">
            <h2 className="text-white flex flex-col items-center text-center">
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Guest Star
              </span>
            </h2>
          </div>
          <div ref={sliderRef} className="keen-slider py-16 w-full">
                <div className="keen-slider__slide number-slide1 flex flex-col text-center">
                  <Image src="/images/naruto.jpg" className="h-full w-full object-cover object-center rounded-lg" height={200} width={200} alt="naruto"/>
                  <div className="px-3 py-1.5 rounded-md text-white font-bold tracking-tight text-xs sm:text-sm bg-emerald-600 max-w-min">
                    <h2>Naruto</h2>
                  </div>
                </div>
                <div className="keen-slider__slide number-slide2 flex flex-col text-center">
                  <Image src="/images/seiya.jpg" className="h-full w-full object-cover object-center rounded-lg" height={200} width={200} alt="seiya"/>
                  <div className="px-3 py-1.5 rounded-md text-white font-bold tracking-tight text-xs sm:text-sm bg-indigo-500 max-w-min">
                    <h2>Seiya</h2>
                  </div>
                </div>
                <div className="keen-slider__slide number-slide3 flex flex-col text-center">
                  <Image src="/images/yuta.webp" className="h-full w-full object-cover object-center rounded-lg" height={200} width={200} alt="yuta"/>
                  <div className="px-3 py-1.5 rounded-md text-white font-bold tracking-tight text-xs sm:text-sm bg-emerald-600 max-w-min">
                    <h2>Yuta</h2>
                  </div>
                </div>
                <div className="keen-slider__slide number-slide4 flex flex-col text-center">
                  <Image src="/images/denji.png" className="h-full w-full object-cover object-center rounded-lg" height={200} width={200} alt="denji"/>
                  <div className="px-3 py-1.5 rounded-md text-white font-bold tracking-tight text-xs sm:text-sm bg-yellow-600 max-w-min">
                    <h2>Denji</h2>
                  </div>
                </div>
                <div className="keen-slider__slide number-slide5 flex flex-col text-center">
                  <Image src="/images/kimetsu.jpeg" className="h-full w-full object-cover object-center rounded-lg" height={200} width={200} alt="tanjiro"/>
                  <div className="px-3 py-1.5 rounded-md text-white font-bold tracking-tight text-xs sm:text-sm bg-emerald-600 max-w-min">
                    <h2>Tanjiro</h2>
                  </div>
                </div>
                <div className="keen-slider__slide number-slide6 flex flex-col text-center">
                  <Image src="/images/mercurry.jpg" className="h-full w-full object-cover object-center rounded-lg" height={200} width={200} alt="mercurry"/>
                  <div className="px-3 py-1.5 rounded-md text-white font-bold tracking-tight text-xs sm:text-sm bg-pink-600 max-w-min">
                    <h2>Suletta</h2>
                  </div>
                </div>
              </div>
          <div className="container flex flex-col items-center justify-center mt-6 hover:text-white/10">
            View All
          </div>
        </div>

        <div className="bg-white w-full">
          <div className="pt-20 pb-20 lg:pt-32 lg:pb-32 bg-slate-900 rounded-br-[60px] lg:rounded-br-[120px]">
            <h1 className="font-display flex flex-col items-center text-center relative isolate text-center h-full w-full">   
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Dummy
              </span>
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                End of
              </span>
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-slate-500	">
                Content
              </span>
            </h1>
          </div>
        </div>

      <footer className="bg-white pt-16 pb-12 lg:pt-24 lg:pb-20 w-full">
        <div className="container">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 max-w-lg mx-auto">
            <div className=''>
              <span>Organized By</span>
              <Image src="/icons/Viz_Media-Logo.wine.svg" height={150} width={150} alt="instagram"/>
            </div>
            <div>
              <span>Presented By</span>
              <Image src="/icons/Viz_Media-Logo.wine.svg" height={150} width={150} alt="instagram"/>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
