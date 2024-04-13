import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

    const [value, setValue] = useState(0);

    const incHandler = () => {
        setValue(value + 1)
    }

    const dicHandler = () => {
        setValue(value - 1)
    }

    const setToLocalStorage = () => {
        localStorage.setItem('counterValue', JSON.stringify(value)) // преобразуем число в строку
    }

    const getFromToLocalStorage = () => {
        let valueAsString = localStorage.getItem('counterValue');

        if (valueAsString) {
            setValue(JSON.parse(valueAsString)) // преобразуем строку в число
        }

    }
    const clearLocalStorage = () => {
        localStorage.clear()
        setValue(0)
    }


    return (
        <div className="App">
            <h1>LocalStorage</h1>

            <h2>Counter: {value}</h2>
            <div>
                <button onClick={incHandler}>Increment</button>
                <button onClick={dicHandler}>Dicrement</button>
            </div>
            <div>
                <button onClick={setToLocalStorage}>setToLocalStorage</button>
                <button onClick={getFromToLocalStorage}>getFromToLocalStorage</button>
                <button onClick={clearLocalStorage}>clearLocalStorage</button>
            </div>

        </div>
    );
}

export default App;
