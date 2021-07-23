import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddPropertyComponent } from '../add-property/add-property.component';
import { RemovePropertyComponent } from '../remove-property/remove-property.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addProperty = () => {
    let dialogRef = this.dialog.open(AddPropertyComponent, {
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  };

  removeProperty = () => {
    let dialogRef = this.dialog.open(RemovePropertyComponent, {
      width:"700px",
      maxHeight:"500px"
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  };
}
