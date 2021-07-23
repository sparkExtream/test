import { Component, OnInit } from '@angular/core';
import { PropertyListService } from '../property-list.service';

@Component({
  selector: 'app-remove-property',
  templateUrl: './remove-property.component.html',
  styleUrls: ['./remove-property.component.scss'],
})
export class RemovePropertyComponent implements OnInit {
  propertyList = [];

  constructor(public propertyListService: PropertyListService) {
    this.propertyList = propertyListService.propertyList;
  }

  ngOnInit(): void {}

  remove = (index) => {
    this.propertyList.splice(index, 1);
  };
}
