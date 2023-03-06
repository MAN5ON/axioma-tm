import { ITask } from '../../../models/task';

export const defaultItems: ITask[] = [
  {
    id: 1,
    title: 'First Task Ever',
    text: "Hello Angular! It's my first task here.",
    created: new Date('03/03/2023 00:47'),
    deadline: new Date('03/6/2023 23:59'),
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
    text: "Don't forget to complete the test task!",
    created: new Date('03/03/2023 00:47'),
    deadline: new Date('03/7/2023 11:00'),
  },
  {
    id: 4,
    title: '8 March soon...',
    text: "Buy a gift for your girlfriend for international women's day!",
    created: new Date('03/03/2023 00:47'),
    deadline: new Date('03/08/2023 12:00'),
  },
  {
    id: 5,
    title: 'lorem ipsum',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, eligendi minima iusto necessitatibus quis dolore ratione tempore a. Quis odit vero accusantium? Minus nobis pariatur exercitationem ut, debitis nam voluptates.',
    created: new Date('03/03/2023 00:47'),
    deadline: new Date('03/09/2023 11:00'),
  },
];
