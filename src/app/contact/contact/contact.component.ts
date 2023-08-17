import { Component, OnInit } from '@angular/core';
import AOS from 'aos'
let skills = []
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
   console.log('aaa',skills)
   AOS.init()
  }
}
