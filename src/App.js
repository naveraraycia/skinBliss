import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BlogProvider } from "./context/BlogContext";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BlogProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </BlogProvider>
  )
}

export default App;
