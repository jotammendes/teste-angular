import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animalDetails = '';

  constructor(private listService: ListService) {
    this.getAnimais();
  }

  ngOnInit(): void {
  }

  getAnimais(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  showAge(animal: Animal): void {
    this.animalDetails = `O ${animal.type} ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal): void {
    console.log("Removendo animal: ", animal);
    this.animals = this.listService.remove(this.animals, animal);
  }
}
