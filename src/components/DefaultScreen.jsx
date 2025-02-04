import CardLayout from "./ui/CardLayout";
import Cloud from "../assets/images/cloud.svg";
import Search from "../assets/images/search.svg";
import Temperature from "../assets/images/temperature.svg";
import Eye from "../assets/images/eye.svg";
import Thermomini from "../assets/images/temperature-mini.svg";
import Water from "../assets/images/water.svg";
import Windy from "../assets/images/windy.svg";
import { weatherCodesMapping } from "../utils";
import moment from "moment";

export default function DefaultScreen({
  currentWeatherData,
  forecastLocation,
}) {
  return (
    <div className="home-main-div">
      <div className="default-home-container">
        <CardLayout>
          {currentWeatherData?.length && currentWeatherData[0] && (
            <>
              <div className="default-card-city">
                <img
                  src={
                    weatherCodesMapping[
                      currentWeatherData[0]?.values?.weatherCode
                    ]?.img || ""
                  }
                  alt="Weather Icon"
                />
                <div>
                  <p className="city-name">{forecastLocation?.label}</p>
                  <p className="date-today">
                    {moment(currentWeatherData[0]?.date).format(
                      "ddd DD/MM/YYYY"
                    )}
                  </p>
                </div>
              </div>
              {/* Temp container */}
              <div className="temp-container">
                <img src={Temperature} className="thermometer-img" alt="Temp" />
                <div>
                  <p style={{ fontSize: "144px" }}>
                    {parseFloat(
                      currentWeatherData[0]?.values?.temperature2m || 0
                    ).toFixed(0)}
                  </p>
                  <p className="text-capitalize">
                    {currentWeatherData[0]?.values?.weatherCondition || "N/A"}
                  </p>
                </div>
                <p
                  style={{
                    fontSize: "24px",
                    alignSelf: "center",
                    paddingTop: "45px",
                  }}
                >
                  °C
                </p>
              </div>

              {/* Visibility and feels like */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "60px",
                  width: "100%",
                  columnGap: "16px",
                }}
              >
                <div className="weather-info-subtitle">
                  <div className="flex">
                    <img src={Eye} alt="Visibility" />
                    <p className="weather-params-label">Visibility</p>
                  </div>
                  {/* <p>{currentWeatherData[0]?.values?.visibility} km</p> */}
                  <p>
                    {Math.floor(
                      currentWeatherData[0].values?.visibility / 1000
                    )}{" "}
                    km
                  </p>
                </div>
                <p>|</p>
                <div className="weather-info-subtitle">
                  <div className="flex">
                    <img src={Thermomini} alt="Feels Like" />
                    <p className="weather-params-label">Feels Like</p>
                  </div>
                  {/* <p>
                    {currentWeatherData[0]?.values?.apparentTemperature ||
                      "N/A"}{" "}
                    °C
                  </p> */}

                  <p>
                    {Math.floor(
                      currentWeatherData[0].values?.apparentTemperature
                    )}{" "}
                    °C
                  </p>
                </div>
              </div>

              {/* Humidity and wind */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "60px",
                  width: "100%",
                  columnGap: "16px",
                }}
              >
                <div className="weather-info-subtitle">
                  <div className="flex">
                    <img src={Water} alt="Humidity" />
                    <p className="weather-params-label">Humidity</p>
                  </div>
                  <p>{currentWeatherData[0]?.values?.humidity || "N/A"}%</p>
                </div>
                <p>|</p>
                <div className="weather-info-subtitle">
                  <div className="flex">
                    <img src={Windy} alt="Wind" />
                    <p className="weather-params-label">Wind</p>
                  </div>
                  <p>
                    {parseFloat(
                      currentWeatherData[0]?.values?.windSpeed || 0
                    ).toFixed(0)}{" "}
                    km/h
                  </p>
                </div>
              </div>
            </>
          )}
        </CardLayout>

        {/* Search card layout */}
        <CardLayout>
          <div className="search-card">
            <div className="flex justify-center">
              <img src={Cloud} alt="Cloud" />
            </div>
            <div className="search-city-container city-results">
              <img src={Search} className="search-icon" alt="Search Icon" />
              <input
                type="text"
                className="city-input"
                placeholder="Search-city"
              />
            </div>
            <div className="search-city-suggestions">
              <p className="suggested-label">Mau Aima</p>
            </div>
          </div>
        </CardLayout>
      </div>
    </div>
  );
}
