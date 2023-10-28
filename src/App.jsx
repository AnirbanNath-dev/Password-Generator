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
      
    <div>

      

    </div>


    </>
  )
}

export default App
