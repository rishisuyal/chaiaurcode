import { useState } from 'react';
import image from './assets/money.jpg';
import { InputBox } from './components'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen flex justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: `url(${image})`}}>
        <div className='flex backdrop-blur-sm border-2 border-white rounded-md'>
          <form >
            <InputBox/>
            <div className='relative'>swap</div>
            <InputBox/>
            <div className='mx-3 my-5 p-5 rounded-md bg-blue-600 text-white'><button type='submit' >USD TO INR</button></div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
