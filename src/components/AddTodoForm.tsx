import { useState } from "react";

interface AddTodoFormProps {
    onSubmit: (title: string) => void;
} 


export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
    const [input, setInput] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!input.trim()) return;

        onSubmit(input);
        setInput("");
    }

    return (
        <form className="flex gap-2" onSubmit={handleSubmit}>
            <input type="text" 
                value={input}
                placeholder="Add a new todo" className="border border-gray-300 rounded px-2 py-1 flex-1" 
                onChange={(e) => setInput(e.target.value)} 
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-1 rounded">Add</button>
        </form>
    )
}