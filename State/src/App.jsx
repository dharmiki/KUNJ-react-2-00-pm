import { useState } from "react"

function App() {
  var [count,setcount] = useState(0)

  var increase =()=>{
    setcount(count+1)
  }

  var decrease =()=>{
     if(count<=0)
    {
      alert("value not valid")
      return
    }
    else{
    setcount(count-1)

    }
  }

  return (
    <>
   <h1>count</h1>
   <h5>{count}</h5>
   <button onClick={increase}>+</button>
   <button onClick={decrease}>-</button>
    </>
  )
}

export default App
