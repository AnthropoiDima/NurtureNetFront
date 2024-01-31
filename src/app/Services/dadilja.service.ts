import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dadilja } from '../Models/dadilja';
import { Observable } from 'rxjs';
import { Oglas } from '../Models/oglas';

@Injectable({
  providedIn: 'root'
})
export class DadiljaService {
  private url = "http://localhost:5201/Dadilja";
  private api = "http://localhost:5201";
  
  constructor(private http: HttpClient) { }

  preuzmiDadilje() {
    return this.http.get<Dadilja[]>(this.url+"/PreuzmiDadilje");
  }

  preuzmiEmailKorisnika() {
    return this.http.get<string>(this.api+"/Autentifikacija/PreuzmiEmailKorisnika");
  }

  preuzmiDadiljuPoEmailu(email: string) {
    return this.http.get<Dadilja[]>(this.url+"/PreuzmiDadiljuPoEmailu/" + email);
  }

  izmeniLozinku(email: string, lozinka: string): Observable<any> {
    return this.http.put("http://localhost:5201/Dadilja/IzmeniLozinku/" + email + "/" + lozinka, { });
  }
  
  obrisiNalog(email: string) {
    return this.http.delete(this.url+"/ObrisiDadilju/" + email);
  }

  preuzmiOglaseDadilje(email: string) {
    return this.http.get<Oglas[]>(this.api+"/Oglas/PreuzmiOglaseDadilje/" + email);
  }

  preuzmiPrijavljeneOglase(email: string) {
    return this.http.get<Oglas[]>(this.url+"/PreuzmiPrijavljeneOglase/" + email);
  }

  obrisiOglas(id: number | undefined) {
    return this.http.delete(this.api+"Oglas/ObrisiOglas/" + id);
  }
}
