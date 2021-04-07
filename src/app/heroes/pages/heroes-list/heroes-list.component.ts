import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styles: [],
})
export class HeroesListComponent implements OnInit {
  constructor(private heroesServices: HeroesService) {}

  ngOnInit(): void {
    this.heroesServices.getHeroes().subscribe((resp) => console.log(resp));
  }
}
