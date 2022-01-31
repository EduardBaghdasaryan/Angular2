import { Component, OnInit } from '@angular/core';
import { MyList } from '../models/my-list.model';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos = new MyList<Todo>([
    {
      id: 1,
      title: 'Todo1',
    },
    {
      id: 2,
      title: 'Todo2',
    },
    {
      id: 3,
      title: 'Todo3',
    },
  ]);

  handleReset() {
    this.todos.values = [];
  }
}
