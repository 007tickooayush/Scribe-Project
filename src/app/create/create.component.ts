import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app'
import 'firebase/firestore'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title: string = ""
  htmlContent: string=""
  editorConfig:any

  @Output('postCreated') postCreated = new EventEmitter()
  
  constructor() { 
    this.editorConfig = {
      "editable": true,
      "spellcheck": true,
      "height": 'auto',
      "minHeight": '0',
      "maxHeight": 'auto',
      "width": 'auto',
      "minWidth": '0',
      "translate": 'yes',
      "enableToolbar": true,
      "showToolbar": false,
      "placeholder": 'Enter text here...',
      "defaultParagraphSeparator": '',
      "defaultFontName": '',
      "defaultFontSize": '',
      "fonts": [
        {"class": 'arial', 'name': 'Arial'},
        {"class": 'times-new-roman', 'name': 'Times New Roman'},
        {"class": 'calibri', 'name': 'Calibri'},
        {"class": 'comic-sans-ms','name': 'Comic Sans MS'}
      ],
      "customClasses": [
      {
        "name": 'quote',
        "class": 'quote',
      },
      {
        "name": 'redText',
        "class": 'redText'
      },
      {
        "name": 'titleText',
        "class": 'titleText',
        "tag": 'h1',
      },
    ],
    "uploadUrl": 'v1/image',
    "uploadWithCredentials": "false",
    "sanitize": true,
    "toolbarPosition": 'top',
    "toolbarHiddenButtons": [
      ['bold', 'italic'],
      ['fontSize']
    ]
    }
  }
  
  ngOnInit(): void {
  }

  createPost(){

    // firebase.firestore().settings({
    //   timestampsInSnapshots:true
    // })

    firebase.firestore().collection("posts").add({
      title: this.title,
      content: this.htmlContent,
      owner:firebase.auth().currentUser.uid,
      created:firebase.firestore.FieldValue.serverTimestamp()
    }).then((data) => {
      console.log(data)
      this.postCreated.emit()
    }).catch((error) =>{
      console.log(error)
    })
  }
}
