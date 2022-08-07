import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings/Settings";

function App() {
    const [maxValue, setMaxValue] = useState(3)
    const [minValue, setMinValue] = useState(0)
    return (
        <>
            <Counter maxValue={maxValue} setMaxValue={setMaxValue}
                     minValue={minValue} setMinValue={setMinValue}/>
            <Settings/>
        </>
    );
}

export default App;
