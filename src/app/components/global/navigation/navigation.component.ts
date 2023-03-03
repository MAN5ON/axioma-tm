import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(NavDialog);
  }
}

@Component({
  selector: 'nav-dialog',
  templateUrl: './nav-dialog.component.html',
})
export class NavDialog {}
