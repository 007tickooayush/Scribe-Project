import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {

  user: any = {}
  posts: any[] = []

  constructor() {
    this.user = firebase.auth().currentUser
    this.getPosts()

  }

  ngOnInit(): void {
  }

  getPosts() {
    //list of posts
    firebase.firestore().collection("posts")
    .orderBy("created","desc")
    .get().then((querySnapshot) => {

      console.log(querySnapshot.docs)
      this.posts = querySnapshot.docs

    }).catch((error) => {

      console.log(error)

    })
  }

  onPostCreated() {
    //reinitialize and refresh
    this.posts = []
    this.getPosts()

  }
  onDelete() {
    //delete and refresh posts
    this.posts = []
    this.getPosts()
  }

}
