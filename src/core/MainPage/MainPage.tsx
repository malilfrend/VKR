import React from 'react';
import {TaskCard} from "./TaskCard/TaskCard";
import {CodeField} from "./CodeField/CodeField";
import s from './MainPage.module.scss';
import {useTasksStore} from "../../store/tasksStore";

export const MainPage = () => {
    const listOfTasks = useTasksStore((state) => state.tasks);
    return (
        <div className={s.wrapper}>
            <div className={s.listOfTasks}>
                {listOfTasks.map((item) => {
                    return (
                        <TaskCard {...item} key={item.id} />
                    )
                })}
            </div>
            <CodeField/>
        </div>
    );
};
