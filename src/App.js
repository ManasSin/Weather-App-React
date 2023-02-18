import { useEffect, useState } from "react";
import HourlyCard from "./HourlyCard";
import SearchRightChild from "./searchLocation";
import "./App.css";
import SearchInput from "./SearchInput";

function App() {
  let localStorageData = JSON.parse(localStorage.getItem("location") || "[]");
  const [userLocation, setUserLocation] = useState([]);
  const [cityName, setCityName] = useState([]);

  const apiUrl =
    "https://api.weatherapi.com/v1/forecast.json?key=da0d03f0a14044d3aa6110017231102";

  const getWeather = async (stateName) => {
    const responce = await fetch(`${apiUrl}&q=${stateName}`);
    let responcedata = await responce.json();

    setUserLocation(responcedata);

    localStorageData.push(stateName);
    localStorage.setItem("location", JSON.stringify(localStorageData));
  };

  return (
    <section className="main-container">
      <div className="image-bg"></div>
      <main className="card-holder">
        {/* // todo if localStorage data is present then show anything else. */}
        <section className="search-location">
          {userLocation.location ? (
            <>
              <SearchRightChild userLocation={userLocation} />
              <SearchInput
                getWeather={getWeather}
                setCityName={setCityName}
                cityName={cityName}
                localStorageData={localStorageData}
              />
            </>
          ) : (
            <SearchInput
              getWeather={getWeather}
              setCityName={setCityName}
              cityName={cityName}
              localStorageData={localStorageData}
            />
          )}
        </section>

        {/* //? now build the actuall inter face */}
        <section className="ui-section">
          {userLocation.forecast ? (
            <HourlyCard userLocation={userLocation.forecast?.forecastday[0]} />
          ) : (
            // <HourlyCard userLocation={userLocation} />
            ""
          )}

          <div className="current-info">
            {/* //* last updated , wind info, humidity, cloud, feels like, visibility */}
          </div>
          <div>{/* from current time to 10 + hrs update */}</div>
          <div></div>
          <div></div>
        </section>
      </main>
    </section>
  );
}

export default App;
