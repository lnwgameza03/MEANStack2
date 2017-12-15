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

  getPost() : Observable<Post[]>{
    return this.http.get<Post[]>("http://localhost:9990/posts")
  }

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>("http://localhost:9990/users")
  }

  getPostCate(cate:String) : Observable<Post[]>{
    return this.http.get<Post[]>("http://localhost:9990/posts/"+cate)
  }

  getTopic(topic:String) : Observable<Post[]>{
    return this.http.get<Post[]>("http://localhost:9990/posts/"+topic)
  }

  getUser() : Observable<User[]>{
    return this.http.get<User[]>("http://localhost:9990/post/pul")
  }

  checkUser(username : String , password : String) : Observable<User[]>{
    return this.http.post<User[]>("http://localhost:9990/users/check",{username,password})
  }

  checkUsername(username : String) : Observable<User[]>{
    return this.http.post<User[]>("http://localhost:9990/users/checkuser",{username})
  }

  update(user:User) : Observable<User[]>{
    return this.http.put<User[]>("http://localhost:9990/users/update",user)
  }
}