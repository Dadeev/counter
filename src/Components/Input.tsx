import React, {ChangeEvent} from 'react';

type InputType = {
    callBack: (maxValue: string) => void
    name: string
    className: string
}

export const Input = (props: InputType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.value)
    }
    return (
        <>
            <span>{props.name}</span>
            <input onChange={onChangeHandler}
                   className={props.className}
                   type={"number"}/>
        </>
    );
};
