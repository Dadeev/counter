import React, {useState} from 'react';
import s from './Counter.module.css'
import {Button} from "../../Button";

type Counter = {
    maxValue: number
    setMaxValue: (maxValue: number) => void
    minValue: number
    setMinValue: (minValue: number) => void
}

export const Counter = (props: Counter) => {
    const [nums, setNums] = useState<number>(0)
    const incrementHandler = () => {
        if (nums !== props.maxValue) {
            setNums(nums + 1)
        }
    }
    const resetHandler = () => {
        setNums(0)

    }

    return (
        <div className={s.main}>
            <span className={s.nums}>{nums === props.maxValue ?
                <span className={s.counter}>
                    {nums}
                </span>
                : nums}
            </span>
            <div className={s.buttons}>
                <Button name={'inc'} callBack={incrementHandler} nums={nums} className={s.btns} maxValue={props.maxValue}/>
                <Button name={'reset'} callBack={resetHandler} nums={nums} className={s.btns}/>
            </div>
        </div>
    );
};