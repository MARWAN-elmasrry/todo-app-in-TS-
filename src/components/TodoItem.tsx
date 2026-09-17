import type { Todo } from "../types/todo"
import { Trash2 } from "lucide-react";

interface TodoItemProps {
    todo: Todo;
    oncomplete: (id: number , completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoItem({ todo, oncomplete, onDelete }: TodoItemProps) {
    return (
        <div className="flex items-center " >
          <label className="p-1 border rounded-md grow hover:shadow-md hover:bg-slate-50" >
                <input
                    className="scale-150 m-2"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => oncomplete(todo.id, e.target.checked)}
                />
                <span className={todo.completed ? "line-through text-gray-400" : ""}  > {todo.title}</span>
            </label>
            <button onClick={() => onDelete(todo.id)} className="p-1 rounded-md hover:bg-slate-50" >
                <Trash2 className="text-red-500 hover:text-red-700" onClick={() => onDelete(todo.id)} />
            </button>
        </div>
    )
} 