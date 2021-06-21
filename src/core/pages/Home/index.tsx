import { useEffect } from 'react';
import Layout from '../Layout';
import Banner from '../../components/common/Banner/Banner';
// import CropDemo from '../../components/common/cropperImage'
// import ModalBase from '../../components/common/modal'
// import {useDispatch} from 'react-redux'
// import {LOAD_TODO_FAKE} from '../../store/sagaActions'
import NewArticle from './NewArticle'
import PerfectArticl from './PerfectArticle'
import './home.scss'

function Home() {
  // const dispatch = useDispatch()
  useEffect(() => {
    document.title = 'Blog programming';
  }, []);
  // const fetchUser = () => dispatch({type: LOAD_TODO_FAKE})
  return (
    <Layout>
      <>
        <Banner />
       <div className="body-home">
         <NewArticle />
         <PerfectArticl />
            {/* <ModalBase>
              <CropDemo src="https://www.dungplus.com/wp-content/uploads/2019/12/girl-xinh-4.jpg" />
            </ModalBase>
            <button onClick={fetchUser}>Load user</button> */}
       </div>
      </>
    </Layout>
  );
}

export default Home;
