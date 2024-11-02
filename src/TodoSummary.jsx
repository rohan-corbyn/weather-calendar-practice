import { useState } from "react";
import TodoListModal from "./TodoListModal";

export default function TodoSummary({datetime}) {
  const [isTodoSummaryOpen, setTodoSummaryOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setTodoSummaryOpen(true)} id="todoSummaryBtn">
        Open Todos
      </div>
      {isTodoSummaryOpen && (
        <TodoListModal datetime = {datetime}
          isTodoSummaryOpen={isTodoSummaryOpen}
          setTodoSummaryOpen={setTodoSummaryOpen}
        />
      )}
    </div>
  );
}
