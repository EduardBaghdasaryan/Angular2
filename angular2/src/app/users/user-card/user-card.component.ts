import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  @Input()
  user: User | null = null;

  showTodoList = false;

  handleClick() {
    this.showTodoList = !this.showTodoList;
  }
}
