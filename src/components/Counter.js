import React, {useState} from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);
    const handleClick1 =()=>{
        setCounter(counter + 1);
        if(counter >= 10) {
            alert("You have reached the maximum count of 10!");
            return;
        }
    }

    const handleClick2 = () => {
        setCounter(counter - 1)
        if(counter <= 0) {
            alert("You have reached the minimum count of 0!");
            return;
        }
    }

return (
    <div>
    <p>Count: {counter}</p>
    <button onClick = {handleClick1}>AddMe</button>
    <button onClick = {handleClick2}>SubtractMe</button>
    </div>
);
}

export default Counter;