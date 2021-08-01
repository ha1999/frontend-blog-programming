import React from 'react'
import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ContentBlog from '../../components/pages/blog/content/ContentBlog'
import LeftBlogPage from '../../components/pages/blog/left/LeftBlogPage'
import RightBlog from '../../components/pages/blog/right/RightBlog'
import { getBlogCurrent } from '../../store/blog/blog.slice'
import Layout from '../Layout'

interface Params {
  auth: string
  title: string
}

function Blog() {
  const dispatch = useDispatch()
  const { auth, title } = useParams<Params>()
  const {blog, user} = useSelector(getBlogCurrent)

  useEffect(() => {
    document.title = blog?.title || ''
  }, [blog])

  useEffect(()=> {
    dispatch({
      type: 'GET_DETAIL_BLOG',
      payload: {auth, title}
    })
  }, [auth, dispatch, title])

  return (
    <Layout>
      <LeftBlogPage heart={blog?.heart} view={blog?.view}/>
      <ContentBlog blog={blog} img={user?.avatar} />
      <RightBlog user={user} />
    </Layout>
  )
}

export default React.memo(Blog)
