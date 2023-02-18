const SnowCm = ({
  temp: {
    day: { totalsnow_cm },
  },
}) => {
  return (
    <div className="card-parent wind">
      <div className="top-bar">❄️ Snow.</div>
      <div className="single-inside-card">{totalsnow_cm} cm</div>
    </div>
  );
};

export default SnowCm;
