import React, { useState } from 'react';
import { Layout } from 'ui/organisms/Layout/Layout';
import { PhotoModal } from 'ui/molecules/PhotoModal/PhotoModal';

import Photo1 from './resources/1.jpg';
import Photo2 from './resources/2.jpg';
import Photo3 from './resources/3.jpg';
import Photo4 from './resources/4.jpg';
import Photo5 from './resources/5.jpg';

import './AboutPage.scss';

export const AboutPage = (): React.ReactElement => {
  const [modalVisible, setModalVisible] = useState(false);
  const [photoSrc, setPhotoSrc] = useState('');

  const setModalVisibility = (src: string): void => {
    setModalVisible(true);
    setPhotoSrc(src);
  };

  return (
    <Layout>
      <div className="about">
        <div className="gallery">
          <img
            className="gallery__img"
            src={Photo1}
            alt="Photo 1"
            onClick={() => setModalVisibility(Photo1)}
          />
          <div className="gallery__photos">
            <img
              className="gallery__photos__img"
              src={Photo2}
              alt="Photo 2"
              onClick={() => setModalVisibility(Photo2)}
            />
            <img
              className="gallery__photos__img"
              src={Photo3}
              alt="Photo 3"
              onClick={() => setModalVisibility(Photo3)}
            />
            <img
              className="gallery__photos__img"
              src={Photo4}
              alt="Photo 4"
              onClick={() => setModalVisibility(Photo4)}
            />
            <img
              className="gallery__photos__img"
              src={Photo5}
              alt="Photo 5"
              onClick={() => setModalVisibility(Photo5)}
            />
          </div>
        </div>
        <div className="about-me">
          <div className="about-me__p">
            Lorem ipsum dolor sit amet,{' '}
            <span className="bold  color-black">consectetur adipiscing</span>{' '}
            elit. Maecenas sed mollis massa. Sed mollis hendrerit efficitur.
            Donec ante justo, pulvinar ut nisl sit amet, congue convallis sem.
            Nam tempus lorem in sodales viverra. Ut vehicula turpis id egestas
            rutrum. Nunc sagittis metus et ligula tincidunt sollicitudin.
          </div>
          <div className="about-me__p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sed mollis massa. Sed mollis hendrerit efficitur. Donec ante justo,
            pulvinar ut nisl sit amet, congue convallis sem. Nam tempus lorem in
            sodales viverra.
          </div>
          <div className="about-me__p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sed mollis massa. Sed mollis hendrerit efficitur. Donec ante justo,
            pulvinar ut nisl sit amet, congue convallis sem.
          </div>
          <div className="about-me__p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sed mollis massa. Sed mollis hendrerit efficitur. Donec ante justo,
            pulvinar ut nisl sit amet, congue convallis sem. Nam tempus lorem in
            sodales viverra. Ut vehicula turpis id egestas rutrum.
          </div>
          <div className="about-me__p">
            <span className="bold underline color-black">Lorem ipsum</span>{' '}
            dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        {modalVisible && (
          <PhotoModal photo={photoSrc} setModalVisibility={setModalVisible} />
        )}{' '}
        {/* modalVisible ? <PhotoModal /> : null */}
      </div>
    </Layout>
  );
};
