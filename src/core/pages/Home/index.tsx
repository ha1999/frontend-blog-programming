import React from 'react';
import Layout from '../Layout';
import NewArticle from './NewArticle'
import './home.scss'
import LeftBar from '../../components/pages/home/leftBar'
import RightBar from '../../components/pages/home/rightBar'
function Home() {
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

export default React.memo(Home);
