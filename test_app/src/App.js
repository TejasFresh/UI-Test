import './App.css';
import { useState } from 'react'

function App() {

  const [text, setText] = useState("")
  return (
    <div className='flex h-screen'>
      <div className='flex flex-col w-1/5 h-screen bg-slate-100'>
        <div className=' h-1/3 m-2'>
          <ul className='flex flex-col items-center justify-center pt-2'>
            <li className='w-1/2 min-w-max'>
              <button className='bg-yellow-400 m-2 rounded-xl min-w-full' onClick={() => setText("Home")}>Home</button>
            </li>
            <li className='w-1/2 min-w-max'>
              <button className='bg-yellow-400 m-2 rounded-xl  min-w-full' onClick={() => setText("New Page")}>New Page</button>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col w-4/5 bg-yellow-400 items-center align-middle justify-center'>
        <p className='flex m-2 rounded-xl font-extrabold text-4xl text-slate-100'>{text}</p>
      </div>
    </div>
  );
}

export default App;
