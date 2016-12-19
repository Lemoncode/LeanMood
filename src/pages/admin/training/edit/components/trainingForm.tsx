import * as React from "react";
import { Input } from '../../../../../common/components/input';
import { TrainingEntity } from '../../../../../model/training'

interface Props {
    training: TrainingEntity;
}

export const TrainingForm = (props: Props) => {
    return (
        <form className="col-xs-10 col-xs-offset-1">
            <h2 id="formTitle">Training form</h2>
            <span id="name">Name: {props.training.name}</span>
            <input type="checkbox" checked={props.training.isActive} />
            <span id="dates">Start: {props.training.start.toDateString()} - End: {props.training.end.toDateString()}</span> 
        </form>
    )
}
