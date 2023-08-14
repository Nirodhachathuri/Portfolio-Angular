import { Component, HostBinding, OnInit } from '@angular/core';
import {BreakpointObserver,Breakpoints} from '@angular/cdk/layout'
import AOS from 'aos'
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    AOS.init();
  }

}
