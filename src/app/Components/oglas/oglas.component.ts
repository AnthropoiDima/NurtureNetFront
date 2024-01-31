import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Oglas } from 'src/app/Models/oglas';
import { OglasService } from 'src/app/Services/oglas.service';

@Component({
  selector: 'app-oglas',
  templateUrl: './oglas.component.html',
  styleUrls: ['./oglas.component.css']
})
export class OglasComponent {
  @Input() oglas: Oglas | null = null;
  @Input() dadiljaEmail: string = "ema@gmail.com";
  oglasi$: Observable<Oglas[]> = of([])
  ogla$: Observable<Oglas> = of()
  // oglas: Oglas = {
  //   opis: "zelim da radim kao dadilja",
  //   plata: 1000,
  //   radnoVreme: "8-16",
  //   vestine: "kuvanje, spremanje, pranje, peglanje",
  //   jeDadilja: true,
  // }
  opis: string = ""
  plata: number = 0
  radnoVreme: string = ""
  vestine: string = ""
  
  constructor(private service: OglasService) { }

  ngOnInit(): void {
    this.oglasi$ = this.service.preuzmiOglase()
  }

  dodajOglas() {
    this.service.dodajOglasDadilja(this.dadiljaEmail, this.opis, this.plata, this.radnoVreme, this.vestine).subscribe()
    // this.service.dodajOglasFromBody({
    //   opis: this.opis,
    //   plata: this.plata,
    //   radnoVreme: this.radnoVreme,
    //   vestine: this.vestine,
    //   jeDadilja: true
    // }).subscribe()
  }
}
