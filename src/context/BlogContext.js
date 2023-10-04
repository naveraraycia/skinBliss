import { createContext, useState } from "react";
import post1img1 from '../assets/imgs/blog-1-img-1.jpg'
import post1img2 from '../assets/imgs/blog-1-img-2.jpg'
import post1img3 from '../assets/imgs/blog-1-img-3.jpg'
import post2img1 from '../assets/imgs/blog-2-img-1.jpg'
import post2img2 from '../assets/imgs/blog-2-img-2.jpg'
import post2img3 from '../assets/imgs/blog-2-img-3.jpg'
import post3img1 from '../assets/imgs/blog-3-img-1.jpg'
import post3img2 from '../assets/imgs/blog-3-img-2.jpg'
import post3img3 from '../assets/imgs/blog-3-img-3.jpg'
import featuredImg1 from '../assets/imgs/featured-img-1.jpg'
import featuredImg2 from '../assets/imgs/featured-img-2.jpg'
import featuredImg3 from '../assets/imgs/featured-img-3.jpg'
import featuredImg4 from '../assets/imgs/featured-img-4.jpg'

const BlogContext = createContext()

export const BlogProvider = ({children}) => {
  // Global Data
  const paragraphs = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vel nulla posuere pulvinar sit amet quis orci. Donec urna mauris, commodo in iaculis placerat, cursus sed risus. Praesent magna leo, vestibulum ut tellus at, vulputate cursus leo. Phasellus ut dignissim ante. In risus nibh, pretium id efficitur sed, sodales a orci. Sed vel enim pharetra leo luctus condimentum et vitae massa. Quisque ultrices lacus augue, quis laoreet elit maximus at. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vel nulla posuere pulvinar sit amet quis orci. Donec urna mauris, commodo in iaculis placerat, cursus sed risus. Praesent magna leo, vestibulum ut tellus at, vulputate cursus leo. Phasellus ut dignissim ante. In risus nibh, pretium id efficitur sed, sodales a orci. Sed vel enim pharetra leo luctus condimentum et vitae massa. Quisque ultrices lacus augue, quis laoreet elit maximus at.', 'Sed auctor ornare lorem vitae pretium. Maecenas sed tempor neque. Quisque cursus malesuada massa vitae fringilla. Nullam quis luctus ligula. Integer lectus turpis, laoreet vitae ultrices non, aliquam nec dolor. Quisque euismod facilisis eros in rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus feugiat nisi et tincidunt volutpat. Nam in malesuada ligula, ac lobortis massa. Nulla ut finibus purus. Morbi neque metus, vestibulum a pretium sed, viverra in lectus. Proin pulvinar interdum orci et tincidunt. Nunc vitae tortor rutrum, mattis sem quis, lobortis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vel nulla posuere pulvinar sit amet quis orci. Donec urna mauris, commodo in iaculis placerat, cursus sed risus. Praesent magna leo, vestibulum ut tellus at, vulputate cursus leo. Phasellus ut dignissim ante. In risus nibh, pretium id efficitur sed, sodales a orci. Sed vel enim pharetra leo luctus condimentum et vitae massa. Quisque ultrices lacus augue, quis laoreet elit maximus at. Phasellus ut dignissim ante. In risus nibh, pretium id efficitur sed, sodales a orci. Sed vel enim pharetra leo luctus condimentum et vitae massa. Quisque ultrices lacus augue, quis laoreet elit maximus at.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel urna vel nulla posuere pulvinar sit amet quis orci. Donec urna mauris, commodo in iaculis placerat, cursus sed risus. Praesent magna leo, vestibulum ut tellus at, vulputate cursus leo. Phasellus ut dignissim ante. In risus nibh, pretium id efficitur sed, sodales a orci. Sed vel enim pharetra leo luctus condimentum et vitae massa. Quisque ultrices lacus augue, quis laoreet elit maximus at. Phasellus ut dignissim ante. In risus nibh, pretium id efficitur sed, sodales a orci. Sed vel enim pharetra leo luctus condimentum et vitae massa. Quisque ultrices lacus augue, quis laoreet elit maximus at.']

  const [blogPosts] = useState([
    {
      id: 1,
      title: 'Choosing the right toner for your skin type',
      author: 'Maggie Montgomery',
      datePosted: 'March 23, 2023',
      imgs: [post1img1, post1img2, post1img3],
      paragraphs
    },
    {
      id: 2,
      title: 'How to properly cleanse your face',
      author: 'Gerogina Smith',
      datePosted: 'May 14, 2023',
      imgs: [post2img1, post2img2, post2img3],
      paragraphs
    },
    {
      id: 3,
      title: 'Learn the proper skin care steps for healthy skin',
      author: 'Anne Rossweise',
      datePosted: 'September 7, 2023',
      imgs: [post3img3, post3img2, post3img1],
      paragraphs
    }
  ])

  const featuredProducts = [
    {
      id: 1,
      title: 'Peeling Solution',
      brand: 'the Ordinary',
      img: featuredImg1
    },
    {
      id: 2,
      title: 'Facial Serum',
      brand: 'the Ordinary',
      img: featuredImg2
    },
    {
      id: 3,
      title: 'BB Cream',
      brand: 'Missha',
      img: featuredImg3
    },
    {
      id: 4,
      title: 'Moisturizer',
      brand: 'Clinique',
      img: featuredImg4
    },
  ]

  return <BlogContext.Provider value={{
    blogPosts,
    featuredProducts
  }}>
    {children}
  </BlogContext.Provider>
}

export default BlogContext