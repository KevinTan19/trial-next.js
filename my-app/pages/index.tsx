import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ButtonTicket } from '../components/button-ticket'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-900">
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="navbar" className="flex w-full z-[998] fixed top-0">
        <header className="flex w-full flex-1 items-center justify-between text-center px-20 border-b border-white/10 bg-black h-[4.5rem]">
          <h1 className='text-white flex item-center'>Logo</h1>
          <div className='text-white flex justify-around w-2/4'>
            <a>Home</a>
            <a>Guest Stars</a>
            <a>Brands</a>
            <a>Contact</a>
            <a>More</a>
          </div>
          <ButtonTicket/>
        </header>
      </div>

        <div className="relative w-full min-h-screen h-full flex flex-col bg-black">
          <div className="absolute inset-0 z-0 rounded-br-[200px] overflow-hidden">
            <video muted loop autoPlay src={require('/public/Hologram_Planet_by_nuva.mp4')} width="100%"/>
          </div>
          <div className="absolute z-30 bottom-0 -translate-y-10 left-4 sm:left-16 flex flex-col items-center gap-y-6">
            <p className="text-white">Social Media</p>
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
        <div className="pt-16 lg:pt-24 text-white">
          <div className="container">
            <h2 className="text-white flex flex-col items-center text-center">
              <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Guest Star
              </span>
            </h2>
          </div>
          <div className="swiper-container">
            <div className="group !py-10 -mt-4 lg:mt-0 swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-free-mode">
              SWIPER SLIDE
            </div>
          </div>
          <div className="container flex flex-col items-center justify-center mt-6">
            View All
          </div>
        </div>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
    </div>
  )
}

export default Home
