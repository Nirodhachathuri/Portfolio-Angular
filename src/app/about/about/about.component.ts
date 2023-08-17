import { Component, OnInit } from '@angular/core';
import {AOS} from 'aos'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  model: any = {};
  // skills = [{
  //   title: 'PROGRAMMING LANGUAGES',
  //  skill : 'Angular',
  //  progress:"85%"
  //  },
  //  { title: 'DEVELOPMENT',
  //  skills : 'Angular',
  //  progress:"85%"
  //    },
  //  { title: 'DESIGN',
  //  skills : 'Angular',
  //  progress:"85%" },
  //  {
  //   title:'TOOLS/PLATFORMS',
  //   skills : 'Angular',
  //  progress:"85%"
  //  }]
  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL,MONOGO, FIREBASE',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'PYTHON,JAVA',
      'progress': '70%'
    }
  ];


  ngOnInit(): void {
    AOS.init()
  }

}
