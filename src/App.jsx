import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import BlogPost from './pages/BlogPost.jsx'
import Iletisim from './pages/Iletisim.jsx'
import Hakkimda from './pages/Hakkimda.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hakkimda" element={<Hakkimda />} />
      <Route path="/iletisim" element={<Iletisim />} />
      <Route path="/blog/:id" element={<BlogPost />} />
    </Routes>
  )
}
