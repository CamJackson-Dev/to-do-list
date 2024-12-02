interface TodoFormProps {
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

function TodoForm({ newTodo, setNewTodo, handleAddTodo }: TodoFormProps) {
  return (
    <form
      onSubmit={handleAddTodo}
      className="flex justify-center mb-6 w-full max-w-md"
    >
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
        className="w-full p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-3 rounded-r-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
