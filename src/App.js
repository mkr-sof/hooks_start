import React, {useEffect, useState} from 'react'
import TodoList from './components/TodoList'

export default function App () {

    const [todos, setTodos] = useState([]);
    const [todoTitle, setTodoTitle] = useState('');


    const handleClick = () => console.log('click');

    useEffect(() => {
        const raw = localStorage.getItem('todos') || '[]'
        setTodos(JSON.parse(raw))
    }, []);

    // useEffect(() => {
    //     console.log('Loading todos from localStorage');
    //     const raw = localStorage.getItem('todos');
    //     const parsedTodos = JSON.parse(raw);
    //     console.log('Loaded todos:', parsedTodos);
    //     // setTodos(parsedTodos);
    //     return parsedTodos || ''
    // }, []);

    useEffect(() => {
        console.log('Saving todos to localStorage');
        document.addEventListener('click', handleClick)
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);


    const addTodo = event => {
        if(event.key === 'Enter'){
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    title: todoTitle,
                    completed: false,
                }
            ])
            setTodoTitle('')
            console.log('New todos state:', todos);
        }
    }

    return (
        <div className="container">
          <h1>Todo app</h1>

          <div className="input-field">
            <input
                type="text"
                value={todoTitle}
                onChange={event => setTodoTitle(event.target.value)}
                onKeyPress={addTodo}
            />
            <label>Todo name</label>
          </div>

          <TodoList todos={todos} />

            {/*<button onClick={() => localStorage.setItem('todos', JSON.stringify(todos))}>*/}
            {/*    Save to LocalStorage*/}
            {/*</button>*/}
        </div>
    );
  }


