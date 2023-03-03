import { Component } from '@angular/core';
import {  NgFor } from '@angular/common';

interface Table {
  name: string;
  status: string;
  delete: string;
  date: number;
}

const Tables: Table[] = [
  {
    name: 'Alexandria',
    status: 'pending',
    delete: '../../../../assets/Images/userProfile/trash-solid.svg',
    date: 146989754,
  },
  {
    name: 'Cairo',
    status: 'accepted',
    delete: '../../../../assets/Images/userProfile/trash-solid.svg',
    date: 146989754,
  },
  {
    name: 'Luxor',
    status: 'rejected',
    delete: '../../../../assets/Images/userProfile/trash-solid.svg',
    date: 146989754,
  },
  {
    name: 'Dahab',
    status: 'accepted',
    delete: '../../../../assets/Images/userProfile/trash-solid.svg',
    date: 146989754,
  },
  {
    name: 'PortSaid',
    status: 'Pending',
    delete: '../../../../assets/Images/userProfile/trash-solid.svg',
    date: 146989754,
  },
  {
    name: 'Fayium',
    status: 'accepted',
    delete: '../../../../assets/Images/userProfile/trash-solid.svg',
    date: 146989754,
  },
];

@Component({
  selector: 'app-user-profile-table',
  templateUrl: './user-profile-table.component.html',
  styleUrls: ['./user-profile-table.component.css'],
})
export class UserProfileTableComponent {
  Table = Tables;
}
