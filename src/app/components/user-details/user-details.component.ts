import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('user')
  user!: User;

  getFontColor() {
    return this.user.isDeleted ? "green" : "red";
  }
}
