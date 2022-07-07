import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('btnText')
  btnText!: string;

  @Input('user')
  user!: User;


  @Output('sendId') sendId = new EventEmitter<any>();

  getBorderColor() {
    return this.user.isDeleted ? "red" : "green";
  }
  getButtonColor() {
    return this.btnText == "Details" ? "blue" : this.user.isDeleted ? "green" : "red";
  }

  getId(id: string) {
    this.sendId.emit(id);
  }
}
