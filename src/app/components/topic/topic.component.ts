import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Post } from '../../models/post.models';
import { Reply } from '../../models/reply.models';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  providers: [UserService]
})
export class TopicComponent implements OnInit {

  post1: Post[]= [];
  reply1 = new Reply();
  

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getTopic(sessionStorage.getItem("topic")).subscribe(post => this.post1 = post)
  }

  comment(){
    this.reply1.topic = sessionStorage.getItem("topic")
    this.reply1.username = sessionStorage.getItem('name')
    this.userService.CreateReply(this.reply1).subscribe(reply => (null))
  }
}
