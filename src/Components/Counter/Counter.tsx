import React, {useState} from 'react';
import s from './Counter.module.css'
import {Button} from "../../Button";

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
                <Button name={'inc'} callBack={incrementHandler} nums={nums} className={s.btns}/>
                <Button name={'reset'} callBack={resetHandler} nums={nums} className={s.btns}/>
            </div>
        </div>
    );
};