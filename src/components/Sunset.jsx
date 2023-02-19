const Sunset = ({ info: { astro } }) => {
  return (
    <div className="card-parent sunset">
      <div className="top-bar">🌤️ Sunset.</div>
      <div className="single-inside-card">{astro.sunset}</div>
    </div>
  );
};

export default Sunset;
