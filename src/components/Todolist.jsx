import React,{ useState } from 'react';
import './style.css';

const Todolist = () => {

  const [value, setValue] = useState('');
  const [editValue, setEditValue] = useState('');
  const [todo, setTodo] = useState([]);
  const [editing, setEditing] = useState(null);


  const addTask = (e)=>{
    e.preventDefault();
    setValue('')
    const newTodo = {
      id: todo.length,
      value: value,
    }
    setTodo( [...todo, newTodo ] );
  };

  const Editing = (id)=>{
    setEditing(id);
    setEditValue(value)
  };

  const Delete = (id)=>{
    const deleted = todo.filter( (el)=> el.id !== id );
    setTodo( deleted );
  };


  return (
    
    <>
    
      <div className='body'>
        <form onSubmit={ addTask }>
          <input className='add_task_input' type='text' placeholder='enter task' value={ value } onChange={ (e)=> setValue( e.target.value ) } />
          <button className='add_btn' type='submit'>Add Task</button>
        </form>
        <div className='result_body'>
          {
            todo.map((todos)=>(
              <div key={ todos.id } className='todo'>
                {
                  editing === todos.id ? 
                  (
                      <input className='edit_input' value={ editValue } onChange={ (e)=> setEditValue( e.target.value ) } />
                  ) : 
                  ( 
                    <div className='todo_task'>{ todos.value }</div>
                  )
                }
                <div className='todo_btns'>
                  <button className='edit_btn' onClick={ ()=> Editing(todos.id) } >Edit</button>
                  <button className='delete_btn' onClick={ ()=> Delete(todos.id) } >Delete</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    
    </>

  )
}

export default Todolist
