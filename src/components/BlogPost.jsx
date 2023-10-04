import { Link } from "react-router-dom"

function BlogPost({blogItem}){
  return (
    <div className="flex flex-col items-center justify-center max-w-[300px] mx-auto">
      <img src={blogItem.imgs[0]} alt="blog thumbnail" className="w-full h-[250px] object-cover object-center" />
      <div className="px-10 py-10 w-full h-full bg-white">
        <div className="flex flex-col text-graphite space-y-8 items-center">
          <span className="text-maroonLight font-garamond text-3xl flex items-center"># <span className="text-4xl text-graphite">{blogItem.id}</span></span>
          <h2 className="font-garamond text-xl text-center font-semibold italic">{blogItem.title}</h2>
          <Link to={`/blog/${blogItem.id}`} className="font-nunito font-graphite font-bold text-center uppercase hover:text-pinkHover text-xs">Read Now</Link>
        </div>
      </div>
    </div>
  )
}

export default BlogPost