import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'João Paulo';
  age: number = 24;
  job: string = 'programador';
  hobbies: string[] = ['programar', 'comer', 'dormir'];
  car = {
    model: 'Ford',
    year: 2020,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
