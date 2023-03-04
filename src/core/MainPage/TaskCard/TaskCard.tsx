import React from 'react';
import s from './TaskCard.module.scss';

export const TaskCard: React.FC<Props> = ({ title, description, id}) => {
    return (
        <div className={s.wrapper}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
}
export type Props = {
    title: string;
    description: string;
    id: string;
}