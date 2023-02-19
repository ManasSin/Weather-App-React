import { useEffect, useState } from "react";
import "./App.css";

import SearchInput from "./components/SearchInput";
import HourlyCard from "./components/HourlyCard";
import SearchRightChild from "./components/searchLocation";
import Temp from "./components/MinTemp";
import WindSpeed from "./components/WindSpeed";
import SnowCm from "./components/SnowCm";
import RestShortInfo from "./components/RestShortInfo";
import Sunrise from "./components/Sunrise";
import Sunset from "./components/Sunset";
import Thanks from "./components/Thanks";
import Humidity from "./components/Humidity";

function App() {
  let localStorageData = JSON.parse(localStorage.getItem("location") || "[]");
  const lastLocationSearched = Object.values(localStorageData);

  const [userLocation, setUserLocation] = useState([]);
  const [cityName, setCityName] = useState(() =>
    lastLocationSearched
      ? lastLocationSearched[lastLocationSearched.length - 1]
      : []
  );

  const apiUrl =
    "https://api.weatherapi.com/v1/forecast.json?key=da0d03f0a14044d3aa6110017231102";

  const getWeather = async (stateName) => {
    const responce = await fetch(`${apiUrl}&q=${stateName}`);
    let responcedata = await responce.json();

    setUserLocation(responcedata);

    localStorageData.push(stateName);
    localStorage.setItem("location", JSON.stringify(localStorageData));
  };

  useEffect(() => {
    getWeather(cityName);
  }, []);

  const forecastInfo = userLocation.forecast?.forecastday[0];

  const getWeatherType = () => {
    let className = ["image-bg"];

    if (userLocation.location) {
      const type = userLocation.current.condition.text;

      type === "Sunny"
        ? className.push("suny-bg")
        : type === "Cloudy"
        ? className.push("cloudy-bg")
        : type === "Overcast"
        ? className.push("snow-bg")
        : type === "Patchy rain possible"
        ? className.push("rainy-bg")
        : type === "Clear"
        ? className.push("clear-bg")
        : type === "Mist"
        ? className.push("mist-bg")
        : type === "Fog"
        ? className.push("fog-bg")
        : className.push("");
    }

    return className.join(" ");
  };

  const getCurrentTime = () => {
    const time = userLocation.current?.last_updated.slice([10], [13]);

    const opacity = time < 6 || time > 19 ? { filter: "brightness(0.4)" } : {};

    return opacity;
  };

  return (
    <section className="main-container">
      <div className={`${getWeatherType()}`} style={getCurrentTime()}></div>
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
                lastLocationSearched={lastLocationSearched}
              />
            </>
          ) : (
            <SearchInput
              getWeather={getWeather}
              setCityName={setCityName}
              cityName={cityName}
              localStorageData={localStorageData}
              lastLocationSearched={lastLocationSearched}
            />
          )}
        </section>

        {/* //? now build the actuall inter face */}
        <section className="ui-section">
          {userLocation.forecast ? (
            <>
              <HourlyCard userLocation={forecastInfo} />

              <Temp temp={forecastInfo} />

              <WindSpeed temp={forecastInfo} />

              {forecastInfo.day.totalsnow_cm != 0 ? (
                <SnowCm temp={forecastInfo} />
              ) : (
                ""
              )}

              <RestShortInfo info={forecastInfo} location={userLocation} />

              <Sunrise info={forecastInfo} />

              <Sunset info={forecastInfo} />

              <Humidity info={userLocation.current} />

              <Thanks />
            </>
          ) : (
            <Thanks />
          )}
        </section>
      </main>
    </section>
  );
}

export default App;
