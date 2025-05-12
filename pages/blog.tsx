import { NextPage } from 'next'
import Footer from '../components/Footer'  

const BlogPage: NextPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Блог</h1>
      <ul>
        <li>
          <h2 className="text-2xl font-semibold">Как мы используем AI в SignBridge</h2>
          <p>Краткое описание статьи...</p>
        </li>
        <li>
          <h2 className="text-2xl font-semibold">Инновации в области компьютерного зрения</h2>
          <p>Краткое описание статьи...</p>
        </li>
      </ul>
      <Footer />
    </div>
  )
}

export default BlogPage
