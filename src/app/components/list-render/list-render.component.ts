import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

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

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O ${animal.type} ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal): void {
    console.log("Removendo animal: ", animal);
    this.animals = this.listService.remove(this.animals, animal);
  }
}
