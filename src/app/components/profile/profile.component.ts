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
    this.userService.checkUsername(sessionStorage.getItem("name")).subscribe(user => {this.users = user})
  }

  saveEdit() {
    this.userService.update(this.users[0]).subscribe(user => {this.users = user})
  }
}