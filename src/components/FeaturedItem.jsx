import starSvg from '../assets/svg/star-svg.svg'

function FeaturedItem({featuredItem, marginTop}) {
  return (
    <div className={`flex flex-col space-y-5 text-maroonDark items-center ${marginTop && 'md:mt-32'}`}>
      <div className="space-y-3 flex flex-col items-center justify-center">
        <img src={featuredItem.img} alt="featured 1" className='h-[400px] w-[300px] object-cover object-center' />
        <div className="space-y-1">
          <h1 className='font-garamond text-3xl font-semibold text-center'>{featuredItem.title}</h1>
          <h2 className='text-center'>{featuredItem.brand}</h2>
        </div>
      </div>
      <div className="flex space-x-2">
        <img src={starSvg} alt="star" className='w-[20px] h-[20px]' />
        <img src={starSvg} alt="star" className='w-[20px] h-[20px]' />
        <img src={starSvg} alt="star" className='w-[20px] h-[20px]' />
        <img src={starSvg} alt="star" className='w-[20px] h-[20px]' />
        <img src={starSvg} alt="star" className='w-[20px] h-[20px]' />
      </div>
    </div>
  )
}

export default FeaturedItem