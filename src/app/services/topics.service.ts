import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Comment, Topic, User} from "../models/models";
import {Url} from "url";

@Injectable()
export class TopicsService {

  constructor(public http: Http) {
  }

  getTopics(): Observable<Topic[]> {
    return this.http.get("http://localhost:8080/jax-rs-1/api/topics").map(response => response.json());
  }

  createComment(comment: Comment, topic: Topic): Observable<Comment> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    if (comment.user) {
      delete comment.user.statement;
    }
    const url = "http://localhost:8080/jax-rs-1/api/topics/" + topic.id + "/comments";
    return this.http
      .post(url, comment, options)
      .map(resp => resp.json())

  }

  increaseCommentScore(comment: Comment) {

    if (comment.user) {
      delete comment.user.statement;
    }
    const url = "http://localhost:8080/jax-rs-1/api/topics/comments/0/" + comment.id;
    return this.http.put(url, {})

  }

  decreaseCommentScore(comment: Comment) {

    if (comment.user) {
      delete comment.user.statement;
    }
    const url = "http://localhost:8080/jax-rs-1/api/topics/comments/1/" + comment.id;
    return this.http.put(url, {})

  }
}

