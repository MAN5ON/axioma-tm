import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { TaskService } from '../../../services/task.service';
import { ITask } from '../../../../models/task';

@Component({
  selector: 'app-showpage',
  templateUrl: './showpage.component.html',
  styleUrls: ['./showpage.component.css'],
})
export class ShowpageComponent implements AfterViewInit {
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public taskService: TaskService,
    public dialog: MatDialog
  ) {}
  @ViewChild('table') table: MatTable<ITask>;
  displayedColumns: string[] = ['title', 'created', 'deadline'];
  srcData = this.taskService.dataSource.data;
  dataSource = this.taskService.dataSource;

  openDialog(row: ITask) {
    this.dialog.open(DetailDialog, {
      data: row,
    });
  }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

@Component({
  selector: 'detail-dialog',
  templateUrl: './details/detail-dialog.component.html',
  styleUrls: ['./details/detail-dialog.component.css'],
})
export class DetailDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ITask) {}
}
