import React from 'react';
import Layout from '../Layout';
import ListBlogs from '../../components/pages/home/listBlog'
import './home.scss'
import { useDispatch } from 'react-redux';
function Home() {
  const dispatch = useDispatch()
  React.useEffect(()=> {
    document.title = 'Blog programming'
  },[])
  React.useEffect(()=> {
    return ()=> {
      dispatch({
          type: 'CLEAR_LIST_BLOG'
      })
  }
  }, [dispatch])
  return (
    <Layout>
       <div className="body-home">
         <ListBlogs />
       </div>
    </Layout>
  );
}

export default React.memo(Home);
