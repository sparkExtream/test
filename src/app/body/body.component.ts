import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PropertyListService } from '../property-list.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit, OnDestroy {
  propertyList = {};
  private propertySub: Subscription;

  constructor(public propertyListService: PropertyListService) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData = () => {
    this.propertyListService.getAllProperty().then((res) => {
      if (res) {
        this.propertyList = this.propertyListService.propertyList;
        this.propertySub = this.propertyListService.propertyLisnner().subscribe(
          (propertyList) => {
            this.propertyList = propertyList;
          }
        );
      }
    });
  };

  ngOnDestroy(){
    this.propertySub.unsubscribe();
  }
}
