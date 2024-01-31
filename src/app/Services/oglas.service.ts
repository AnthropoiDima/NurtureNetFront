import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oglas } from '../Models/oglas';

@Injectable({
  providedIn: 'root'
})
export class OglasService {
  private url = "http://localhost:5201/Oglas";
  private clientUrl = "http://localhost:5201/";

  constructor(private http: HttpClient) { }

  preuzmiOglase() {
    return this.http.get<Oglas[]>(this.url+"/PreuzmiOglase");
  }

  dodajOglas(oglas: Oglas) {
    return this.http.post(this.url+"/DodajOglas/", oglas);
  }

  dodajOglasFromBody(oglas: Oglas) {
    return this.http.post<Oglas>(this.url+"/DodajOglasFromBody/", oglas);
  }

  obrisiOglas(id: number | undefined) {
    return this.http.delete(this.url+"/ObrisiOglas/" + id);
  }

  preuzmiOglaseDadilja()
  {
    return this.http.get<Oglas[]>(this.url+"/PreuzmiOglaseDadilja");
  }

  preuzmiOglaseKorisnika()
  {
    return this.http.get<Oglas[]>(this.url+"/PreuzmiOglaseKorisnika");
  }

  preuzmiOglasePoGraduDadilje(grad: string)
  {
    return this.http.get<Oglas[]>(this.url+"/PretraziPoGraduDadilje/" + grad);
  }

  preuzmiOglasePoGraduKorisnika(grad: string)
  {
    return this.http.get<Oglas[]>(this.url+"/PretraziPoGraduKorisnika/" + grad);
  }

  pretraziOglasePoVestinama(email: string)
  {
    return this.http.get<Oglas[]>(this.url+"/PretraziOglasePoVestinama/" + email);
  }

  pretraziDadiljePoVestinama(id: string)
  {
    return this.http.get<Oglas[]>(this.url+"/PretraziDadiljePoVestinama/" + id);
  }

  rezervisiOglasKorisnik(email:string, id: number)
  {
    return this.http.put(this.clientUrl + "Korisnik/RezervisiOglas/" + email + "/" + id, {});
  }

  rezervisiOglasDadilja(email:string, id: number | undefined)
  {
    return this.http.put(this.clientUrl + "Dadilja/RezervisiOglas/" + email + "/" + id, {});
  }

  dodajOglasDadilja(email:string, opis: string, plata: number, radnoVreme: string, vestine: string)
  {
    return this.http.post(this.clientUrl + "Dadilja/DodajOglasDadilja/" + email + '/' + opis + '/' + plata + '/' + radnoVreme + '/' + vestine, {});
  }
}
