import { useEffect } from 'react';
import Layout from '../Layout';

function Profile() {
  useEffect(() => {
    document.title = 'Tin công nghệ';
  }, []);
  return (
    <Layout>
      <h1>Profile page</h1>
    </Layout>
  );
}

export default Profile;
