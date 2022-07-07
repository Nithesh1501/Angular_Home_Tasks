import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('btnText')
  btnText!: string;

  @Input('usersList')
  usersList: User[] = []

  @Output('showUser') showUser = new EventEmitter<any>();

  sendId(id: string) {
    this.showUser.emit(id);
  }
}
