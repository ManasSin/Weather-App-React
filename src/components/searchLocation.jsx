import { useEffect } from "react";

export const SearchRightChild = (location) => {
  // const locationHistory = () => {
  //   localStorage.setItem("location", JSON.stringify(location));

  // useEffect(() => {
  //   localStorage.setItem("location", JSON.stringify(location));
  // });
  //   };
  //   let dataForLocal = [];

  //   localStorage.setItem("location", JSON.stringify(dataForLocal));

  return (
    <div className="search-child-left">
      <p className="temp">
        {location.userLocation.current
          ? `${location.userLocation.current.temp_c}`
          : "N/A"}
        {/* NA */}
      </p>
      <p className="user-location">
        {location.userLocation.location
          ? `${location.userLocation.location.name} , ${location.userLocation.location.region} `
          : "Search your location"}
        {/* NA */}
        <span>
          {location.userLocation.location
            ? location.userLocation.location.localtime
            : "N/A"}
        </span>
      </p>
      <div className="round-border-tags">
        {location.userLocation.location
          ? location.userLocation.location.tz_id
          : "N/A"}
      </div>
    </div>
  );
};

// export default SearchRightChild;
