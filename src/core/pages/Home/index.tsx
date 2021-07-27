import { useEffect } from 'react';
import Layout from '../Layout';
import {useDispatch} from 'react-redux'
import {LOAD_TODO_FAKE} from '../../store/sagaActions'
import NewArticle from './NewArticle'
import './home.scss'
import LeftBar from '../../components/pages/home/leftBar'
import { useCallback } from 'react';
import RightBar from '../../components/pages/home/rightBar'
function Home() {
  const dispatch = useDispatch()
  const fetchUser = useCallback(() => dispatch({type: LOAD_TODO_FAKE}), [dispatch])
  useEffect(() => {
    document.title = 'Blog programming';
    fetchUser()
  }, [fetchUser]);
  return (
    <Layout>
       <div className="body-home">
         <LeftBar />
         <NewArticle />
         <RightBar />
       </div>
    </Layout>
  );
}

export default Home;
