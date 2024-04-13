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

    return (
        <div className="App">
            <h1>LocalStorage</h1>
            <h2>{value}</h2>
            <button onClick={incHandler}>Increment</button>
            <button onClick={dicHandler}>Dicrement</button>
        </div>
    );
}

export default App;
