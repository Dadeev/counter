import React, {useState} from 'react';
import s from './Counter.module.css'

export const Counter = () => {
    const [nums, setNums] = useState<number>(0)
    const incrementHandler = () => {
        if (nums !== 5) {
            setNums(nums + 1)
        }
    }
    const resetHandler = () => {
        setNums(0)

    }

    return (
        <div className={s.main}>
            <span className={s.nums}>{nums === 5 ? <span className={s.counter}>{nums}</span> : nums}</span>
           <div className={s.buttons}>
               <button className={s.inc} onClick={incrementHandler} disabled={nums === 5 ? true : false}>inc</button>
               <button className={s.reset}  onClick={resetHandler} disabled={nums === 0 ? true : false}>reset</button>
           </div>
        </div>
    );
};