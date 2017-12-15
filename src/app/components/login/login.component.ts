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
    this.userService.checkUser(this.user.userName , this.user.password).subscribe(user => {
    console.log("pass")
    console.log(user)
    if(user.length === 0){
      console.log("not match")
      alert('login fail')
    }else {
      alert('login success')
      this.loginService.login(this.user.userName)
    console.log("success")}
  })
  //this.loginService.login((<HTMLTextAreaElement>document.getElementById('usr')).value)
  
  }
}
