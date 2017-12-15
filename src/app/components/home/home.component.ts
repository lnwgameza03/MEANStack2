import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service'
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {

 users: User[] = [];
 //users: User
 
  
  constructor(private loginService:LoginService , private userService:UserService) { }

  ngOnInit() {
   this.userService.getUsers().subscribe(users => this.users = users)
   //this.userService.getUser().subscribe(users => this.users = users)

    //sessionStorage.getItem('name')
  }
 
}
