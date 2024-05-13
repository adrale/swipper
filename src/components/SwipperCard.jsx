import React from 'react';

const SwipperCard = ({ profil, onLike, onDislike }) => {
  return (
    <article className="card">
      <section className="card-content">
        <img src={profil.image} alt={profil.name} className="profil-image" />
        <h2>{profil.name}</h2>
        <p>{profil.age}</p>
        <p>{profil.description}</p>
      </section>
      <section className="card-button">
        <button onClick={() => onDislike(profil)} className="dislike-button">
         😠
        </button>
        <button onClick={() => onLike(profil)} className="like-button">
          😍
        </button>
      </section>
    </article>
  );
};

export default SwipperCard;