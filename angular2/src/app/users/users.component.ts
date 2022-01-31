import { Component, OnInit } from '@angular/core';
import { MyList } from '../models/my-list.model';
import { Todo } from '../models/todo.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = new MyList<User>([
    {
      id: 1,
      name: 'User1',
      todoList: new MyList<Todo>([
        { id: 1, title: 'Todo1' },
        { id: 2, title: 'Todo2' },
      ]),
    },
    {
      id: 2,
      name: 'User2',
      todoList: new MyList<Todo>(),
    },
    {
      id: 3,
      name: 'User3',
      todoList: new MyList<Todo>([{ id: 3, title: 'Todo3' }]),
    },
  ]);

  constructor() {}

  ngOnInit(): void {}
}
