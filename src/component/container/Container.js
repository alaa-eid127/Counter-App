import React, { useState } from 'react'
import './container.css'
const Container = () => {
    const [count, setCount] = useState(0);

    const handleIncresment = () => {
        setCount(count + 1);
    }
    const handleDecresment = () => {
        if (count > 0)
            setCount(count - 1);
    }
    const handleIncresmentByFive = () => {
        setCount(count + 5)
    }
    const handleDecresmentByFive = () => {
        if (count > 0) {
            setCount(count - 5)
        }

    }
    const buttonReset = () => {
        setCount(0)
    }
    return (

        <div className='counter'>
            <h1 className='counter-title'>Counter App</h1>
            <h2 className='counter-value'>{count} </h2>
            <div className='counter-btns'>
                <button onClick={handleIncresment}>+</button>
                <button onClick={handleDecresment}>-</button>
                <button onClick={handleIncresmentByFive}>+5</button>
                <button onClick={handleDecresmentByFive}>-5</button>
            </div>
            <div>
                <button className='reset-btn' onClick={buttonReset}>Reset</button>
            </div>
        </div>
    )
}

export default Container