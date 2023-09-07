"use client"
import React, { useRef } from 'react';
import CustomModal from '../customModal/customModal';

const ExploreButton = () => {
  const customModalRef = useRef(null);

  const handleExploreClick = () => {
    customModalRef.current.openModal();
  };

  return (
    <div>
      <button onClick={handleExploreClick}>Explore</button>
      <CustomModal ref={customModalRef} />
    </div>
  );
};

export default ExploreButton;