import React from 'react';

type ButtonType = {
    name: string
    maxValue?: number
    callBack: () => void
    nums?: number
    className?: string
}

export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button className={props.className}
                onClick={onClickHandler}
                disabled={props.name === 'inc' ? props.nums === props.maxValue : props.nums === 0}>
            {props.name}</button>
    );
};
