import { useState } from 'react'
import ctaImg from '../assets/imgs/cta-img.jpg'
import Button from './Button'

function CallToAction() {
  const [email, setEmail] = useState('')

  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  return (
    <div className="flex flex-col md:flex-row">
      <img src={ctaImg} alt="call to action" className='object-cover object-center w-full h-[420px] md:order-2 md:w-2/5' />
      <div className="flex justify-center px-5 py-20 bg-maroon md:order-1 md:w-3/5 md:px-20">
        <div className="max-w-[600px] flex flex-col justify-center space-y-5">
          <div className="flex flex-col text-white justify-center items-center text-center space-y-3 md:text-left md:items-start">
            <h1 className='font-garamond font-bold text-4xl'>Subscribe to our Newsletter</h1>
            <p className='font-nunito leading-normal'>Get ahead in your skin care game by subscribing to our newsletter where we share all monthly skin care news and updates.
            </p>
          </div>

          <div className="flex space-x-2 w-full">
            <input placeholder='name@email.com' value={email} required onChange={handleChange} type="email" className="bg-white flex-1 py-3 px-5 text-black placeholder:text-graphite font-nunito focus:outline-none" />
            <Button>SEND</Button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default CallToAction