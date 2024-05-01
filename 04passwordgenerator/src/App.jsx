import { useState,useEffect, useCallback, useRef } from 'react'

function App() {
  const [password,setPassword] = useState("");
  const [length,setLength] = useState(8);
  const [chars,setChars] = useState(false);
  const [nums,setNums] = useState(false);
  const inputRef = useRef(null);
  const [dynamicClass,setdynamicClass] = useState('rounded-md flex overflow-hidden');

  const copyPass = useCallback(()=>{
    inputRef.current.select()
    setdynamicClass('rounded-md flex overflow-hidden ring-2 ring-orange-600')
    window.navigator.clipboard.writeText(password)
  },[password,setdynamicClass])

  const changePass = useCallback(()=>{
        setdynamicClass('rounded-md flex overflow-hidden')
        let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        let temp = '';
        if (nums){
          charset += '0123456789'
        }
        if (chars){
          charset += '!@#$%^&*()_+{}[]|\\;:\'"<>?,./';
        }
        for (let index = 0; index < length; index++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          temp += charset.charAt(randomIndex);
        }
      setPassword(temp)
    },[length,setPassword,chars,nums,setdynamicClass])

  
  useEffect(()=>{
    changePass();
  },[changePass])

  return (
    <>
      <div className='flex justify-center py-10'>
        <div className=' bg-gray-700 p-4 rounded-lg overflow-hidden text-orange-600'>
          <div className='text-3xl text-center my-4 text-white'><span>Password Generator</span></div>
          <div className={dynamicClass}>
          <input type="text" ref={inputRef}  value={password}  className='block w-full focus:outline-none pl-7 pr-20' readOnly />
          <button className='bg-blue-500 py-3 px-5 text-white' onClick={copyPass} type="button">Copy</button>
          </div>
          <div className="m-2 flex justify-around">
            <input type="range" defaultValue={8}  min={8} max={20} onChange={(e)=>setLength(e.target.value)} name='length'/>
            <label htmlFor="length"> Length ({length})</label>
            <input type="checkbox" defaultChecked={false} onChange={()=>setNums((prev) => !prev)} name='numbers' />
            <label htmlFor="numbers"> Numbers</label>
            <input type="checkbox" defaultChecked={false} onChange={()=>setChars((prev) => !prev)} name='characters' />
            <label htmlFor="characters"> Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
