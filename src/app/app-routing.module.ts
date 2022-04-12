
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AddUsersComponent } from './users/add-users/add-users.component';
import { DeleteUsersComponent } from './users/delete-users/delete-users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';


const routes: Routes = [
  {path: 'create', component: AddUsersComponent},
  {path: 'users',
    children: [
      {path: '', component: ListUsersComponent},
      {path: 'list', component: ListUsersComponent},
      {path: 'edit/:id', component: EditUsersComponent},
      {path: 'delete/:id', component: DeleteUsersComponent},
      {path: 'view/:id', component:ViewUsersComponent}
      ]
  }

];

@NgModule({
  imports:[BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}