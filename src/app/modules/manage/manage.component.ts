import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/models/user';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor() {
    console.log('ManageComponent loaded.');
  }
  userPreview: any = null;
  ngOnInit(): void {
    this.allUsers = UsersService.users
    console.log("ManageComponent ngOnInit", this.allUsers);
  }
  allUsers: User[] = []
  showUser(id: string) {
    this.userPreview = UsersService.users.find(user => user.id == id);
  }
}
