import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../../services/task.service';
import { ITask } from '../../../../models/task';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
  constructor(public dialog: MatDialog, private taskService: TaskService) {}
  openNewElem() {
    this.dialog.open(NewElemComponent);
  }
}

@Component({
  selector: 'new-elem',
  templateUrl: './new-elem/new-elem.component.html',
  styleUrls: ['./new-elem/new-elem.component.css'],
})
export class NewElemComponent {
  constructor(private taskService: TaskService) {}

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

  submit() {
    let deadlineTime: Date = new Date(
      new Date(this.date.value).setHours(
        this.time.value.split(':')[0],
        this.time.value.split(':')[1]
      )
    );
    this.taskService.create({
      title: this.title.value,
      text: this.description.value,
      created: new Date(),
      deadline: deadlineTime,
    });
  }
}

@Component({
  selector: 'app-actions',
  templateUrl: './actions/actions.component.html',
  styleUrls: ['./actions/actions.component.css']
})
export class ActionsComponent {

}
