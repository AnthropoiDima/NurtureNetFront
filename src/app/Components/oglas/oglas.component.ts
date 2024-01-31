import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Oglas } from 'src/app/Models/oglas';
import { OglasService } from 'src/app/Services/oglas.service';
import { environment } from 'src/environments';

@Component({
  selector: 'app-oglas',
  templateUrl: './oglas.component.html',
  styleUrls: ['./oglas.component.css']
})
export class OglasComponent {
  userEmail: string = ""
  isDadilja: boolean = true
  oglasi$: Observable<Oglas[]> = of([])
  opis: string = ""
  plata: number = 0
  radnoVreme: string = ""
  vestine: string = ""
  
  constructor(private service: OglasService) { }

  ngOnInit(): void {
    this.userEmail = environment.userEmail
    this.isDadilja = environment.isDadilja
    console.log("user: ", this.userEmail, " isDadilja: ", this.isDadilja)

    this.oglasi$ = this.service.preuzmiOglase()
  }

  dodajOglas() {
    if(this.isDadilja)
      this.service.dodajOglasDadilja(this.userEmail, this.opis, this.plata, this.radnoVreme, this.vestine).subscribe()
    else
      this.service.dodajOglasKorisnik(this.userEmail, this.opis, this.plata, this.radnoVreme, this.vestine).subscribe()
  }
}
