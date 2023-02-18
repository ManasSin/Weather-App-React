import "./HourlyCard.css";

const WindSpeed = ({ temp: { day } }) => {
  return (
    <div className="card-parent wind">
      <div className="top-bar">💨 WindSpeed.</div>
      <div className="single-inside-card">{day.maxwind_kph}/km</div>
    </div>
  );
};

export default WindSpeed;
