import "./HourlyCard.css";
import HourlyInsideCard from "./HourlyInsideCard";

const HourlyCard = ({ userLocation: { hour } }) => {
  const currentTime = new Date().getHours();
  return (
    <div className="card-parent">
      <aside className="top-bar">⏱️ HOURLY FORECAST</aside>
      <div className="child-items">
        {hour.map((hours) => (
          <HourlyInsideCard hour={hours} />
        ))}
      </div>
    </div>
  );
};

// export { HourlyCard };
export default HourlyCard;

// ({
//   userLocation: {
//     forecast: { forecastday },
//   },
// } = userLocation)
