import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PropertyListService {
  constructor() {}
  propertyList = [
    {
      name: 'Villa 1',
      description: '5 bed rooms and 2 pool.',
      size: '100m X 100m',
    },
    {
      name: 'Villa 2',
      description: '3 bed rooms and 1 pool.',
      size: '50m X 100m',
    },
    {
      name: 'Villa 3',
      description: '9 bed rooms and 3 pool.',
      size: '200m X 100m',
    },
    {
      name: 'Villa 4',
      description: '25 bed rooms and 4 pool.',
      size: '500m X 100m',
    },
    {
      name: 'Villa 5',
      description: '2 bed rooms and 1 pool.',
      size: '50m X 50m',
    },
    {
      name: 'Villa 6',
      description: '1 bed rooms and 1 pool.',
      size: '40m X 40m',
    },
  ];
}
