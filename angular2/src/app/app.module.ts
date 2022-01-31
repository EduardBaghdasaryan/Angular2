import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { UserCardComponent } from './users/user-card/user-card.component';
import { TodoCardComponent } from './todos/todo-card/todo-card.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes = [
  {
path :'Home',
component : HomeComponent,
},{
  path :'Users',
  component : UsersComponent,
},
{
  path :'Todos',
  component : TodosComponent,
},  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    TodosComponent,
    UserCardComponent,
    TodoCardComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
