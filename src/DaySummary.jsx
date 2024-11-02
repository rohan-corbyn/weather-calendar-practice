import Weather from "./Weather";

function DaySummary(props) {
  return (
    <div className="daySummary">
      {props.data && (
        <Weather
          conditions={props.data.conditions}
          image={props.data.icon}
          className="weather"
        />
      )}
      <div className="dayNum">{props.dayNum}</div>
    </div>
  );
}

export default DaySummary;
