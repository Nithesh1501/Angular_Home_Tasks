import { Injectable } from '@angular/core';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {
    console.log("in UsersService");
  }
  static users: User[] = [
    {
      id: '1',
      firstName: 'Peter',
      lastName: 'Parker',
      age: 24,
      login: 'peter',
      password: 'Park@****',
      isDeleted: true
    },
    {
      id: '2',
      firstName: 'Richard',
      lastName: 'Parker',
      age: 28,
      login: 'richard',
      password: 'ric****',
      isDeleted: false
    },
    {
      id: '3',
      firstName: 'Daniel',
      lastName: 'Craig',
      age: 56,
      login: 'daniel',
      password: 'cra****',
      isDeleted: false
    },
    {
      id: '4',
      firstName: 'Tom',
      lastName: 'Cruise',
      age: 60,
      login: 'tomcruise',
      password: 'cru****',
      isDeleted: false
    },
    {
      id: '5',
      firstName: 'Tony',
      lastName: 'Stark',
      age: 54,
      login: 'tony',
      password: 'sta****',
      isDeleted: false
    },
    {
      id: '6',
      firstName: 'Andrew',
      lastName: 'Garfield',
      age: 35,
      login: 'andrew',
      password: 'gar@****',
      isDeleted: true
    },
    {
      id: '7',
      firstName: 'Tobey',
      lastName: 'Maguire',
      age: 24,
      login: 'toby',
      password: 'mag@****',
      isDeleted: false
    },
  ];

  static getActiveUsers(): User[] {
    return this.users.filter((user: User) => !user.isDeleted);
  }

  static getDeletedUsers(): User[] {
    return this.users.filter((user: User) => user.isDeleted);
  }


  static setActivation(id: string, isDeleted: boolean) {
    const userId = this.users.findIndex((user: User) => user.id === id);
    this.users[userId].isDeleted = isDeleted;
    console.log("service", this.users);
  }
}