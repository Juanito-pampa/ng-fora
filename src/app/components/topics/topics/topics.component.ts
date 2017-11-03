import { Component, OnInit } from '@angular/core';
import {Topic, User} from "../../../models/models";
import {TopicsService} from "../../../services/topics.service";
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'rc-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  topics : Topic []=[];
  users : User[] = [];

  constructor(public topicsService : TopicsService) {

  }

  ngOnInit() {

    this.topicsService.getTopics().subscribe(topics=>this.topics=topics)
  }


}
