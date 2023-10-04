import CallToAction from "../components/CallToAction"
import Navbar from "../components/shared/Navbar"
import Footer from '../components/shared/Footer'
import { useParams } from "react-router-dom"
import { useContext, useState, useLayoutEffect } from "react"
import BlogContext from '../context/BlogContext'

function Blog() {
  const params = useParams()
  const {blogPosts} = useContext(BlogContext)

  const [blogPost] = useState(blogPosts[params.id-1])

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <>
      <div className="container mx-auto px-5">
        <Navbar />

        <section className="article text-maroonDark my-24 space-y-10">
          <div className="space-y-5">
            <h1 className="font-semibold italic text-5xl font-garamond">{blogPost.title}</h1>
            <div className="flex space-x-16">
              <span className="font-nunito text-brownLight">{blogPost.datePosted}</span>
              <span className="font-nunito text-brownLight">{blogPost.author}</span>
            </div>
          </div>

          <img src={blogPost.imgs[0]} alt="blog 1" className="h-[550px] w-full object-cover object-center" />

          <p className="font-nunito font-light text-xl">{blogPost.paragraphs[0]}</p>
          <p className="font-nunito font-light text-xl">{blogPost.paragraphs[1]}</p>

          <div className="flex flex-col w-full space-y-10 md:space-y-0 md:space-x-10 md:flex-row">
            <img src={blogPost.imgs[1]} alt="blog 2" className="w-full h-[500px] object-cover object-center md:w-1/2" />
            <img src={blogPost.imgs[2]} alt="blog 3" className="w-full h-[500px] object-cover object-center md:w-1/2" />
          </div>

          <p className="font-nunito font-light text-xl">{blogPost.paragraphs[2]}</p>
        </section>
      </div>

      <CallToAction />
      <Footer />
    </>
  )
}

export default Blog