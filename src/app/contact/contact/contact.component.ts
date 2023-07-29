import { Component, OnInit } from '@angular/core';

let skills = []
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  constructor() { }
  skills = [{
    title: 'PROGRAMMING LANGUAGES',
    src: '../../../assets/image1.jpeg',
    description:'I am intersted programming. I have near 10 years experience related programing language, I have sound knowledge below,'
   },
   { title: 'DEVELOPMENT',
   src: '../../../assets/skill.jpeg',
   description:'HTML, CSS, Javascript, Bootstrap, Reactjs, Nodejs, Expressjs, MongoDB, MySQL, Firebase, Android'
   },
   { title: 'DESIGN',
   src: '../../../assets/design.png',
   description:'I have good creative ability, I am doing photo edits and creation using these tools Photoshop, Coreldraw'
   },{
    title:'TOOLS/PLATFORMS',
    src: '../../../assets/tools.png',
    description:'Git, Linux, AWS, GCP'
   }]
   
  
  
  ngOnInit(): void {
   console.log('aaa',skills)
  }
}
