import {  useCallback, useEffect, useState } from 'react'

function App() {
const [length, setLength] = useState(8);
const [numberAllow, setNumberAllow] = useState(false);
const [charAllow, setCharAllow] = useState(false);

const [password, setPassword] = useState("");
const passGenerator = useCallback(() => {
  let pass = '';
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
  
  if(numberAllow) str += "0123456789";
  
  if(charAllow) str += "~!@#$%^&*";
  for (let i = 1; i <= length; i++ ) {
      let char = Math.floor(Math.random()*str.length);

      pass += str.charAt(char)
     
  }
   setPassword(pass)
  

}, [length, numberAllow, charAllow,   setPassword])


useEffect(() => {
    passGenerator()
} , [length, numberAllow, charAllow, passGenerator])


const copyPass = () => {
  window.navigator.clipboard.writeText(password)
};

  return (
    <div className=' flex justify-center items-center p-8 w-auto h-screen '>
         <div className='bg-zinc-900 p-6 rounded-2xl items-center'>
          <h1 className='text-4xl text-white uppercase m-9 '>Password Generator</h1>
          <div className='m-9 flex gap-4'>
             <input type='text'
             value={password}
             className='w-full py-1 px-3 text-black rounded-full '
               placeholder='password'
               readOnly
                  />
             <button onClick={copyPass} className='rounded-full  bg-white p-2 font-bold'>Copy</button>
          </div>
          <div className='p-8 flex items-center gap-8'>

            <div className=' items-center flex gap-2 '>
              <input type='range' min={6} max={32}  
              value={length}
              onChange={(e)=> {setLength(e.target.value)}}
              className='cursor-pointer'/>
              <label className='text-white text-xl font-semibold'>Lenth: {length}</label>
            </div>


            <div className='flex gap-2 items-center'>
              <input type='checkbox'   
               defaultChecked={numberAllow}
               id='NumberInput'
               onChange={() => {
                setNumberAllow((prev) => !prev);
               }}
              className='cursor-pointer'/>
               <label htmlFor='NumberInput' className='text-white text-xl font-semibold'> Number</label>
            </div>


            <div className='flex items-center gap-2'>
              <input type='checkbox'   
              defaultChecked={charAllow}
              id='CharInput'
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
               
              className='cursor-pointer'/>
               <label htmlFor='CharInput' className='text-white text-xl font-semibold'>Character</label>
            </div>
          </div>
         </div>
    </div>
  )
}

export default App
