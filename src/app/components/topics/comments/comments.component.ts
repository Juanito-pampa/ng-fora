import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment, Topic} from "../../../models/models";
import {TopicsService} from "../../../services/topics.service";

@Component({
  selector: 'rc-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() comment:Comment


  constructor(public topicsService: TopicsService) { }

  getCommentUser(){

    return (this.comment.user && this.comment.user.name || "anonymous")
  }

  getCommentScore (){

    return (this.comment && this.comment.score || "0")
  }
  increaseScore (){

    this.comment.score++
    this.topicsService.increaseCommentScore(this.comment).subscribe()
  }

  decreaseScore(){
    this.comment.score--
    this.topicsService.decreaseCommentScore(this.comment).subscribe()
}

  ngOnInit() {

  }

}
