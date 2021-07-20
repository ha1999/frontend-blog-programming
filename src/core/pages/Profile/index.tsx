import { useEffect } from 'react';
import ModalBase from '../../components/common/modal';
import Layout from '../Layout';
import CropperImg from '../../components/common/cropperImage'

function Profile() {
  useEffect(() => {
    document.title = 'Tin công nghệ';
  }, []);
  return (
    <Layout>
      <h1>Profile page</h1>
        <ModalBase>
          <CropperImg />
        </ModalBase>
    </Layout>
  );
}

export default Profile;
