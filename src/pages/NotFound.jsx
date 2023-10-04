import Navbar from "../components/shared/Navbar"
import Footer from "../components/shared/Footer"

function NotFound() {
  return (
    <>

    <div className="flex flex-col items-center justify-between h-screen">
      <div className="container mx-auto px-5 w-full">
        <Navbar />
      </div>

      <div className="container mx-auto px-5 w-full flex flex-col text-maroonDark space-y-4 items-center justify-center">
          <h1 className="font-garamond text-5xl font-semibold italic md:text-6xl">Page Not Found</h1>
          <p className="max-w-[500px] text-xl font-light font-nunito text-center">Sorry, the page you are trying to access does not exist.</p>
      </div>

      <div className="w-full">

      <Footer />
      </div>

    </div>
    
    </>
  )
}

export default NotFound