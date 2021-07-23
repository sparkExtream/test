import { Component, OnInit } from '@angular/core';
import { PropertyListService } from '../property-list.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  propertyList = [];

  constructor(public propertyListService: PropertyListService) {
    this.propertyList = propertyListService.propertyList;
  }

  ngOnInit(): void {}
}
