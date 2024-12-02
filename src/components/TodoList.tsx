import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: { text: string; completed: boolean }[];
  handleToggleComplete: (index: number) => void;
  handleDeleteTodo: (index: number) => void;
}

function TodoList({
  todos,
  handleToggleComplete,
  handleDeleteTodo,
}: TodoListProps) {
  return (
    <ul className="w-full max-w-lg mx-auto">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          handleToggleComplete={handleToggleComplete}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
