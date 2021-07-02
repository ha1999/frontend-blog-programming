import { useEffect, useState } from 'react';
import EditorBase from '../../components/editor/Editor';
import Layout from '../Layout';

function Blog() {
  const [content, setContent] = useState('')
  useEffect(() => {
    document.title = 'Bài viết';
  }, []);
  return (
    <Layout>
      <h1>Blog page</h1>
      <EditorBase content={content} setContent={setContent}/>
    </Layout>
  );
}

export default Blog;
