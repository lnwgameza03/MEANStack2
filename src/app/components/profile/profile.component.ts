import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
<<<<<<< HEAD
    
=======
    this.userService.checkUsername(sessionStorage.getItem("name")).subscribe(user => {this.users = user})
>>>>>>> bb77a82953274a3b2aa5143c0cff5f654ce4effa
  }

  saveEdit() {
    this.userService.update(this.users[0]).subscribe(user => {this.users = user})
  }
}