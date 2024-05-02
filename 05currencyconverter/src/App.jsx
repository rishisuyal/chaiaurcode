import { useState,useCallback } from 'react';
import image from './assets/money.jpg';
import { InputBox } from './components';
import { useConverter } from './hooks';
function App() {
  const [from, setFrom] = useState('INR');
  const [to, setTo] = useState('USD');
  const [ammount, setAmmount] = useState('');
  const [resultammount, setResultAmmount] = useState('');
  const data = useConverter(from);
  const options = Object.keys(data);
  const convert = useCallback(()=>{
    setResultAmmount(Math.round(data[to]*ammount*1000)/1000)
  },[ammount,to,from,data])
  const swap = useCallback(()=>{
    setFrom(to);
    setTo(from);
    setAmmount(resultammount);
    setResultAmmount(ammount);
  },[to, from, resultammount, ammount])
  return (
    <>
      <div className='h-screen flex justify-center items-center bg-cover bg-no-repeat' style={{backgroundImage: `url(${image})`}}>
        <div className='flex backdrop-blur-sm border-2 border-white rounded-md'>
          <div className='m-4 w-full'>
            <form onSubmit={
              (e)=>{
                e.preventDefault();
                convert();
              }
            }>
              <div className='my-3'>
              <InputBox options={options} ammount={ammount} selected={from} label="From" onAmountChnage={(val)=>setAmmount(val)}
                onCurrencyChange={(val)=>setFrom(val)}
              />
              </div>
              <div className='flex justify-center'><button type='button' onClick={()=>swap()} className='absolute -translate-y-1/2 border-4 border-white p-3 text-center rounded-lg bg-blue-600 text-white'>swap</button></div>
              <div className='my-3'>
              <InputBox options={options} disabled selected={to} ammount={resultammount} onCurrencyChange={(val)=>setTo(val)} label="To"/>
              </div>
              <button className='my-3 p-5 w-full text-center rounded-md bg-blue-600 text-white' type='submit' >{from} TO {to}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
