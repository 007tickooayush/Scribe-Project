import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  name:string = "Ayush"
  amount:number=1999
  dob = new Date()

  ngOnInit(): void {
  }

}
