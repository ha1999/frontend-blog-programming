import { useEffect } from 'react';
import Layout from '../Layout';

function Blog() {
  useEffect(() => {
    document.title = 'Bài viết';
  }, []);
  return (
    <Layout>
      <h1>Blog page</h1>
    </Layout>
  );
}

export default Blog;
