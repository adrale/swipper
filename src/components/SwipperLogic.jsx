import React, { useState } from 'react';
import SwipperCard from '../components/SwipperCard';

const SwipperLogic = ({ profil }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLike = () => {
    setCurrentIndex(prevIndex => (prevIndex === profil.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDislike = () => {
    setCurrentIndex(prevIndex => (prevIndex === profil.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="swipe-logic">
      <section className="card-wrapper">
        <SwipperCard profils={profil[currentIndex]} onLike={handleLike} onDislike={handleDislike} />
      </section>
    </section>
  );
};

export default SwipperLogic;