import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.models';
import { UserService } from '../../services/user.service';
import { post } from 'selenium-webdriver/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [UserService]
})
export class PostComponent implements OnInit {

  post1 = new Post()

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit() {
    this.post1.category = "other"
  }

  post(){
    console.log(this.post1)
    this.post1.username = sessionStorage.getItem('name')
    this.userService.CreatePost(this.post1).subscribe(post => {
      sessionStorage.setItem("topic", this.post1.topic)
      this.router.navigate(['/topic'])
    })
   
  }

}
