import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void
    nums: number
    className?: string
}

export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button className={props.className}
                onClick={onClickHandler}
                disabled={props.name === 'inc' ? props.nums === 5 : props.nums === 0}>
            {props.name}</button>
    );
};
