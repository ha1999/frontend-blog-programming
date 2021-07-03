import { useEffect } from 'react';
import MyMaps from '../../components/maps';
import Layout from '../Layout';

function Introduce() {
  useEffect(() => {
    document.title = 'Tin công nghệ';
  }, []);
  return (
    <Layout>
      <h1>Introduce page</h1>
      <MyMaps />
    </Layout>
  );
}

export default Introduce;
