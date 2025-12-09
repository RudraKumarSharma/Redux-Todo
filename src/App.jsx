import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 width-full">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-semibold text-slate-800 mb-1">My Tasks</h1>
          <p className="text-slate-500">Keep track of what matters</p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200/60 p-8">
          <AddTodo />
          <Todo />
        </div>
      </div>
    </div>
  )
}

export default App
