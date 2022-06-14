import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Project, projects} from "../../project";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const projectIdFromRoute = Number(routeParams.get('projectId'));

    this.project = projects.find(project => project.id === projectIdFromRoute);
  }

}
