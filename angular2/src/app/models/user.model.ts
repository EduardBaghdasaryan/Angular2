import { IWithIdentity } from './identity.model';
import { MyList } from './my-list.model';
import { Todo } from './todo.model';

export class User implements IWithIdentity {
  constructor(
    public id: number,
    public name: string,
    public todoList: MyList<Todo>
  ) {}
}
