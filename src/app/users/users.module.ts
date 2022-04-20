import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ListUsersComponent,
    ViewUsersComponent,
    AddUsersComponent,
    EditUsersComponent,
    DeleteUsersComponent,
  ],  
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatSnackBarModule
    

    

  ],providers: [
  {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue: {duration: 2500}}
  ]
})
export class UsersModule { }
