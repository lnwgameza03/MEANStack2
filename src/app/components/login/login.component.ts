import { Component, OnInit } from '@angular/core'
import { LoginService } from '../../services/login.service'
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  user = new User()
  constructor(private loginService:LoginService , private userService:UserService) { }

  ngOnInit() {
  }

  

  login() {
    this.loginService.login((<HTMLTextAreaElement>document.getElementById('usr')).value)
    this.userService.Create(this.user).subscribe(user => (null))
  }
}
