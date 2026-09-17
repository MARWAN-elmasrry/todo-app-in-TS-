import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummery";
import useTodos from "./hooks/useTodes";

function App() {

  const{
    todos,
    setTodos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllTodos
  } = useTodos();

  return (
    <main className="py-10 h-screen">
      <h1 className="font-bold text-3xl text-center" >Your Todo app</h1>
      <div className="max-w-md mx-auto" >
        <AddTodoForm onSubmit={addTodo} />
        <TodoList 
          todos={todos}
          onDelete={deleteTodo}
          oncomplete={setTodoCompleted}
        />
      </div>
      <TodoSummary todos={todos} deleteAllTodos={deleteAllTodos} />
    </main>
  )
}

export default App