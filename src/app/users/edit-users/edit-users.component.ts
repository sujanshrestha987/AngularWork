import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit {

  userId: any;
  userDetails: any;
  editUserForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;
  
  constructor(private activatedRouted: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.dataLoaded = false;
    this.activatedRouted.params.subscribe(data =>{
      this.userId = data['id'];
    });
    if(this.userId !== ''){
      //view userdata
      this.userService.viewuser(this.userId)
      .toPromise()
      .then(data => {
        this.userDetails = data;
        Object.assign(this.userDetails, data);
        console.log(this.userDetails);
        // build the edit form
        this.editUserForm = this.formBuilder.group({
          'name': new FormControl(this.userDetails.name,[Validators.required, Validators.minLength(3)]),
          'email': new FormControl(this.userDetails.email,[Validators.required, Validators.email]),
          'phone': new FormControl(this.userDetails.phone,[Validators.required, Validators.maxLength(10)])

        })
        this.dataLoaded = true;


      })
      .catch(err =>{
        console.log(err);
      })
    }
  }
  updateUser(){
    this.userService.updateUser(this.userId, this.editUserForm.value).subscribe((_data: any) =>{
      this._snackBar.open("User created successfully" );
    }, err  => {
      this._snackBar.open("User created unsuccessfully" );
    })
  }
}
function data(_data: any, _arg1: (any: any) => void, _arg2: (err: any) => void) {
  throw new Error('Function not implemented.');
}

