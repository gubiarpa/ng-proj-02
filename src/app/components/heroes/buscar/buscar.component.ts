import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  heroes: any = {};
  termino: string;

  constructor( private _activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private _router: Router ) { }
              
  ngOnInit(): void {
    this._activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.searchHeroe( params['termino'] );
    });
  }

}
