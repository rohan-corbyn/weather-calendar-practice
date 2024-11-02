import TodoSummary from "./TodoSummary.jsx";
import DaySummary from "./DaySummary.jsx";

export default function Day({ datetime, weatherData }) {
  return (
    <div className="day">
      <DaySummary datetime={datetime} weatherData={weatherData} />
      <TodoSummary datetime={datetime} />
    </div>
  );
}
