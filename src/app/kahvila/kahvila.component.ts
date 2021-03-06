import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-kahvila',
  templateUrl: './kahvila.component.html',
  styleUrls: ['./kahvila.component.css']
})
export class KahvilaComponent implements OnInit {
  @Output() myyntiTapahtuma = new EventEmitter<{poydanNumero: string, myyntiMaara: string}>();
  @Output() tarjoiluTapahtuma = new EventEmitter<{poydanNumero: string, myyntiMaara: string}>();

  uusipoydanNumero = '';
  uusimyyntiMaara = '';


  kahviaTarjoiltu() {
    this.tarjoiluTapahtuma.emit({poydanNumero: this.uusipoydanNumero, myyntiMaara: this.uusimyyntiMaara});
    console.log("Kahvia tarjoiltu eli event emitattu");
  }

    kahviaMyyty() {
      this.myyntiTapahtuma.emit({poydanNumero: this.uusipoydanNumero, myyntiMaara: this.uusimyyntiMaara});
      console.log("Kahvia myyty eli event emitattu");
    }

    constructor() { }

  ngOnInit(): void {
  }

}
