import { useEffect, useState } from "react";
import "./App.css";

// import { HourlyCard, SearchInput, SearchRightChild } from "./components";
// import SearchInput from "./components/SearchInput";
import SearchInput from "./components/SearchInput";
import HourlyCard from "./components/HourlyCard";
import SearchRightChild from "./components/searchLocation";
import Temp from "./components/MinTemp";
import WindSpeed from "./components/WindSpeed";
import SnowCm from "./components/SnowCm";
import RestShortInfo from "./components/RestShortInfo";
import Sunrise from "./components/Sunrise";
import Sunset from "./components/Sunset";

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

  const lastLocationSearched = Object.values(localStorageData);
  console.log(lastLocationSearched[lastLocationSearched.length - 1]);

  // useEffect(() => {
  //   getWeather(`${lastLocationSearched[lastLocationSearched.length - 1]}`);
  // }, []);

  const forecastInfo = userLocation.forecast?.forecastday[0];

  const getWeatherType = () => {
    let className = ["image-bg"];

    if (userLocation.location) {
      const type = forecastInfo.day.condition.text;

      type === "Sunny"
        ? className.push("suny-bg")
        : type === "Cloudy"
        ? className.push("cloudy-bg")
        : type === "Overcast"
        ? className.push("snow-bg")
        : type === "Patchy rain possible"
        ? className.push("rainy-bg")
        : className.push("");
    }

    return className.join(" ");
  };

  return (
    <section className="main-container">
      <div className={`${getWeatherType()}`}></div>
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

              <RestShortInfo info={forecastInfo} />

              <Sunrise info={forecastInfo} />

              <Sunset info={forecastInfo} />

              <div className="current-info"></div>
              {/* //* last updated , wind info, humidity, cloud, feels like, visibility */}
              <div></div>
              <div></div>
            </>
          ) : (
            // <HourlyCard userLocation={userLocation} />
            ""
          )}
        </section>
      </main>
    </section>
  );
}

export default App;
