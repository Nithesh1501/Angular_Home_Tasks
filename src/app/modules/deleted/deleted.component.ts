import { Component, OnInit, Optional } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.loadDeletedUsers();
    console.log("Ng", this.deletedUsers);
  }

  deletedUsers: User[] = []

  loadDeletedUsers() {
    this.deletedUsers = UsersService.getDeletedUsers();
  }

  activateUser(id: string) {
    UsersService.setActivation(id, false);
    this.loadDeletedUsers();
  }
}