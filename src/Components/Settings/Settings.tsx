import React from 'react';
import s from "./Settings.module.css";
import {Button} from "../../Button";
import {Input} from "../Input";

type SettingsType = {
    maxValue: number
    setMaxValue: (maxValue: number) => void
    minValue: number
    setMinValue: (minValue: number) => void
    cb: () => void
}

export const Settings = (props: SettingsType) => {
    const setCallBackHandler = () => {
        props.cb();
        console.log('hey')
    }
    const onMaxHandler = (maxValue: string) => {
        props.setMaxValue(Number(maxValue))
    }

    const onMinHandler = (minValue: string) => {
        props.setMinValue(Number(minValue))
    }
    return (
        <div className={s.main}>
            <Input className={s.input} name={'max value:'} callBack={onMaxHandler}/>
            <Input className={s.input} name={'min value:'} callBack={onMinHandler}/>
            <Button name={'set'} callBack={setCallBackHandler} className={s.btnSet}/>
        </div>
    );
};
