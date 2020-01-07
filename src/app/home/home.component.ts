import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  btnText: string ='Add an Item';
  goalText: string ='My first life goal';
  goals= [];
  constructor( private dataService: DataService ) { 
    this.goals=this.dataService.getGoal();
  }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }
  addItem(){
    this.goals.push(this.goalText);
    this.goalText ='';
    this.itemCount = this.dataService.goals.length;
  }

}
