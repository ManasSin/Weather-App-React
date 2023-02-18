const RestShortInfo = ({ info: { day } }) => {
  return (
    <div className="card-parent general-info">
      <div className="top-bar">ℹ General Information</div>
      <div className="single-inside-card">
        <p>
          <span>Avgerage temperature </span>
          {day.avgtemp_c}
        </p>
        <p>
          <span>Avgerage Humidity </span>
          {day.avghumidity}
        </p>
        <p>
          <span>Avgerage Visibility </span>
          {day.avgvis_km}/km
        </p>
        <p>
          <span>Chance of Rain </span>
          {day.daily_chance_of_rain}
        </p>
        <p>
          <span>UV Index </span>
          {day.uv}
        </p>
      </div>
    </div>
  );
};

export default RestShortInfo;
