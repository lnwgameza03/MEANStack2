import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Post } from '../../models/post.models';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [UserService]
})
export class SelectComponent implements OnInit {

  post1: Post[]= [];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getPostCate(sessionStorage.getItem("cate")).subscribe(post => this.post1 = post)
  }

}
