import { Injectable } from '@angular/core';
import { ITask } from '../../models/task';
import { MatTableDataSource } from '@angular/material/table';
import { defaultItems as defaultData } from '../components/data/tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  dataSource = new MatTableDataSource<ITask>([]);

  getAll():ITask[] {
    return (this.dataSource.data = defaultData);
  }

  create(task: ITask) {
    const newData = this.dataSource.data;
    newData.push(task)
    return this.dataSource.data = newData
  }

  constructor() {}
}
