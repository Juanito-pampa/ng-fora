import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Topic, User} from "../models/models";

@Injectable()
export class TopicsService {

  constructor(public http: Http) {
  }

  getTopics(): Observable<Topic[]> {
    return this.http.get("http://localhost:8080/jax-rs-1/api/topics").map(response => response.json());
  }
}

