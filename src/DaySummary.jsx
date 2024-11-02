import Weather from "./Weather";

export default function DaySummary({ datetime, weatherData }) {
  return (
    <div className="daySummary">
      {weatherData && (
        <Weather
          conditions={weatherData.conditions}
          image={weatherData.icon}
          className="weather"
        />
      )}
      <div className="dayNum">{datetime}</div>
    </div>
  );
}
