import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../../services/task.service';
import { ITask } from '../../../../models/task';
import { MatSelectionList } from '@angular/material/list';
import {MatPaginator} from '@angular/material/paginator';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
  constructor(public dialog: MatDialog, private taskService: TaskService) {}
  srcData = this.taskService.dataSource.data;
  dataSource = this.taskService.dataSource

  @ViewChild('editor') seList: MatSelectionList;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openNewElem() {
    const dialogRef = this.dialog.open(NewElemComponent);
    dialogRef
      .afterClosed()
      .subscribe(() => (this.srcData = this.taskService.dataSource.data));
  }

  dublicateSelected() {
    let selectedOptions: ITask[] = this.seList.selectedOptions.selected.map(
      (s) => s.value
    );

    selectedOptions.map((e) =>
      this.taskService.create({
        id: Math.random(),
        title: e.title,
        text: e.text,
        created: e.created,
        deadline: e.deadline,
      })
    );
  }

  deleteSelected() {
    let selectedOptions: ITask[] = this.seList.selectedOptions.selected.map(
      (s) => s.value
    );
    let newArr = this.srcData.filter((el) => !selectedOptions.includes(el));

    this.taskService.dataSource.data = newArr;
    this.srcData = this.taskService.dataSource.data;
  }
}

@Component({
  selector: 'new-elem',
  templateUrl: './new-elem/new-elem.component.html',
  styleUrls: ['./new-elem/new-elem.component.css'],
})
export class NewElemComponent {
  constructor(private taskService: TaskService) {}

  minDate: Date = new Date()

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', [
      Validators.minLength(5),
      Validators.maxLength(200),
      Validators.required,
    ]),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
  });

  get title() {
    return this.form.controls.title as FormControl;
  }

  get description() {
    return this.form.controls.description as FormControl;
  }

  get date() {
    return this.form.controls.date as FormControl;
  }

  get time() {
    return this.form.controls.time as FormControl;
  }

  myDateFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  submit() {
    let deadlineTime: Date = new Date(
      new Date(this.date.value).setHours(
        this.time.value.split(':')[0],
        this.time.value.split(':')[1]
      )
    );

    if (deadlineTime < this.minDate) {
      deadlineTime = new Date(this.minDate.setDate(this.minDate.getDate()+1));
    }
    this.taskService.create({
      id: Math.random(),
      title: this.title.value,
      text: this.description.value,
      created: new Date(),
      deadline: deadlineTime,
    });
  }
}
