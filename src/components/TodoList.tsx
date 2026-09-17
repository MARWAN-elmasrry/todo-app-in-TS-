import TodoItem from "./TodoItem";
import type { Todo } from "../types/todo";

interface TodoListProps {
    todos: Todo[];
    oncomplete: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoList({
    todos,
    oncomplete,
    onDelete,
}: TodoListProps) {
    const todoSorted = [...todos].sort((a, b) => {
        if (a.completed && !b.completed) return 1;
        if (!a.completed && b.completed) return -1;
        return 0;
    });

    return (
        <>
            <div className="space-y-4 m-3">
                {todoSorted.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDelete={onDelete}
                        oncomplete={oncomplete}
                    />
                ))}
            </div>
            {todos.length === 0 && (
                <p className="text-center text-gray-400">No todos yet. Add one!</p>
            )}
        </>
    );
}