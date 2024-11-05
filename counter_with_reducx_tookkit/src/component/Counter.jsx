import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from '../slice/CounterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    const [qty, setQty] = useState(1)

    return (
        <div>
            <h1>Counter - {count}</h1>
            <input type='number' value={qty} onChange={(e) => setQty(Number(e.target.value))} />
            <button onClick={()=>dispatch(increment(qty))}>Increment</button>
            <button onClick={()=>dispatch(decrement(qty))}>Decrement</button>
            <button onClick={()=>dispatch(reset())}>Reset</button>
        </div>
    )
}

export default Counter
