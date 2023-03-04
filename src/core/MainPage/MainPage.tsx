import React from 'react';
import {TaskCard} from "./TaskCard/TaskCard";
import {CodeField} from "./CodeField/CodeField";
import s from './MainPage.module.scss';

const listOfTasks = [
    {
        title: 'Task 1',
        description: 'A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).\n' +
            '\n' +
            'Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.',
        id: '1213131',
    },
    {
        title: 'Task 2',
        description: 'Given a rectangular box as string, of any size, made up of rows of #s',
        id: '235235125',
    },
    {
        title: 'Task 3',
        description: 'Mr.Right always tell the truth, Mr.Wrong always tell the lies.\n' +
            '\n' +
            'Some people are queuing to buy movie tickets, and one of them is Mr.Wrong. Please judge who is Mr.Wrong according to their conversation.\n' +
            '\n' +
            '[[Input]] A string array: conversation',
        id: '23598',
    },
    {
        title: 'Task 4',
        description: 'Well met with Fibonacci bigger brother, AKA Tribonacci.\n' +
            '\n' +
            'As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won\'t get to hear non-native Italian speakers trying to pronounce it :(\n' +
            '\n' +
            'So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence',
        id: '23000005',
    },
]
export const MainPage = () => {
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
