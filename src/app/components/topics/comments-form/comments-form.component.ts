import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment, Topic} from "../../../models/models";
import {TopicsService} from "../../../services/topics.service";
import {UsersService} from "../../../services/users.service";


@Component({
  selector: 'rc-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css']
})
export class CommentsFormComponent implements OnInit {

  @Input() topic: Topic
  comment: Comment;
  copy: Comment;

  @Output() onAdd: EventEmitter<Comment> = new EventEmitter();

  constructor(public topicsService: TopicsService, public usersService: UsersService) {
  }

  ngOnInit() {
    this.comment = {
      id: 69,
      content: "", user: this.usersService.logged
    }

  }


  createComment() {
    this.copy = {...this.comment, user: this.usersService.logged};
    this.topicsService.createComment(this.copy, this.topic).subscribe((comment) => {
      this.onAdd.emit(comment);
      this.comment.content="";
    });
  }

}
