function Weather(props) {
  console.log(props.image);

  return (
    <div className="weather">
      <i
        className="weatherIcon"
        style={{
          backgroundImage: `url("https://raw.githubusercontent.com/visualcrossing/WeatherIcons/refs/heads/main/SVG/1st%20Set%20-%20Monochrome/${props.image}.svg")`,
        }}
      ></i>
      {props.conditions}
    </div>
  );
}

export default Weather;
