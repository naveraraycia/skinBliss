import React from 'react'
import Navbar from '../components/shared/Navbar'
import heroMobile from '../assets/imgs/hero-img-mobile.jpg'
import heroDesktop from '../assets/imgs/hero-img-desktop.jpg'

function Home() {
  return (
    <>
      <div className="container mx-auto px-5">
        <Navbar />

        <section id="home">
          <div className="flex flex-col mt-[5rem] space-y-24 lg:flex-row lg:space-y-0">
            <div className="hero-description text-maroonDark flex flex-col justify-center items-center space-y-8 lg:w-1/2 lg:items-start xl:w-1/4">
              <div className='max-w-[300px] space-y-10 lg:max-w-none z-20'>
                <h1 className='font-garamond text-center text-4xl font-semibold italic lg:text-left lg:text-7xl lg:w-[800px]'>Achieve Healthy <span className='lg:ml-[10rem]'>Glowing Skin</span></h1>

                <p className='text-center text-lg lg:text-left lg:max-w-[350px]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium </p>
              </div>

              {/* Create button component */}
              <button className='py-3 px-10 flex duration-300 bg-maroonLight font-garamond text-white text-xl hover:bg-pinkHover hover:cursor-pointer'>Learn More</button>
              {/*  */}
            </div>

            <img src={heroMobile} alt="skinBliss" className="object-cover object-center w-full h-[300px] lg:hidden" />

            <img src={heroDesktop} alt="skinBliss" className="hidden object-cover object-center w-1/2 h-[350px] lg:block xl:w-3/4 xl:h-[550px]" />
          </div>
        </section>
      </div>
    </>
  )
}

export default Home