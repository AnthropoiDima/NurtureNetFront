import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dadilja } from '../../Models/dadilja';
import { DadiljaService } from '../../Services/dadilja.service';

@Component({
  selector: 'app-dadilja-update',
  templateUrl: './dadilja-update.component.html',
  styleUrls: ['./dadilja-update.component.css']
})
export class DadiljaUpdateComponent {
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

  }

  // pronadjiDadilju(email: string) {
  //   this.service.preuzmiDadiljuPoEmailu(email).subscribe(
  //     (dadilja) => {
  //       this.dadilja$=of(dadilja)
  //     }
  //   )
  // }

  izmeniLozinku() {
    this.service.izmeniLozinku(this.email, this.lozinka).subscribe()
  }
}
