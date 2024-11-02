import { useRef } from "react";

export default function DraggableList({ children, list, setList }) {
  const draggedIndexRef = useRef(null);

  const dragStart = (e) => {
    draggedIndexRef.current = list.indexOf(
      list.find((elem) => elem.key === e.target.attributes["data-key"].value)
    );
    e.target.classList.add("dragging");
    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
  };

  const dragEnd = (e) => {
    e.target.classList.remove("dragging");
    e.target.style.display = "";
    draggedIndexRef.current = null;
  };

  const dragOver = (e) => {
    e.preventDefault();

    const afterIndex = getDragAfterElement(e.clientY);
    if (afterIndex !== draggedIndexRef.current && afterIndex >= 0) {
      const newTodoList = [...list];
      const element = newTodoList.splice(draggedIndexRef.current, 1)[0];
      newTodoList.splice(afterIndex, 0, element);
      setList(newTodoList);
      draggedIndexRef.current = afterIndex;
    }
  };

  const getDragAfterElement = (y) => {
    const sortableList = document.getElementById("sortable");

    const draggableElements = [
      ...sortableList.querySelectorAll("li:not(.dragging)"),
    ];

    const closest = draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY, element: null }
    );

    return closest.element
      ? draggableElements.indexOf(closest.element)
      : draggableElements.length;
  };

  return (
    <ol
      id="sortable"
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onDragOver={dragOver}
    >
      {children}
    </ol>
  );
}
