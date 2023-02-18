import "./HourlyCard.css";

const Temp = ({ temp: { day } }) => {
  return (
    <div className="card-parent min-temp">
      <div className="top-bar">🌡️ Temp.</div>
      <div className="single-inside-card">
        <p>
          <span>From : </span>
          {day.mintemp_c}°C{" "}
        </p>
        <p>
          <span>To : </span>
          {day.maxtemp_c}°C
        </p>
      </div>
    </div>
  );
};

export default Temp;
