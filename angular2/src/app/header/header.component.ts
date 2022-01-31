import { Component, EventEmitter, Output } from '@angular/core';
import { PageModel, Pages } from '../models/pages.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output()
  pageChange = new EventEmitter<Pages>();

  // pages: PageModel[] = [
  //   {
  //     id: Pages.HOME,
  //     name: 'Home',
  //   },
  //   {
  //     id: Pages.USERS,
  //     name: 'Users',
  //   },
  //   {
  //     id: Pages.TODOS,
  //     name: 'Todos',
  //   },
  // ];

  onButtonClick(page: Pages) {
    this.pageChange.emit(page);
  }
}
