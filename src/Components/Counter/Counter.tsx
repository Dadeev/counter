import React, {useEffect, useState} from 'react';
import s from './Counter.module.css'
import {Button} from "../../Button";

type Counter = {
    maxValue: number
    minValue: number
}

export const Counter = (props: Counter) => {
    const [nums, setNums] = useState<number>(props.minValue)

    useEffect(() => {
        setNums(props.minValue)
    },[props.minValue])

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
                <Button name={'inc'} callBack={incrementHandler} nums={nums} className={s.btns}
                        maxValue={props.maxValue}/>
                <Button name={'reset'} callBack={resetHandler} nums={nums} className={s.btns}/>
            </div>
        </div>
    );
};