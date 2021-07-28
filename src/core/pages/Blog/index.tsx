import { useEffect} from 'react'
import ContentBlog from '../../components/pages/blog/content/ContentBlog'
import LeftBlogPage from '../../components/pages/blog/left/LeftBlogPage'
import RightBlog from '../../components/pages/blog/right/RightBlog'
import Layout from '../Layout'

function Blog() {
  useEffect(() => {
    document.title = 'Bài viết'
  }, [])
  return (
    <Layout>
      <LeftBlogPage />
      <ContentBlog />
      <RightBlog />
      
    </Layout>
  )
}

export default Blog
