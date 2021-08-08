import React from 'react';
import Layout from '../Layout';
import ListBlogs from '../../components/pages/home/listBlog'
import './home.scss'
import LeftBar from '../../components/pages/home/leftBar'
import RightBar from '../../components/pages/home/rightBar'
import { useDispatch } from 'react-redux';
function Home() {
  const dispatch = useDispatch()
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
         <LeftBar />
         <ListBlogs />
         <RightBar />
       </div>
    </Layout>
  );
}

export default React.memo(Home);
