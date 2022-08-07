import React from 'react';
import s from "./Settings.module.css";
import {Button} from "../../Button";
import {Input} from "../Input";
import {Counter} from "../Counter/Counter";

export const Settings = () => {
    const setCallBackHandler = () => {
        console.log('hey')
    }
    const onMaxHandler = (value: string) => {
        console.log(value)
    }

    const onMinHandler = (value: string) => {
        console.log(value)
    }
    return (
        <div className={s.main}>
            <Input className={s.input} name={'max value:'} callBack={onMaxHandler}/>
            <Input className={s.input} name={'min value:'} callBack={onMaxHandler}/>
            <Button name={'set'} callBack={setCallBackHandler} className={s.btnSet}/>
        </div>
    );
};
