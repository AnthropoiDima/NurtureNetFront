import { Component } from '@angular/core';
import { AutentifikacijaService } from 'src/app/Services/autentifikacija.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent {
  dadilja: string = ""
  email: string = ""
  password: string = ""
  ime: string = ""
  prezime: string = ""
  drzava: string = ""
  grad: string = ""
  brojTelefona: string = ""
  datumRodjenja: Date = new Date()
  pol: string = ""
  vestine: string = ""

  constructor(private service: AutentifikacijaService) { }

  ngOnInit(): void {
  }

  SignUp() {
    this.service.signup(this.dadilja, this.email, this.password, this.ime, this.prezime, this.drzava, this.grad, this.brojTelefona, this.datumRodjenja, this.pol, this.vestine).subscribe()
  }
}
