import { useEffect } from 'react';
import Layout from '../Layout';
import Banner from '../../components/common/Banner/Banner';
import './home.scss'

function Home() {
  useEffect(() => {
    document.title = 'Blog programming';
  }, []);
  return (
    <Layout>
      <>
        <Banner />
       <div className="body-home">
          <div className="news-mark">
            <h1>Bài viết nổi bật</h1>
          </div>
          <div className="news-new">
            <h2>Bài viết mới</h2>
          </div>
       </div>
      </>
    </Layout>
  );
}

export default Home;
