import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tarjoiluOhje = [];




  kahvinTarjoilu(tarjoiluData: {poydanNumero: string, myyntiMaara: string}) {

    this.tarjoiluOhje.push({
      tyo: 'tarjoiltu',
      poydanNumero: tarjoiluData.poydanNumero,
      myyntiMaara: tarjoiluData.myyntiMaara
    });
    console.log("kahvintarjoilu tehty eli tarjoiluOhjeeseen pushattu");
  }

    kahvinMyynti(myyntiData: {poydanNumero: string, myyntiMaara: string}) {
      this.tarjoiluOhje.push({
        tyo: 'myyty',
        poydanNumero: myyntiData.poydanNumero,
        myyntiMaara: myyntiData.myyntiMaara
      });
      console.log("kahvinmyynti tehty eli tarjoiluOhjeeseen pushattu");
    }

}
