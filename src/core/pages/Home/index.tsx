import { useEffect } from 'react';
import Layout from '../Layout';
import Banner from '../../components/common/Banner/Banner';
import {useDispatch} from 'react-redux'
import {LOAD_TODO_FAKE} from '../../store/sagaActions'
import NewArticle from './NewArticle'
import PerfectArticl from './PerfectArticle'
import './home.scss'
import { useCallback } from 'react';

function Home() {
  const dispatch = useDispatch()
  const fetchUser = useCallback(() => dispatch({type: LOAD_TODO_FAKE}), [dispatch])
  useEffect(() => {
    document.title = 'Blog programming';
    fetchUser()
  }, [fetchUser]);
  return (
    <Layout>
      <>
        <Banner />
       <div className="body-home">
         <NewArticle />
         <PerfectArticl />
       </div>
      </>
    </Layout>
  );
}

export default Home;
