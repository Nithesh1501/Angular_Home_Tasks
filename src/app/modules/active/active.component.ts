import { Component, OnInit, Optional } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css'],
  providers: [UsersService]
})
export class ActiveComponent implements OnInit {
  constructor() {
    console.log("ActiveComponent constructor");

  }

  ngOnInit(): void {
    this.loadActiveUsers();
  }

  activeUsers: User[] = []

  loadActiveUsers() {
    this.activeUsers = UsersService.getActiveUsers();

  }
  deactivateUser(id: string) {
    UsersService.setActivation(id, true);
    this.loadActiveUsers();
  }
}
