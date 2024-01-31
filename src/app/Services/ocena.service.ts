import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OcenaService {

  constructor(private http: HttpClient) { }

  private url = "http://localhost:5201/Ocena";
  private clientUrl = "http://localhost:5201/";

  oceniDadilju(emailKorisnika: string, emailDadilje:string, vrednost: number, komentar: string) {
    return this.http.post(this.url+"/OceniDadilju/" + emailKorisnika + '/' + emailDadilje + '/' + vrednost + '/' + komentar, {});
  }

  oceniKorisnika(emailKorisnika: string, emailDadilje:string, vrednost: number, komentar: string) {
    return this.http.post(this.url+"/OceniKorisnika/" + emailKorisnika + '/' + emailDadilje + '/' + vrednost + '/' + komentar, {});
  }

  preuzmiOceneDadilje(email: string) {
    return this.http.get(this.url+"/PreuzmiOceneDadilje/" + email);
  }

  preuzmiOceneKorisnika(email: string) {
    return this.http.get(this.url+"/PreuzmiOceneKorisnika/" + email);
  }
}
