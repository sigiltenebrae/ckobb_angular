import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectListComponent } from './project-list/project-list.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {RouterModule} from "@angular/router";
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    NavigationBarComponent,
    HomepageComponent,
    ProjectDetailsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'projects', component: ProjectListComponent},
      {path: 'projects/:projectId', component: ProjectDetailsComponent},
    ]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
