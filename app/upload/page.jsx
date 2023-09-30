"use client"

import { useState } from 'react';
import styles from './page.module.css';
import UploadFile from '@/components/UploadFile/UploadFile';
import { MainButton } from '@/components';
import ThreeDPreview from '@/components/File/File'; // Assuming this is your 3D preview component
import MyVerticallyCenteredModal from '@/components/UploadModal/UploadModal';
import dynamic from 'next/dynamic';

function Upload() {
  const [isUploadVisible, setIsUploadVisible] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const toggleUploadVisibility = () => {
    setIsUploadVisible(true);
  };

  // const ThreeDPreview = dynamic(() => ('./../../components/File/File'), {
  //   ssr: false,
  // })

  // const UploadFile = dynamic(() => import('./../../components/UploadFile/UploadFile'), {
  //   ssr: false,
  // })

  // const MyVerticallyCenteredModal = dynamic(() => import('./../../components/UploadModal/UploadModal'), {
  //   ssr: false,
  // });

  return (
    <>
      {isUploadVisible ? (
        <div  className={` ${styles.upload}`}>
        <UploadFile />
        </div>
      ) : (
        <div className={`upload d-flex justify-content-center align-items-center ${styles.upload}`}>
          <div className={`p-5 bg-white ${styles.uploadCard}`}>
            <ThreeDPreview />
            <div className='mt-3'>
              <div>

              {/* <MainButton onclick={() => setModalShow(true)} text={'Next'} /> */}
                <MainButton onclick={() => setModalShow(true)} text={'open'} />
              </div>
            </div>
          </div>
        </div>
      )}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Upload;
