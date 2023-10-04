import {BsFacebook} from "react-icons/bs"
import {BiLogoInstagramAlt} from "react-icons/bi"
import {AiFillTwitterCircle} from "react-icons/ai"
import {FaTiktok} from "react-icons/fa"


function Footer(){
  const yearToday = new Date().getUTCFullYear()
  return(
    <footer className="bg-maroon px-20 pt-20 pb-10 text-white flex flex-col justify-center items-center space-y-8 md:space-y-0 md:flex-row md:justify-between">
      <div className="flex items-center justify-center space-x-5">
        <a href="https://www.facebook.com/" rel="noreferrer" target="_blank" className="w-fit">
          <BsFacebook size={30} className="hover:cursor-pointer duration-300 hover:text-pinkDarkHover" />
        </a>
        <a href="https://www.tiktok.com/" rel="noreferrer" target="_blank" className="w-fit">
          <FaTiktok size={30} className="hover:cursor-pointer duration-300 hover:text-pinkDarkHover" />
        </a>

        <a href="https://www.instagram.com/" rel="noreferrer" target="_blank" className="w-fit">
          <BiLogoInstagramAlt size={40} className="hover:cursor-pointer duration-300 hover:text-pinkDarkHover" />
        </a>
        
        <a href="https://twitter.com/" rel="noreferrer" target="_blank" className="w-fit">
        <AiFillTwitterCircle size={35} className="hover:cursor-pointer duration-300 hover:text-pinkDarkHover" />
        </a>
      </div>

      <div className="space-y-1 flex flex-col justify-center items-center md:items-end">
        <span className="text-5xl font-garamond font-semibold italic">skinBliss</span>
        <span className="font-nunito font-bold">&copy; {yearToday} RMFN</span>
      </div>
    </footer>
  )
}

export default Footer