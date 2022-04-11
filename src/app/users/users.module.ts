import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';



@NgModule({
  declarations: [
    ListUsersComponent,
    ViewUsersComponent,
    AddUsersComponent,
    EditUsersComponent,
    DeleteUsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
