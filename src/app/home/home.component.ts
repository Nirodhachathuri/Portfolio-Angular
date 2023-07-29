import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myData:string[][]=[
    ['Name','Nirodha Chathuri Malalagama'],
    ['DOB','25/11/1992'],
    ['Work Exp','3 Years'],
    ['Education','M.Sc. (2018)'],
    ['Interest','Reading Books']
  ];
  aboutMe:string[]=[
    'I am currently working as a Software Engineer at National Intensive Care Surveillance (NICST)'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
