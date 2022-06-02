
import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('')
  const [todo, setTodo] = useState([])
  function addTodo() {
    setTodo([...todo, text])
    setText('')
  }

  return (
    <div>
      
      <input type={text}
        value={text}
        placeholder='добавить тодо'
        onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>+</button>
      <ol>
        {todo.map(tem=>(
          <li>{tem}</li>
        ))}
      </ol>




    </div>



  );
}

export default App;
