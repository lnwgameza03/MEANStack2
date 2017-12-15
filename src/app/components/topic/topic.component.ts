import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Post } from '../../models/post.models';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  providers: [UserService]
})
export class TopicComponent implements OnInit {

  post1: Post[]= [];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getTopic(sessionStorage.getItem("topic")).subscribe(post => this.post1 = post)
    console.log(this.post1)
  }

  comment(){
    
  }

}
