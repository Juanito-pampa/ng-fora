import {Component, Input, OnInit} from '@angular/core';
import {Comment, Topic} from "../../../models/models";

@Component({
  selector: 'rc-topic-view',
  templateUrl: './topic-view.component.html',
  styleUrls: ['./topic-view.component.css']
})
export class TopicViewComponent implements OnInit {
  @Input() topic: Topic

  constructor() { }

  ngOnInit() {
  }
  updateListComment(comment:Comment){
    this.topic.comments.push(comment)
  }
}
