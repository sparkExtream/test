import { Component, OnInit } from '@angular/core';
import { PropertyListService } from '../property-list.service';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss'],
})
export class AddPropertyComponent implements OnInit {
  constructor(
    public propertyListService: PropertyListService,
    public dialogRef: MatDialogRef<AddPropertyComponent>
  ) {}

  ngOnInit(): void {}

  addProperty = (form: NgForm) => {
    let propertyData = {
      name: form.value.name,
      size: form.value.size,
      description: form.value.description,
    };
    this.propertyListService.propertyList.push(propertyData);
    this.dialogRef.close();
  };
}
