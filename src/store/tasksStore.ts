import { create } from 'zustand';

import { TTask } from '../types/TaskTypes';

interface ITasksStore {
  tasks: TTask[];
  currentTask: number;
  setCurrentTask: (id: number) => void;
  getCurrentTask: () => TTask | undefined;
}

export const useTasksStore = create<ITasksStore>((set, get) => ({
  tasks: [
    {
      title: 'Задача 1',
      description: 'Даны два целых числа A и B (при этом A ≤ B). Выведите все числа от A до B включительно.',
      id: 1213131,
    },
    {
      title: 'Задача 2',
      description:
        'Дано несколько чисел. Вычислите их сумму. Сначала вводите количество чисел N, затем вводится ровно N целых чисел. Какое наименьшее число переменных нужно для решения этой задачи?',
      id: 235235125,
    },
    {
      title: 'Задача 3',
      description:
        'Дано N чисел: сначала вводится число N, затем вводится ровно N целых чисел. Подсчитайте количество нулей среди введенных чисел и выведите это количество. Вам нужно подсчитать количество чисел, равных нулю, а не количество цифр.',
      id: 23598,
    },
    {
      title: 'Задача 4',
      description: 'Дано целое число, не меньшее 2. Выведите его наименьший натуральный делитель, отличный от 1.',
      id: 23000005,
    },
    {
      title: 'Задача 5',
      description:
        'Последовательность состоит из натуральных чисел и завершается числом 0. Определите значение наибольшего элемента последовательности.',
      id: 23000045,
    },
  ],
  currentTask: 0,
  setCurrentTask: (id) => {
    set(() => ({ currentTask: id }));
  },
  getCurrentTask: () => get().tasks.find((item) => item.id === get().currentTask),
}));
