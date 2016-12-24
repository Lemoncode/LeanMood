import * as React from 'react';

interface Props {
    current: number;
    max: number;
    min: number;
}

export const ProgressBarComponent = (props: Props) => {
    return (
        <progress min={props.min} max={props.max} value={props.current} />
    );
}