import React, { useState } from "react"
import Counter1 from "./counter1"
import Counter2 from "./counter2"
import "../index.css"
function Counter() {
    var [state, setstate] = useState(0)
    function decrease() {
        if (state <= 0) {
            // return
            alert("value not present ")
            return
        }
        
        setstate(state - 1)
    }
    function increase() {
        setstate(state + 1)
    }

    function reset() {
        setstate(state = 0)
      
    }


    return (
        <>
        <h1 className="text-center pt-5">Counter Up...</h1>
        <div id="div1" className="m-auto">

            <div id="div2">
                <div className="text-light  rounded-circle d-flex justify-content-center align-items-center"> <h1>{state}</h1></div>
                <div className=" text-light rounded-circle d-flex justify-content-center align-items-center"><Counter1 multi={state}></Counter1></div>
                <div className=" text-light rounded-circle d-flex justify-content-center align-items-center"><Counter2 multi={state}></Counter2></div>

            </div>
            <div className="w-50 m-auto h-25   d-flex justify-content-evenly align-items-center ">
                <button onClick={decrease} className="rounded-4 w-25 h-50">-</button>
                <button onClick={reset} className="rounded-4 w-25 h-50">Reset</button>
                <button onClick={increase} className="rounded-4 w-25 h-50">+</button>

            </div>
        </div>
        </>
    )
}

export default Counter