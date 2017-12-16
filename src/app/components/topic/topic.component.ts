import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Post } from '../../models/post.models';
import { Reply } from '../../models/reply.models';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser/src/dom/events/hammer_gestures';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],
  providers: [UserService]
})
export class TopicComponent implements OnInit {

  post1: Post[]= [];
  reply1 = new Reply();
  reply2: Reply[]= [];
  

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getTopic(sessionStorage.getItem("topic")).subscribe(post => this.post1 = post)
    this.userService.getReply(sessionStorage.getItem("topic")).subscribe(reply => this.reply2 = reply)
    console.log(this.post1)
  }

  admin() {
    if(sessionStorage.getItem("status") == "0")
      return true;
    else
      return false;
  }

  comment(){
    this.reply1.topic = sessionStorage.getItem("topic")
    this.reply1.username = sessionStorage.getItem('name')
    this.userService.CreateReply(this.reply1).subscribe(reply => (null))
    location.reload()
  }

  del(id) {
    this.userService.delete(id).subscribe(reply => (null))
    location.reload()
  }
}