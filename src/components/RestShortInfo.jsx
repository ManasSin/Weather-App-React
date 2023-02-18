const RestShortInfo = ({ info: { day } }, { userLocation: userLocation }) => {
  return (
    <div className="card-parent general-info">
      <div className="top-bar">ℹ General Information</div>
      <div className="inside-cards">
        <div className="single-inside-card">
          <p>
            <span>Avgerage temperature </span>
            {day.avgtemp_c}
          </p>
        </div>
        <div className="single-inside-card">
          <p>
            <span>Avgerage Humidity </span>
            {day.avghumidity}
          </p>
        </div>
        <div className="single-inside-card">
          <p>
            <span>Avgerage Visibility </span>
            {day.avgvis_km}/km
          </p>
        </div>
        <div className="single-inside-card">
          <p>
            <span>Chance of Rain </span>
            {day.daily_chance_of_rain}
          </p>
        </div>
        <div className="single-inside-card">
          <p>
            <span>UV Index </span>
            {day.uv}
          </p>
        </div>
        <div className="single-inside-card">
          <p>
            <span>Weather condition </span>
            {day.condition.text}
          </p>
        </div>
        {/* <div className="single-inside-card">
          <p>
            <span>Weather condition </span>
            {userlocation.lat}
          </p>
        </div>
        <div className="single-inside-card">
          <p>
            <span>Weather condition </span>
            {userlocation.lon}
          </p>
        </div> */}
        {/* <div className="single-inside-card">
          <p>
            <span>Weather condition </span>
            {alldata}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default RestShortInfo;
