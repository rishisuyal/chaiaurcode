import { useState } from 'react'


function App() {
  const [color, setColor] = useState('black')
  const arr = ['blue','olive','red','green','yellow']
  return (
    <>
      <div className='min-h-screen flex justify-center items-end my-auto' style={{backgroundColor:color}}>
        <div className='h-auto border border-sky-500 rounded-lg bg-white my-6'>
          {
            arr.map((val,index)=><button key={index} onClick={()=>setColor(val)} className='p-4 m-2 rounded-full text-white' style={{backgroundColor:val}}>{val}</button>)
          }
        </div>
      </div>
    </>
  )
}

export default App
