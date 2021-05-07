import Container from "../Components/Container.js";

export default function Main() {
  return (
    <div>
      <Container/>
    </div>
  )
}

//or export default Container;

// import Container from "../Components/Container.js";
// import Details from "../Components/Details.js";

// function Main() {
//   return (
//     <div>
//       <Container/>
//       <Details/>
//     </div>
//   )
// }
 
// export default Main;

// import { useState } from 'react';

// export default function Container(){
//   const [todos, setTodos] = useState(["todo 1", "todo 2"]);
//   const [todo, setTodo] = useState('');
//   const removeTodo = todo => {
//     setTodos(todos.filter(t => t !== todo));
//   };

//   console.log("TODOS", todos);

//   const handleClick =(e) => {
//     e.preventDefault(); //prevent form refresh
//     setTodos(todos => [...todos, todo] ); //updating the state
//     setTodo(todo => todo=""); //updating the state
//   }

//   return (
//     <div> 
//       <form onSubmit={handleClick}>
//         <input value={todo} onChange={(e) => setTodo(e.target.value)}/>
//         <button>Add</button>  
//         {/* <button onClick={() => setTodos([...todos, todo])}> Add </button>*/}
//       </form>
//       {todos.map(todo => (
//         <div>
//         <h1>{todo}</h1>
//         <button onClick={() => removeTodo(todo)}>remove</button> 
//         </div>
//       ))}
//     </div>
//   )
// };