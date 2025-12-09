import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../features/todo/todoSlice';

function AddTodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if(input.trim() === '') return;
        dispatch(addTodos(input));
        setInput('');
    }
    
  return (
    <form onSubmit={addTodoHandler} className='mb-10'>
        <div className='flex gap-3'>
            <input 
                type="text" 
                placeholder='Add a new task...' 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                className='flex-1 bg-slate-50 border border-slate-200 px-5 py-3.5 rounded-2xl focus:outline-none focus:bg-white focus:border-indigo-300 focus:ring-4 focus:ring-indigo-50 transition-all duration-200 text-slate-800 placeholder-slate-400'
            />
            <button 
                type="submit" 
                className='bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-2xl font-medium shadow-sm hover:shadow transition-all duration-200 whitespace-nowrap'
            >
                Add
            </button>
        </div>
    </form>
  )
}

export default AddTodo