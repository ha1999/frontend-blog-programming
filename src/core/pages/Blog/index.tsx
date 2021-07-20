import { useEffect} from 'react'
import { Button } from 'react-bootstrap'
import InputTagAutoComplete from '../../components/inputTag'
import ActionBlog from '../../components/actionBlog'
import Layout from '../Layout'

function Blog() {
  useEffect(() => {
    document.title = 'Bài viết'
  }, [])
  return (
    <Layout>
      <h1>Blog page</h1>
      <Button variant="primary">Tạo Blog</Button>
      <ActionBlog />
      <InputTagAutoComplete />
    </Layout>
  )
}

export default Blog
