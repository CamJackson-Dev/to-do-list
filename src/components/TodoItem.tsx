interface TodoItemProps {
  todo: { text: string; completed: boolean };
  index: number;
  handleToggleComplete: (index: number) => void;
  handleDeleteTodo: (index: number) => void;
}

function TodoItem({
  todo,
  index,
  handleToggleComplete,
  handleDeleteTodo,
}: TodoItemProps) {
  return (
    <li
      key={index}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        color: todo.completed ? "lightgray" : "black", // Light gray text when completed
        cursor: "pointer",
      }}
    >
      <span>{todo.text}</span>
      <div className="space-x-4">
        <button
          onClick={() => handleToggleComplete(index)}
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
        >
          {todo.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => handleDeleteTodo(index)}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
