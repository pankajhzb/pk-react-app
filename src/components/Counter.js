import React, {useState} from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);
    const handleClick1 =()=>{
        setCounter(counter + 1);
    }

    const handleClick2 = () => {
        setCounter(counter - 1)
    }

return (
    <div>
    <p>Count: {counter}</p>
    <button onClick = {handleClick1}>ClickMe</button>
    <button onClick = {handleClick2}>ClickMe</button>
    </div>
);
}

export default Counter;