import React from 'react'
import Navbar from '../components/shared/Navbar'
import heroMobile from '../assets/imgs/hero-img-mobile.jpg'
import heroDesktop from '../assets/imgs/hero-img-desktop.jpg'
import heroGridImg from '../assets/imgs/hero-grid-img.jpg'
import Heading from '../components/Heading'
import FeaturedItem from '../components/FeaturedItem'
import { useContext } from 'react'
import BlogContext from '../context/BlogContext'

function Home() {
  const {featuredProducts} = useContext(BlogContext)
  return (
    <>
      <div className="container mx-auto px-5">
        <Navbar />

        <section id="home">
          <div className="flex flex-col mt-[5rem] space-y-24 md:flex-row md:space-y-0">
            <div className="hero-description text-maroonDark flex flex-col justify-center items-center space-y-8 md:w-1/2 md:items-start xl:w-1/4">
              <div className='max-w-[300px] space-y-10 md:max-w-none z-20'>
                <h1 className='font-garamond text-center text-5xl font-semibold italic md:text-left md:text-7xl md:w-[800px]'>Achieve Healthy <span className='md:ml-[10rem]'>Glowing Skin</span></h1>

                <p className='text-center text-lg md:text-left md:max-w-[350px]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium </p>
              </div>

              {/* Create button component */}
              <button className='py-3 px-10 flex duration-300 bg-maroonLight font-garamond text-white text-xl hover:bg-pinkHover hover:cursor-pointer'>Learn More</button>
              {/*  */}
            </div>

            <img src={heroMobile} alt="skinBliss" className="object-cover object-center w-full h-[300px] md:hidden" />

            <img src={heroDesktop} alt="skinBliss" className="hidden object-cover object-center w-1/2 h-[350px] md:block xl:w-3/4 xl:h-[550px]" />
          </div>
        </section>

        <section id="about" className='mt-24'>
          <div className="grid justify-items-center items-center grid-rows-4 text-maroonDark md:grid-rows-1 md:grid-cols-4 md:gap-8">
            <div className='max-w-[350px] space-y-4 md:order-4'>
              <h1 className='font-garamond font-semibold text-3xl text-center md:text-left md:text-2xl md:leading-[25px]'><span className='block'>Unveil</span>secrets to Youthful skin</h1>
              <p className='font-nunito font-light text-center text-lg md:text-left  md:max-w-[250px]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium </p>
            </div>

            <div className='max-w-[350px] space-y-4 md:order-3'>
              <h1 className='font-garamond font-semibold text-3xl text-center md:text-left md:text-2xl md:leading-[25px]'><span className='block'>Learn</span>skincare tips</h1>
              <p className='font-nunito font-light text-center text-lg md:text-left md:max-w-[250px]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium </p>
            </div>

            <div className='max-w-[350px] space-y-4 md:order-2'>
              <h1 className='font-garamond font-semibold text-3xl text-center md:text-left md:text-2xl md:leading-[25px]'><span className='block'>Discover</span>trending products</h1>
              <p className='font-nunito font-light text-center text-lg md:text-left md:max-w-[250px]'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium </p>
            </div>

            <img src={heroGridImg} alt="skin cream" className='object-cover object-center w-full rounded-full h-[300px] py-5 md:order-1 md:w-fit' />
           
          </div>
        </section>

        {/* <section id="featured" className='mt-24'> */}
        <section id="featured" className='my-24'>
          <div className="flex flex-col justify-center items-center space-y-10">
            <Heading title='featured' subTitle='Top 4 products of the month' />

            <div className="grid gap-8 grid-rows-4 md:grid-rows-1 md:grid-cols-4">
            {featuredProducts.map((featuredItem, index) => {
              if (index % 2 !== 0) {
                return <FeaturedItem featuredItem={featuredItem} marginTop={true} />
              }

              return <FeaturedItem featuredItem={featuredItem} />
            })}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home