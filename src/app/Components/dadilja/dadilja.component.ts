import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dadilja } from 'src/app/Models/dadilja';
import { Oglas } from 'src/app/Models/oglas';
import { DadiljaService } from 'src/app/Services/dadilja.service';

@Component({
  selector: 'app-dadilja',
  templateUrl: './dadilja.component.html',
  styleUrls: ['./dadilja.component.css']
})
export class DadiljaComponent {
  dadilja$: Observable<Dadilja[]> = of([]);
  dadilja: Dadilja | null = null;
  dadilje: Dadilja[] | null = null;
  dadilje$: Observable<Dadilja[]> = of([]);
  ime: string = "";
  prezime: string = "";
  email: string = "ema@gmail.com";
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
    this.dadilja$ = this.dadiljaService.preuzmiDadiljuPoEmailu("ema@gmail.com")
    this.dadilja$.subscribe(dadilja => {
      this.dadilje = dadilja
      console.log(this.dadilja)
    })
    // this.dadilja$.subscribe(dadilja => {
    //   this.dadilja = dadilja;
    //   console.log(this.dadilja);
    // })

    this.dadilje$ = this.dadiljaService.preuzmiDadilje()

    this.objavljeniOglasi$ = this.dadiljaService.preuzmiOglaseDadilje(this.email)
    this.prijavljeniOglasi$ = this.dadiljaService.preuzmiPrijavljeneOglase(this.email)
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
    this.dadiljaService.obrisiNalog("dim@gmail.com").subscribe()
  }

  obrisiOglas(id: number | undefined) {
    this.dadiljaService.obrisiOglas(id).subscribe()
  }
}
