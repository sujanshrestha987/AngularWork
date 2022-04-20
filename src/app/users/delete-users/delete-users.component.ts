import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.scss']
})
export class DeleteUsersComponent implements OnInit {
  userId: string= '';
  constructor(private activatedRoute:ActivatedRoute, 
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
        this.userId= data['id'];
    })

    if(this.userId){
      this.userService.deleteUser(this.userId).subscribe(data => {
         this._snackBar.open("User Deleted Successfully");
         
      },err => {
        this._snackBar.open("Unable To Delete")
      })
    }
  }

}
