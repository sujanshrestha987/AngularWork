import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'https://jsonplaceholder.cypress.io/';
  constructor(private http: HttpClient) { }
  listUsers(){
    return this.http.get(this.baseUrl + 'users');
  }

  viewuser(id: string){
    return this.http.get(this.baseUrl + 'users/' + id);
  }

  addUser(userobj: any){
    return this.http.post(this.baseUrl  + 'users' ,  userobj); 
  }

  deleteUser(id: any){
    return this.http.delete(this.baseUrl + 'users/' + id);
  }

  updateUser(id: any, userobj: any){
    return this.http.put(this.baseUrl + 'users/'+id, userobj);
  }
}
