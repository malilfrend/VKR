import React from 'react';
import s from './TaskCard.module.scss';
import {TTask} from './../../../types/TaskTypes';

export const TaskCard: React.FC<TTask> = ({ title, description, id}) => {
    return (
        <div className={s.wrapper}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}