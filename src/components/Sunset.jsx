const Sunset = ({ info: { astro } }) => {
  return (
    <div className="card-parent wind">
      <div className="top-bar">🌤️ Sunset.</div>
      <div className="single-inside-card">{astro.sunset}</div>
    </div>
  );
};

export default Sunset;
