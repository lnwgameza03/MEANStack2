import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.models';
import { UserService } from '../../services/user.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [UserService]
})
export class PostComponent implements OnInit {

  post1 = new Post()

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  post(){
    
    this.userService.CreatePost(this.post1).subscribe(post => (null))
  }

}
