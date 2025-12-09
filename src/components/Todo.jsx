import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodos } from '../features/todo/todoSlice';

function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
  return (
    <div>
        <div className='flex items-center justify-between mb-6'>
            <h2 className='text-lg font-medium text-slate-700'>Tasks</h2>
            <span className='text-sm text-slate-500'>
                {todos.length} {todos.length === 1 ? 'item' : 'items'}
            </span>
        </div>
        
        {todos.length === 0 ? (
            <div className='text-center py-16'>
                <div className='text-5xl mb-3 opacity-40'>✨</div>
                <p className='text-slate-400'>All clear! No tasks yet.</p>
            </div>
        ) : (
            <ul className='space-y-2'>
                {todos.map((todo) => (
                    <li 
                        key={todo.id}
                        className='group bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-2xl px-5 py-4 flex items-center justify-between transition-all duration-200'
                    >
                        <span className='text-slate-700 flex-1'>{todo.text}</span>
                        <button 
                            onClick={() => dispatch(removeTodos(todo.id))}
                            className='ml-4 text-slate-400 hover:text-red-500 hover:bg-red-50 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200'
                            title='Delete task'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default Todo