const Sunrise = ({ info: { astro } }) => {
  return (
    <div className="card-parent sunrise">
      <div className="top-bar">🌤️ Sunrise.</div>
      <div className="single-inside-card">{astro.sunrise}</div>
    </div>
  );
};

export default Sunrise;
