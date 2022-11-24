import { useState } from "react"

export const Counter  = () => {
    const [ count, setCount] = useState(0);
    const [amount, setAmount] = useState(0);
    return (
        <div>
              <h1> {count} </h1>  
              <button onClick={() => setCount(count+ 1)} > Increment </button>
              <input type = "text" value = {amount} onChange = { (e) => setAmount(+e?.target?.value) }/>
              {/* onClick = {() => setCount(amount)} */}
              <button type = 'button' onClick = {() => setCount(amount)} >Set</button>
        </div>
    );

}