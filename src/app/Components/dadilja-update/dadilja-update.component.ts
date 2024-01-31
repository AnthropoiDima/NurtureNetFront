import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dadilja } from '../../Models/dadilja';
import { DadiljaService } from '../../Services/dadilja.service';
import { environment } from 'src/environments';

@Component({
  selector: 'app-dadilja-update',
  templateUrl: './dadilja-update.component.html',
  styleUrls: ['./dadilja-update.component.css']
})
export class DadiljaUpdateComponent {
  userEmail: string = ""
  isDadilja: boolean = true
  dadilja$: Observable<Dadilja> = of()
  ime = ""
  prezime = ""
  email = "ema@gmail.com"
  grad = ""
  drzava = ""
  broj = ""
  lozinka = ""

  constructor(private service: DadiljaService) { }

  ngOnInit(): void {
    this.userEmail = environment.userEmail
    this.isDadilja = environment.isDadilja
    console.log("user: ", this.userEmail, " isDadilja: ", this.isDadilja)
  }

  // pronadjiDadilju(email: string) {
  //   this.service.preuzmiDadiljuPoEmailu(email).subscribe(
  //     (dadilja) => {
  //       this.dadilja$=of(dadilja)
  //     }
  //   )
  // }

  izmeniLozinku() {
    if(this.isDadilja)
      this.service.izmeniLozinkuDadilja(this.email, this.lozinka).subscribe()
    else
      this.service.izmeniLozinkuKorisnik(this.email, this.lozinka).subscribe()
  }
}