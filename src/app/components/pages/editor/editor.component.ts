import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
  constructor(public dialog: MatDialog) {}

  openNewElem() {
    const dialogRef = this.dialog.open(NewElemComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}

@Component({
  selector: 'new-elem',
  templateUrl: './new-elem/new-elem.component.html',
  styleUrls: ['./new-elem/new-elem.component.css'],
})
export class NewElemComponent {
  ngOnInit() {
    let currDate = new Date();
  }
  errorValidator = '';
  title = new FormControl('', [Validators.required]);
  description = new FormControl('', [
    Validators.minLength(5),
    Validators.maxLength(200),
    Validators.required,
  ]);
  date = new FormControl('', Validators.required);


  getErrorMessage() {
    if (
      this.title.hasError('required') ||
      this.description.hasError('required') ||
      this.date.hasError('required')
    ) {
      return (this.errorValidator = 'You must enter a value');
    }

    if (this.description.hasError('minLength')) {
      return (this.errorValidator = 'Minimum of this field - 5 characters');
    }

    if (this.description.hasError('maxLength')) {
      return (this.errorValidator = 'Maximum of this field - 200 characters');
    }

    return (this.errorValidator = '');
  }
}
