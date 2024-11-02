import { useState } from "react";

export default function TodoSummary() {
  const [isTodoSummaryOpen, setTodoSummaryOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setTodoSummaryOpen(true)} id="todoSummaryBtn">
        Todo Summary
      </div>
      {isTodoSummaryOpen && (
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
            <p>Todo Summary</p>
          </div>
        </div>
      )}
    </div>
  );
}
