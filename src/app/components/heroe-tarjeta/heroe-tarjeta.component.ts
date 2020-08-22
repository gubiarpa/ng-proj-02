import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() hero: any = {};
  @Input() index: number;

  constructor( private _router: Router ) { }

  ngOnInit(): void {
  }

  verHeroe() {
    this._router.navigate(["/heroe", this.index]);
  }


}
