import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {
      name: 'Turca',
      type: 'cachorro',
      age: 10,
    },
    {
      name: 'Tom',
      type: 'gato',
      age: 14,
    },
    {
      name: 'Jerry',
      type: 'rato',
      age: 4,
    },
    {
      name: 'Molly',
      type: 'cavalo',
      age: 20,
    },
  ];

  animalDetails = '';

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O ${animal.type} ${animal.name} tem ${animal.age} anos!`;
  }
}
