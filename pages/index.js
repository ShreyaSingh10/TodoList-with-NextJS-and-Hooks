import { useState } from 'react';

export default () => {
const [todos, setTodos] = useState(["todo 1", "todo 2"]);
const [todo, setTodo] = useState('');
const removeTodo = todo => {
  setTodos(todos.filter(t => t !== todo));
};

const handleClick =(e) => {
  e.preventDefault(); //prevent form refresh
  setTodos(todos => [...todos, todo] ); //updating the state
  setTodo(todo => todo=""); //updating the state
}

  return (
    <div> 
      <form onSubmit={handleClick}>
        <input value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button>Add</button>
      </form>
      {todos.map(todo => (
        <>
        <h1>{todo}</h1>
        <button onClick={() => removeTodo(todo)}>remove</button>
        </>
      ))}
    </div>
  )
};