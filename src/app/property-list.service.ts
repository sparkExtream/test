import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropertyListService {
  constructor(private http: HttpClient) {
    this.getAllProperty();
  }

  propertyList = {};
  private newEvent = new Subject();

  createNewProperty = (property) => {
    this.http
      .post(environment.firebaseApi + 'property.json', property)
      .subscribe((data) => {
        console.log(data);
        console.log(JSON.stringify(data, null, 2));
        let newObj = {};
        newObj[data['name']] = property;
        let newPro = { ...this.propertyList, ...newObj };
        this.propertyList = newPro;
        this.newEvent.next(this.propertyList);
      });
  };

  getAllProperty = () => {
    return new Promise((resolve) => {
      this.http
        .get(environment.firebaseApi + 'property.json')
        .subscribe((data) => {
          this.propertyList = data;
          resolve(true);
        });
    });
  };

  deleteProperty = (id) => {
    return this.http.delete(
      environment.firebaseApi +'property' + '/' + id + '.json'
    );
  };

  propertyLisnner = () => {
    return this.newEvent.asObservable();
  };
}
