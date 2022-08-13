import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void
    minValue?: number
    maxValue?: number
    nums?: number
    className?: string
    setMaxValue?: (maxValue: number) => void
    setMinValue?: (minValue: number) => void
}

export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        if (props.name === 'set') {
            localStorage.setItem('counterMinValue', JSON.stringify(props.minValue))
            localStorage.setItem('counterMaxValue', JSON.stringify(props.maxValue))
            let minValueAsStr = localStorage.getItem('counterMinValue')
            let maxValueAsStr = localStorage.getItem('counterMaxValue')
            if (minValueAsStr && maxValueAsStr) {
                let newMinValue = JSON.parse(minValueAsStr)
                let newMaxValue = JSON.parse(maxValueAsStr)
                props.setMinValue!(newMinValue)
                props.setMaxValue!(newMaxValue)
            }
            props.callBack()
        } else {
            props.callBack()
        }
    }

    return (
        <button className={props.className}
                onClick={onClickHandler}
                disabled={props.name === 'inc' ? props.nums === props.maxValue : props.nums === 0}>
            {props.name}</button>
    );
};
