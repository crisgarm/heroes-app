import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styles: [],
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroesServices: HeroesService) {}

  ngOnInit(): void {
    this.heroesServices.getHeroes().subscribe((resp) => {
      this.heroes = resp;
    });
  }
}
