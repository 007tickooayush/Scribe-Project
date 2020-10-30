import { Injectable } from '@angular/core';
import 'firebase/auth'

import * as firebase from 'firebase/app'
import { rejects } from 'assert';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(email:string,password:string){
    return firebase.auth().signInWithEmailAndPassword(email,password)
  }

  signup(email:string,passowrd:string,first_name:string,last_name:string){
    return new Promise((resolve,reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email,passowrd).then(
        (response)=>{
          
          // let randomNumber:number = Math.floor(Math.random() * 1000)~

          response.user.updateProfile({
            displayName:first_name+" "+last_name,
            // photoURL:"https://api.adorable.io/avatars/" + randomNumber
            photoURL:"http://hd.wallpaperswide.com/thumbs/beautiful_lion_3-t2.jpg"
            // photoURL:"assets/beautiful_lion_3-t2.png"
          }).then(()=>{
            resolve(response.user)
          }).catch((error)=>{
            reject(error)
          })

        }).catch((error)=>{
          rejects(error)
        })
    })
  }
  constructor() { }
}
