import { createContext, useState } from "react";

const BlogContext = createContext()

export const BlogProvider = ({children}) => {
  // Global Data

  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'Choosing the right toner for your skin type',
      author: 'Maggie Montgomery',
      datePosted: 'March 23, 2023',
      imgs: []
    }
  ])
}