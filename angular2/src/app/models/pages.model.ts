export enum Pages {
    HOME = 'home',
    USERS = 'users',
    TODOS = 'todos',
  }
  
  export interface PageModel {
    id: Pages;
    name: string;
  }
  