import { useState , useEffect , useCallback , useRef } from 'react'

function App() {

  const [length , setLength] = useState(8)
  const [password , setPassword] = useState("")
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharacterAllowed] = useState(false)

  const passwordGenerator = useCallback(()=>{

    let pswrd = ""
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(charAllowed){ 
      chars += "!@#$%^&*()_-"
    }
    if(numberAllowed){
      chars += "0123456789"
    }

    for (let i= 0; i < length; i++) { 
      pswrd += chars[Math.round(Math.random() * length +1 )]
    }

    setPassword(pswrd)

  }, [numberAllowed , charAllowed , length , setPassword])

  return (
    <>
      
    <div className='h-screen w-screen bg-slate-800 text-white flex items-center justify-center font-LondonBetween'>

      <div className='bg-slate-900 text-center'>
          <h1 className='text-4xl'>Password Generator</h1>
          <div>

            <input type="text" />
            <button>Copy</button>
          </div>
          <div>
            <input type="range" name="" id="" />
            <label>Length: {length}</label>
            <input type="checkbox" name="" id="" />
            <label>Numbers</label>

            <input type="checkbox" name="" id="" />
            <label>Characters</label>

          </div>
      </div>

    </div>


    </>
  )
}

export default App
