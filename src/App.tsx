import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

    const [value, setValue] = useState(0);

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterValue');
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString);// преобразуем строку в число
            setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value)) // преобразуем число в строку

    }, [value])

    const incHandler = () => {
        setValue(value + 1)
    }
    const decHandler = () => {
        setValue(value - 1)
    }

    return (
        <div className="App">
            <h1>LocalStorage</h1>

            <h2>Counter: {value}</h2>

            <button onClick={incHandler}>Increment</button>
            <button onClick={decHandler}>Decrement</button>

        </div>
    );
}

export default App;
