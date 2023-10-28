import { useState, useEffect, useCallback, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharacterAllowed] = useState(false)

  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {

    let pswrd = ""
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (charAllowed) {
      chars += "!@#$%^&*()_-"
    }
    if (numberAllowed) {
      chars += "0123456789"
    }

    for (let i = 0; i < length; i++) {
      pswrd += chars[Math.round(Math.random() * chars.length + 1)]
    }

    setPassword(pswrd)

  }, [numberAllowed, charAllowed, length, setPassword])

  const copyToClipboard = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)

  },[password])


  useEffect(() => {
    passwordGenerator()
  },[length , charAllowed , numberAllowed , passwordGenerator])

  return (
    <>

      <div className='h-screen w-screen bg-slate-800 text-cyan-300 flex items-center justify-center font-LondonBetween'>

        <div className='bg-slate-900 text-center rounded-lg p-10 flex flex-col gap-10'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl'>Password Generator</h1>
            <div className="border-b-4 rounded-lg border-yellow-400"></div>
          </div>
          
          <div >

            <input 
            type="text"
            readOnly
            value={password}
            ref={passRef}
            className='w-full mb-4 outline-none rounded-lg p-1 text-lg text-black'
            />
            <button 
            className='bg-sky-500 text-black p-2 rounded-lg w-full text-lg hover:bg-cyan-300 transition-all duration-500 active:scale-90' 
            onClick={copyToClipboard}
            >Copy</button>
          

          </div> 
          <div className='flex gap-10'>
            <div className='flex items-center gap-1'>
              <input 
              type="range" 
              name="" id="" 
              className='cursor-pointer'
              value={length}
              min={6}
              max={30}
              onChange={(e)=> setLength(e.target.value)}
              />

              <label className='cursor-pointer w-24'>Length: {length}</label>
            </div>
            <div className='flex items-center gap-1'>
              <input 
              type="checkbox" 
              name="" id="num-allow" 
              className='cursor-pointer'
              onChange={()=>{setNumberAllowed((prev)=> !prev)}}
              />
              <label htmlFor='num-allow' className='cursor-pointer hover:text-slate-400'>Numbers</label>
            </div>

            <div className='flex items-center gap-1'>
              <input 
              type="checkbox" 
              name="" id="char-allow" 
              className='cursor-pointer'
              onChange={()=>{setCharacterAllowed((prev)=> !prev)}}
              />
              <label htmlFor='char-allow' className='cursor-pointer hover:text-slate-400'>Characters</label>
            </div>

          </div>
        </div>

      </div>


    </>
  )
}

export default App
