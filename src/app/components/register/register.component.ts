import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {

  user = new User()

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  saveRegist(){

    

    // this.user.userName = ((<HTMLTextAreaElement>document.getElementById('usr')).value)
    // this.user.password = ((<HTMLTextAreaElement>document.getElementById('pwd')).value)
    // this.user.firstName = ((<HTMLTextAreaElement>document.getElementById('fn')).value)
    // this.user.lastName = ((<HTMLTextAreaElement>document.getElementById('ln')).value)
    // this.user.DOB = ((<HTMLTextAreaElement>document.getElementById('date')).value)
    // this.user.phone = ((<HTMLTextAreaElement>document.getElementById('phone')).value)
    //this.user.email = ((<HTMLTextAreaElement>document.getElementById('email')).value)
    this.userService.Create(this.user).subscribe(user => (null))
  }

}
