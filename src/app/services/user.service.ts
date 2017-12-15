import { Injectable } from '@angular/core'
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Post } from '../models/post.models';




@Injectable()
export class UserService {

  constructor(private http: HttpClient) {

   }


    Create(user:User) : Observable<User>{
    return this.http.post<User>("http://localhost:9990/users" , user)
  }

    CreatePost(post:Post) : Observable<Post>{
    return this.http.post<Post>("http://localhost:9990/posts" , post)
  }

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>("http://localhost:9990/users")
  }

  getUser() : Observable<User[]>{
    return this.http.get<User[]>("http://localhost:9990/users/naja")
  }

  checkUser(username : String , password : String) : Observable<User[]>{
    return this.http.post<User[]>("http://localhost:9990/users/check",{username,password})
  }

  

}