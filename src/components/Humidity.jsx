const Humidity = ({ info: { humidity } }) => {
  return (
    <div className="card-parent Humidity">
      <div className="top-bar">🌤️ Humidity.</div>
      <div className="single-inside-card">{humidity} g.m°3</div>
    </div>
  );
};

export default Humidity;
