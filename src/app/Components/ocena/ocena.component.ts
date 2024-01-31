import { Component, Input } from '@angular/core';
import { Ocena } from 'src/app/Models/ocena';
import { OcenaService } from 'src/app/Services/ocena.service';

@Component({
  selector: 'app-ocena',
  templateUrl: './ocena.component.html',
  styleUrls: ['./ocena.component.css']
})
export class OcenaComponent {
  @Input() dadilja: boolean = false
  @Input() emailDadilje: string = "marko1@gmail.com"  
  @Input() emailKorisnika: string = "zokib@gmail.com"
  @Input() id: number | undefined = -1
  ocena: Ocena = { id: -1, vrednost: 0, komentar: "" }
  vrednost: number = 0
  komentar: string = ""
  
  constructor(private service: OcenaService) { }

  ngOnInit(): void {
  }

  oceni() {
    this.service.oceniKorisnika(this.emailKorisnika, this.emailDadilje, this.vrednost, this.komentar).subscribe()
    //this.service.oceniDadilju(this.id, this.vrednost, this.komentar).subscribe()
  }
}