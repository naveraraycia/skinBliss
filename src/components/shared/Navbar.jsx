
function Navbar() {

  function handleClickScroll(idName){
    const sectionToScroll = document.getElementById(`${idName}`)
    sectionToScroll.scrollIntoView({behavior: 'smooth'})
  }

  function toggleMenu() {
    const hamburgerIcon = document.getElementById('menu-btn')
    const mobileMenu = document.getElementById('menu')
    hamburgerIcon.classList.toggle('open')
    mobileMenu.classList.toggle('flex')
    mobileMenu.classList.toggle('hidden')
  }

  return (
    <>  
    <nav>
      <div className="flex justify-between pt-10">
        <span className="font-garamond text-maroonDark text-3xl italic font-semibold">skinBliss</span>
        <ul className="hidden space-x-10 md:flex">
          <li onClick={() => handleClickScroll('home')} className="font-nunito duration-300 text-maroonDark font-semibold hover:text-pinkHover hover:cursor-pointer">Home</li>
          <li onClick={() => handleClickScroll('featured')} className="font-nunito text-maroonDark font-semibold hover:text-pinkHover hover:cursor-pointer">Featured</li>
          <li onClick={() => handleClickScroll('blog')} className="font-nunito text-maroonDark font-semibold hover:text-pinkHover hover:cursor-pointer">Blog</li>
          <li onClick={() => handleClickScroll('contact')} className="font-nunito text-maroonDark font-semibold hover:text-pinkHover hover:cursor-pointer">Contact</li>
        </ul>

        {/* Hamburger icon */}
        <div className="md:hidden relative">
          <button id="menu-btn" onClick={toggleMenu} type="button" className="z-[100] block hamburger md:hidden focus:outline-none">
            <span className={`hamburger-top`}></span>
            <span className={`hamburger-middle`}></span>
            <span className={`hamburger-bottom`}></span>
          </button>
        </div>
      </div>
    </nav>

    <ul id="menu" onClick={toggleMenu} className={`text-white fixed z-[99] top-0 bottom-0 left-0 hidden flex-col w-full min-h-screen items-center font-sans space-y-5 justify-center text-2xl bg-white bg-opacity-20 md:hidden` }>
      <li onClick={() => handleClickScroll('home')} className="font-nunito duration-300 text-maroonDark font-semibold hover:text-pinkHover hover:cursor-pointer">Home</li>
      <li onClick={() => handleClickScroll('featured')} className="font-nunito text-maroonDark font-semibold hover:text-pinkHover hover:cursor-pointer">Featured</li>
      <li onClick={() => handleClickScroll('blog')} className="font-nunito text-maroonDark font-semibold hover:text-pinkHover hover:cursor-pointer">Blog</li>
      <li onClick={() => handleClickScroll('contact')} className="font-nunito text-maroonDark font-semibold hover:text-pinkHover hover:cursor-pointer">Contact</li>
    </ul>
    </>
  )
}

export default Navbar