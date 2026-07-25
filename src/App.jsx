import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import BlogPost from './pages/BlogPost.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<BlogPost />} />
    </Routes>
  )
}
