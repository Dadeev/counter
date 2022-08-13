import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings/Settings";

function App() {
    const [maxValue, setMaxValue] = useState(7)
    const [minValue, setMinValue] = useState(5)
    const [maxSetValue, setMaxSetValue] = useState(0)
    const [minSetValue, setMinSetValue] = useState(0)

    const callback = () => {
        if (minValue >= 0 && maxValue >= 0 && maxValue !== minValue) {
            setMaxSetValue(maxValue)
            setMinSetValue(minValue)
        }
    }

    return (
        <div className={'container'}>
            <Counter maxValue={maxSetValue} minValue={minSetValue}/>
            <Settings maxValue={maxValue} setMaxValue={setMaxValue}
                      minValue={minValue} setMinValue={setMinValue}
                      cb={callback}/>
        </div>
    );
}

export default App;
