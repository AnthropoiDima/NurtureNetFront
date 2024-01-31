import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dadilja } from 'src/app/Models/dadilja';
import { Korisnik } from 'src/app/Models/korisnik';
import { Oglas } from 'src/app/Models/oglas';
import { DadiljaService } from 'src/app/Services/dadilja.service';
import { environment } from 'src/environments';

@Component({
  selector: 'app-dadilja',
  templateUrl: './dadilja.component.html',
  styleUrls: ['./dadilja.component.css']
})
export class DadiljaComponent {
  userEmail: string = ""
  isDadilja:boolean = true
  dadilja$: Observable<Dadilja[]> = of([]);
  korisnik$: Observable<Korisnik[]> = of([]);
  
  dadilje: Dadilja[] | null = null;
  korisnik: Korisnik[] | null = null;

  dadilje$: Observable<Dadilja[]> = of([]);
  ime: string = "";
  prezime: string = "";
  email: string = "";
  password: string = "";
  grad: string = "";
  drzava: string = "";
  pol: string = "";
  brojTelefona: string = "";
  datumRodjenja: Date = new Date();
  vestine: string = "";

  objavljeniOglasi$: Observable<Oglas[]> = of([]);
  prijavljeniOglasi$: Observable<Oglas[]> = of([]);
  
  constructor(private dadiljaService: DadiljaService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void { 
    this.userEmail = environment.userEmail
    this.isDadilja = environment.isDadilja
    console.log("user: ", this.userEmail, " isDadilja: ", this.isDadilja)

    if(this.isDadilja)
    {
      this.dadilja$ = this.dadiljaService.preuzmiDadiljuPoEmailu(this.userEmail)

      this.dadilja$.subscribe(dadilja => {
        this.dadilje = dadilja
        console.log("Dadilja: ", this.dadilje, this.isDadilja)
      })

      this.objavljeniOglasi$ = this.dadiljaService.preuzmiOglaseDadilje(this.userEmail)
      console.log("Objavljeni oglasi: ", this.objavljeniOglasi$)
      this.prijavljeniOglasi$ = this.dadiljaService.preuzmiPrijavljeneOglase(this.userEmail)
      console.log("Prijavljeni oglasi: ", this.prijavljeniOglasi$)
    }
    else
    {
      this.korisnik$ = this.dadiljaService.preuzmiKorisnikaPoEmailu(this.userEmail)
      
      this.korisnik$.subscribe(korisnik => {
        this.korisnik = korisnik
        console.log("Korisnik: ", this.korisnik)
      })

      this.objavljeniOglasi$ = this.dadiljaService.preuzmiOglaseKorisnika(this.userEmail)
      this.prijavljeniOglasi$ = this.dadiljaService.preuzmiPrijavljeneOglaseKorisnika(this.userEmail)
      console.log("Objavljeni oglasi: ", this.objavljeniOglasi$)
      console.log("Prijavljeni oglasi: ", this.prijavljeniOglasi$)
    }

    // this.dadilje$ = this.dadiljaService.preuzmiDadilje()

  }

  preuzmiDadilje() {
    this.dadilje$ = this.dadiljaService.preuzmiDadilje();
  }

  // preuzmiDadiljuPoEmailu() { 
  //   this.dadiljaService.preuzmiDadiljuPoEmailu(this.email).subscribe(dadilja => {
  //     this.dadilja = dadilja;
  //     console.log(this.dadilja);
  //     // this.cdr.detectChanges();
  //   });
  // }

  obrisiNalog() {
    this.dadiljaService.obrisiNalog(this.userEmail).subscribe()
  }

  obrisiOglas(id: number | undefined) {
    this.dadiljaService.obrisiOglas(id).subscribe()
  }
}
