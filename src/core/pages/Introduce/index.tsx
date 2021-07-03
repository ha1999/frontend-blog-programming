import { useEffect } from 'react';
import OwnMaps from '../../components/maps';
import Layout from '../Layout';

function Introduce() {
  useEffect(() => {
    document.title = 'Tin công nghệ';
  }, []);
  return (
    <Layout>
      <h1>Introduce page</h1>
      <OwnMaps />
    </Layout>
  );
}

export default Introduce;
