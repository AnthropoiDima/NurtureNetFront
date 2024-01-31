import { Component, Input } from '@angular/core';
import { Ocena } from 'src/app/Models/ocena';
import { OcenaService } from 'src/app/Services/ocena.service';
import { environment } from 'src/environments';

@Component({
  selector: 'app-ocena',
  templateUrl: './ocena.component.html',
  styleUrls: ['./ocena.component.css']
})
export class OcenaComponent {
  userEmail: string = ""
  isDadilja: boolean = true
  @Input() emailKorisnika: string = ""
  @Input() idOglasa: number | undefined = -1
  ocena: Ocena = { id: -1, vrednost: 0, komentar: "" }
  vrednost: number = 0
  komentar: string = ""
  
  constructor(private service: OcenaService) { }

  ngOnInit(): void {
    this.userEmail = environment.userEmail
    this.isDadilja = environment.isDadilja
    console.log("user: ", this.userEmail, " isDadilja: ", this.isDadilja)
  }

  oceni() {
    if(!this.isDadilja)
      this.service.oceniKorisnika(this.userEmail, this.emailKorisnika, this.vrednost, this.komentar).subscribe()
    else
      this.service.oceniDadilju(this.emailKorisnika, this.userEmail, this.vrednost, this.komentar).subscribe()
  }
}