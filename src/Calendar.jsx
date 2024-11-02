import { useState, useEffect } from "react";
import Day from "./Day.jsx";
import { dummyDataDays, months } from "./dummyData.js";

const mode = "dev";

export default function Calendar() {
  const currentMonth = months[8];

  const [weatherData, setWeatherData] = useState(dummyDataDays);

  const getWeatherData = async () => {
    try {
      if (mode === "prod") {
        const response = await fetch(
          "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?unitGroup=us&include=days&key=6QDLB8SMTL6ZKPDSGFXCMFMFY&contentType=json"
        );
        const data = await response.json();
        setWeatherData(data);
      } else if (mode === "dev") {
        setWeatherData(dummyDataDays);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  const numDataDays = weatherData.days.length;

  return (
    <div id="calendar">
      {weatherData.days.map((day, i) => (
        <Day key={i} dayNum={i} data={weatherData.days[i]}></Day>
      ))}
      {Array.from({ length: currentMonth.numDays - numDataDays }, (_, i) => (
        <Day dayNum={i + numDataDays} key={i + numDataDays} />
      ))}
    </div>
  );
}
