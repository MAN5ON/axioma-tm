import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { TaskService } from '../../../services/task.service';
import { ITask } from '../../../../models/task';
import {MatPaginator} from '@angular/material/paginator';

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
  displayedColumns: string[] = ['title', 'created', 'deadline', 'controls'];
  srcData = this.taskService.dataSource.data;
  dataSource = this.taskService.dataSource;
  hoveredIndex = null;

  openDialog(item: ITask) {
    this.dialog.open(DetailDialog, {
      data: item,
    });
  }

  moveUp(i: number) {
    if (i != 0) {
      this.taskService.dataSource.data.splice(
        i - 1,
        0,
        this.srcData.splice(i, 1)[0]
      );
      this.dataSource._updateChangeSubscription();
    }
  }

  moveDown(i: number) {
    if (i != this.srcData.length - 1) {
      this.taskService.dataSource.data.splice(
        i + 1,
        0,
        this.srcData.splice(i, 1)[0]
      );
      this.dataSource._updateChangeSubscription();
    }
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
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
