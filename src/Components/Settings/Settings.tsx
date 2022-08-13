import React from 'react';
import s from "./Settings.module.css";
import {Button} from "../../Button";
import {Input} from "../Input";

type SettingsType = {
    maxValue: number
    minValue: number
    setMaxValue: (maxValue: number) => void
    setMinValue: (minValue: number) => void
    cb: () => void
}

export const Settings = (props: SettingsType) => {
    const setCallBackHandler = () => {
        props.cb();
    }
    const onMaxHandler = (maxValue: string) => {
        props.setMaxValue(+maxValue)
    }

    const onMinHandler = (minValue: string) => {
        props.setMinValue(+minValue)
    }
    return (
        <div className={s.main}>
            <Input className={s.input} name={'max value:'} callBack={onMaxHandler}/>
            <Input className={s.input} name={'min value:'} callBack={onMinHandler}/>
            <Button minValue={props.minValue} maxValue={props.maxValue} name={'set'} callBack={setCallBackHandler}
                    className={s.btnSet} setMaxValue={props.setMaxValue}
                    setMinValue={props.setMinValue}/>
        </div>
    );
};
