import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {

  user = new User()
  err : string[] = [];
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.user = new User();
  }

  saveRegist(){
    this.err = [];
    if(!this.user.email){
      this.err.push("กรุณากรอกอีเมล")
      return;
    }
    if(!this.user.password){
      this.err.push("กรุณากรอกรหัสผ่าน")
      return;
    }
    if(!this.user.userName){
      this.err.push("กรุณากรอกชื่อผู้ใช้")
      return;
    }
    if(!this.user.firstName){
      this.err.push("กรุณากรอกชื่อ")
      return;
    }
    if(!this.user.lastName){
      this.err.push("กรุณากรอกนามสกุล")
      return;
    }
    if(!this.user.DOB){
      this.err.push("กรุณากรอกวันเดือนปีเกิด")
      return;
    }
    if(!this.user.phone){
      this.err.push("กรุณากรอกเบอร์โทรศัพท์")
      return;
    }
    
    this.userService.Create(this.user).subscribe(user =>  {this.router.navigate(['/home'])}, err => {
      this.err.push(`This email already exists`);
    })

    

    // this.user.userName = ((<HTMLTextAreaElement>document.getElementById('usr')).value)
    // this.user.password = ((<HTMLTextAreaElement>document.getElementById('pwd')).value)
    // this.user.firstName = ((<HTMLTextAreaElement>document.getElementById('fn')).value)
    // this.user.lastName = ((<HTMLTextAreaElement>document.getElementById('ln')).value)
    // this.user.DOB = ((<HTMLTextAreaElement>document.getElementById('date')).value)
    // this.user.phone = ((<HTMLTextAreaElement>document.getElementById('phone')).value)
    //this.user.email = ((<HTMLTextAreaElement>document.getElementById('email')).value)
    
  }

}
