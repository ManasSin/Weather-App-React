import { useEffect, useState } from "react";
import SearchRightChild from "./searchLocation";
import "./App.css";
import SearchInput from "./SearchInput";

function App() {
  const [userHistory, setUserHistory] = useState([]);
  const [userLocation, setUserLocation] = useState([]);
  const [cityName, setCityName] = useState("");

  const apiUrl =
    "https://api.weatherapi.com/v1/forecast.json?key=da0d03f0a14044d3aa6110017231102";

  const getWeather = async (stateName) => {
    const responce = await fetch(`${apiUrl}&q=${stateName}`);
    let responcedata = await responce.json();

    setUserLocation(responcedata);

    const oldLocalStorageData = JSON.parse(
      localStorage.getItem("location") || "[]"
    );
    setUserHistory();
    localStorage.setItem("location", JSON.stringify(userHistory));
  };

  useEffect(() => {
    getWeather(cityName);
  }, []);

  return (
    <section className="main-container">
      <div className="image-bg"></div>
      <main className="card-holder">
        {/* // todo if localStorage data is present then show anything else. */}
        <section className="search-location">
          <button onClick={() => console.log(userHistory)}>
            {" "}
            log to cobso{" "}
          </button>
          {userLocation.location ? (
            <>
              <SearchRightChild userLocation={userLocation} />
              <SearchInput
                getWeather={getWeather}
                setCityName={setCityName}
                cityName={cityName}
              />
            </>
          ) : (
            <SearchInput
              getWeather={getWeather}
              setCityName={setCityName}
              cityName={cityName}
            />
          )}
        </section>

        {/* //? now build the actuall inter face */}
        <section className="ui-section">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </main>
    </section>
  );
}

export default App;
