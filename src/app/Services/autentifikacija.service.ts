import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentifikacijaService {
  
  private url = "http://localhost:5201/Autentifikacija";
  private clientUrl = "http://localhost:5201/";

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post(this.url+"/Prijavljivanje/", {email, password});
  }

  signup(dadilja: string, email: string, password: string, ime: string, prezime: string, drzava: string, grad: string, brojTelefona: string, datumRodjenja: Date, pol: string, vestine: string) {
    if (dadilja == "true")
      return this.http.post(this.url+"/RegistracijaDadilja/", {ime, prezime, email, password, drzava, grad, datumRodjenja, pol, brojTelefona, vestine});
    else
      return this.http.post(this.url+"/RegistracijaKorisnik/", {ime, prezime, email, password, drzava, grad, pol, datumRodjenja, brojTelefona});
    }
}