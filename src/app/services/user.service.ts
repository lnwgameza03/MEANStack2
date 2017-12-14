import { Injectable } from '@angular/core'
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class UserService {

  constructor(private http: HttpClient) {

   }


    Create(user:User) : Observable<User>{
    return this.http.post<User>("http://localhost:9990/users" , user)
  }

  

}