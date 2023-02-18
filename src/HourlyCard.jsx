import "./HourlyCard.css";

const HourlyCard = ({ userLocation: { hour } }) => {
  //   console.log(hour);
  hour.map((h) => console.log(h));
  return (
    <div className="hourly-cards">
      <aside className="top-bar">⏱️ HOURLY FORECAST</aside>
      <div className="child-items">
        <article className="inside-cards"></article>
      </div>
    </div>
  );
};

export default HourlyCard;

// ({
//   userLocation: {
//     forecast: { forecastday },
//   },
// } = userLocation)
