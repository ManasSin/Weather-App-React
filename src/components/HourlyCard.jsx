import "./HourlyCard.css";
import HourlyInsideCard from "./HourlyInsideCard";

export const HourlyCard = ({ userLocation: { hour } }) => {
  const currentTime = new Date().getHours();
  return (
    <div className="hourly-cards">
      <aside className="top-bar">⏱️ HOURLY FORECAST</aside>
      <div className="child-items">
        {hour.map((hours) => (
          <HourlyInsideCard hour={hours} currentTime={currentTime} />
        ))}
      </div>
    </div>
  );
};

//  default HourlyCard;

// ({
//   userLocation: {
//     forecast: { forecastday },
//   },
// } = userLocation)
