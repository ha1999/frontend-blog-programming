import { useEffect } from 'react';
import Layout from '../Layout';

function Introduce() {
  useEffect(() => {
    document.title = 'Tin công nghệ';
  }, []);
  return (
    <Layout>
      <h1>Introduce page</h1>
    </Layout>
  );
}

export default Introduce;
