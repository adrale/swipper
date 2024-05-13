export default function SwipperCard({ lover, loading, onLike, onDislike }) {
  return (
    loading ? (
      <p>Loading...</p>
    ) : (
      <>
        <article className="card">
          <section className="card-content">
            <img src={lover.picture.large} alt={lover.name.first} className="lover-picture" />
            <h2>{lover.name.first}</h2>
            <p>{lover.age}</p>
          </section>
          <section className="card-button">
            <button onClick={() => onDislike(lover)} className="dislike-button">
              😠
            </button>
            <button onClick={() => onLike(lover)} className="like-button">
              😍
            </button>
          </section>
        </article>
      </>
    )
  );
};
