import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
goals=[];
  constructor( private dataService:DataService ) { 
    this.goals = this.dataService.getGoal();
  }

  ngOnInit() {
  }

}
