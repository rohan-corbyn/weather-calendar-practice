import DraggableList from "./DraggableList";
import { useState } from "react";
import { todos } from "./dummyData";

export default function TodoListModal({ datetime, setTodoSummaryOpen }) {
  const [todoList, setTodoList] = useState(getTodoListForDate(datetime));

  function getTodoListForDate(datetime) {
    const date = new Date(datetime);
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();

    return todos.filter((todo) => {
      if (todo.type === "daily") {
        return true;
      }
      if (todo.type === "weekly" && todo.dayOfWeek === dayOfWeek) {
        return true;
      }
      if (todo.type === "monthly" && todo.dayOfMonth === dayOfMonth) {
        return true;
      }
      return false;
    });
  }

  return (
    <div
      id="todoModal"
      className="modal"
      onClick={(event) => {
        const modal = document.getElementById("todoModal");
        event.target === modal && setTodoSummaryOpen(false);
      }}
    >
      <div className="modal-content">
        <span onClick={() => setTodoSummaryOpen(false)} className="close">
          &times;
        </span>
        <DraggableList list={todoList} setList={setTodoList}>
          {todoList.map((todo) => (
            <li draggable={true} key={todo.id} data-key={todo.id}>
              {todo.title}
            </li>
          ))}
        </DraggableList>
      </div>
    </div>
  );
}
