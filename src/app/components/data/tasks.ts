import { ITask } from '../../../models/task';

export const defaultItems: ITask[] = [
  {
    id: 1,
    title: 'First Task Ever',
    text: "Hello Angular! It's my first task here.",
    created: new Date('03/03/2023 00:47'),
    deadline: new Date('03/10/2023 00:00'),
  },
  {
    id: 2,
    title: 'My Birthday!',
    text: 'Hey, can you buy me a cake pls?',
    created: new Date('03/03/2023 00:47'),
    deadline: new Date('05/10/2023 04:45'),
  },
  {
    id: 3,
    title: 'Do a test task',
    text: "Don't forget to complete the test task!!!",
    created: new Date('03/03/2023 00:47'),
    deadline: new Date('03/10/2023 11:00'),
  },
];
