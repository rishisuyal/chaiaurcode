import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const increase = ()=>{
    count < 20  ? setCount(count+1) : ''
  }
  const decrease = ()=>{
    count > 0 ? setCount(count-1)  : ''
  }
  return (
    <div className='container mx-auto flex items-center h-lvh justify-center'>
      <button className='mx-2 bg-black rounded-lg text-white px-4 py-2' onClick={decrease}>-</button>
      <span className='mx-2 bg-black rounded-lg text-white p-3'>Counter : {count}</span>
      <button className='mx-2 bg-black rounded-lg text-white px-4 py-2' onClick={increase}>+</button>
    </div>
  )
}

export default App
