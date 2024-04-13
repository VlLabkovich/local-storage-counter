import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [value, setValue] = useState(0);

    const incHandler = () => {
        setValue(value + 1)
    }
    const decHandler = () => {
        setValue(value - 1)
    }

    const setToLocalStorageHandler  = () => {
        localStorage.setItem('counterValue', JSON.stringify(value)) // преобразуем число в строку
        localStorage.setItem('counterValue + 1', JSON.stringify(value + 1)) // преобразуем число в строку
    }
    const getFromToLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem('counterValue');

        if (valueAsString) {
            setValue(JSON.parse(valueAsString)) // преобразуем строку в число
        }

    }

    const clearLocalStorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }

    const removeItemFromLocalStorageHandler = () => {
        localStorage.removeItem('counterValue + 1');
    }

    return (
        <div className="App">
            <h1>LocalStorage</h1>

            <h2>Counter: {value}</h2>
            <div>
                <button onClick={incHandler}>Increment</button>
                <button onClick={decHandler}>Decrement</button>
            </div>
            <div>
                <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
                <button onClick={getFromToLocalStorageHandler}>getFromToLocalStorage</button>
                <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
                <button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorage</button>
            </div>

        </div>
    );
}

export default App;
