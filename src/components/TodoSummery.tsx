import type { Todo } from "../types/todo";

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllTodos: () => void;
}

export default function TodoSummary({ todos, deleteAllTodos }: TodoSummaryProps) {
    const completedTodos = todos.filter((todo) => todo.completed).length;
    return (
        <div className="flex items-center justify-between max-w-md mx-auto mt-4 p-4 bg-gray-100 rounded-md">
            <span>
                {completedTodos} of {todos.length} completed
            </span>
            {
                completedTodos > 0 && (
                    <button
                        onClick={deleteAllTodos}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                        Delete All
                    </button>
                )
            }
        </div>
    );
}