import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { ContactComponent } from './contact/contact/contact.component';
import { AboutComponent } from './about/about/about.component';
import { BannerComponent } from './banner/banner/banner.component';
import { ResponsiveDirective } from './directives/responsive.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { HoverAutoplayDirective } from './projects/hover-autoplay.directive';
import { ExperienceComponent } from './experience/experience/experience.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ResponsiveDirective,
    AboutComponent,
    BannerComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    ProjectsComponent,
    HoverAutoplayDirective,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    NgxPaginationModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
