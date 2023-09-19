import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myData:string[][]=[
    ['Name','Nirodha Chathuri Malalagama'],
    // ['DOB','25/11/1992'],
    ['Email','chathuri.malalagama@ymail.com'],
    // ['Phone','+94776707048'],
    // ['Address','326, Wilgoda Road, Kurunegala, Sri Lanka']
  ];
  aboutMe:string[]=[
    "Experienced Software Engineer with 3 years of hands-on expertise, equipped with technical abilities and a decisive nature necessary for successful job development. Expert in gathering requirements, designing systems, and optimizing code. Focused and adaptable professional with a proven track record of 3 years in software engineering positions, skilled at flexing to various roles to meet company and customer needs."
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
