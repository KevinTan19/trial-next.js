import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-black">
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex w-full z-[998] fixed top-0">
        <header className="flex w-full flex-1 items-center justify-between text-center px-20 border-b border-white/10 bg-black h-[4.5rem]">
          <h1 className='text-white flex item-center'>Logo</h1>
          <div className='text-white flex justify-around w-2/4'>
            <a>Home</a>
            <a>Guest Stars</a>
            <a>Brands</a>
            <a>Contact</a>
            <a>More</a>
          </div>
          <button className="bg-pink-700 text-white rounded py-3 px-5 hover:scale-110">Get Your Ticket</button>
        </header>
      </div>

      <div className="relative isolate flex-auto">
        <div className="relative w-full min-h-screen h-full flex flex-col">
          <div className="absolute inset-0 z-0 rounded-br-[200px] overflow-hidden">
            <video muted loop autoPlay>
              <source src='Hologram_Planet_by_nuva.mp4' type='video/mp4' />
            </video>
          </div>
          <div className="absolute z-30 bottom-0 -translate-y-10 left-4 sm:left-16 flex flex-col items-center gap-y-6">
            <p className="text-white">Social Media</p>
          </div>
          <div className="relative z-20 container pt-36 pb-24 lg:pt-48 lg:pb-32 flex flex-col items-center">
            <div className="relative w-full">
              <div className="absolute top-0 -translate-y-full inset-x-0 w-full flex flex-col items-center justify-center text-center pb-4">
                <h1 className="hero-title font-display flex flex-col items-center text-center relative isolate text-white">
                  <span>
                    Bringing the Best
                    Pop Culture
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        
      </main> */}

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
