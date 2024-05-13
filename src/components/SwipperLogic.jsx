import { useState } from 'react';
import SwipperCard from '../components/SwipperCard';

const SwipperLogic = ({ lover, loading }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLike = () => {
    setCurrentIndex(prevIndex => (prevIndex === lover.length - 1 ? 0 : prevIndex + 1));
  };

  const handleDislike = () => {
    setCurrentIndex(prevIndex => (prevIndex === lover.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="swipe-logic">
      <section className="card-wrapper">
        <SwipperCard lover={lover[currentIndex]} loading={loading} onLike={handleLike} onDislike={handleDislike} />
      </section>
    </section>
  );
};

export default SwipperLogic;