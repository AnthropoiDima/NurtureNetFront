import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dadilja } from 'src/app/Models/dadilja';
import { Oglas } from 'src/app/Models/oglas';
import { OglasService } from 'src/app/Services/oglas.service';
import { environment } from 'src/environments';

@Component({
  selector: 'app-oglas-list',
  templateUrl: './oglas-list.component.html',
  styleUrls: ['./oglas-list.component.css']
})
export class OglasListComponent {
  @Input() oglasi: Oglas[] | null = null
  userEmail: string = ""
  isDadilja: boolean = true

  oglasi$: Observable<Oglas[]> = of([])
  oglasiDadilja$: Observable<Oglas[]> = of([])
  oglasiKorisnika$: Observable<Oglas[]> = of([])
  pretraziPoGradu: boolean = false
  pretraziPoVestinama: boolean = false
  pretraziPoKorisnicima: boolean = false
  pretraziPoDadiljama: boolean = false
  id: number | undefined = 15
  email: string = "ema@gmail.com"
  grad: string = ""
  
  constructor(private service: OglasService) { }

  ngOnInit(): void {
    this.preuzmiOglase()

    this.userEmail = environment.userEmail
    this.isDadilja = environment.isDadilja
    console.log("user: ", this.userEmail, " isDadilja: ", this.isDadilja)
  }

  preuzmiOglase() {
    this.oglasi$ = this.service.preuzmiOglase()
    this.oglasiDadilja$ = this.service.preuzmiSveOglaseDadilja()
    this.oglasiKorisnika$ = this.service.preuzmiSveOglaseKorisnika()
  }

  preuzmiOglasePoGradu() {
    if(this.isDadilja)
      this.oglasi$ = this.service.preuzmiOglasePoGraduKorisnika(this.grad)
    else
      this.oglasi$ = this.service.preuzmiOglasePoGraduDadilje(this.grad)
  }

  preuzmiOglasePoVestinama() {
    this.oglasi$ = this.service.pretraziOglasePoVestinama(this.userEmail)
  }

  rezervisiOglas(id: number | undefined)
  {
    if(this.isDadilja)
      this.service.rezervisiOglasDadilja(this.userEmail, id).subscribe()
    else
      this.service.rezervisiOglasKorisnik(this.userEmail, id).subscribe()
  }
}
