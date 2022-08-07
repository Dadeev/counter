import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings/Settings";

function App() {
    const [maxValue, setMaxValue] = useState(7)
    const [maxSetValue, setMaxSetValue] = useState(0)
    const [minSetValue, setMinSetValue] = useState(0)
    const [minValue, setMinValue] = useState(5)

    const callback = () => {
        setMaxSetValue(maxValue)
        setMinSetValue(minValue)
    }

    return (
        <div className={'container'}>
            <Counter maxValue={maxSetValue} minValue={minSetValue}/>
            <Settings maxValue={maxValue} setMaxValue={setMaxValue} cb={callback}
                      minValue={minValue} setMinValue={setMinValue}/>
        </div>
    );
}

export default App;
