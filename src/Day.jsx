import TodoSummary from "./TodoSummary.jsx";
import DaySummary from "./DaySummary.jsx";

function Day(props) {
  if (props.data) {
  }
  return (
    <div className="day">
      <DaySummary dayNum={props.dayNum} data={props.data} />
      <TodoSummary />
    </div>
  );
}

export default Day;
