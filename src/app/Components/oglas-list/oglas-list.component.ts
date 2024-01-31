import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dadilja } from 'src/app/Models/dadilja';
import { Oglas } from 'src/app/Models/oglas';
import { OglasService } from 'src/app/Services/oglas.service';

@Component({
  selector: 'app-oglas-list',
  templateUrl: './oglas-list.component.html',
  styleUrls: ['./oglas-list.component.css']
})
export class OglasListComponent {
  @Input() oglasi: Oglas[] | null = null
  @Input() dadilja: Dadilja | null = null
  oglasi$: Observable<Oglas[]> = of([])
  @Input() pretraziPoGradu: boolean = false
  @Input() pretraziPoVestinama: boolean = false
  @Input() pretraziPoKorisnicima: boolean = false
  @Input() pretraziPoDadiljama: boolean = false
  id: number | undefined = 15
  email: string = "ema@gmail.com"
  grad: string = ""
  
  constructor(private service: OglasService) { }

  ngOnInit(): void {
    this.oglasi$ = this.service.preuzmiOglase()
  }

  preuzmiOglase() {
    this.oglasi$ = this.service.preuzmiOglase()
  }

  preuzmiOglasePoGradu() {
    this.oglasi$ = this.service.preuzmiOglasePoGraduDadilje(this.grad)
  }

  preuzmiOglasePoVestinama() {
    this.oglasi$ = this.service.pretraziOglasePoVestinama("ema@gmail.com")
  }

  rezervisiOglasDadilja(email:string, id: number | undefined)
  {
    this.service.rezervisiOglasDadilja(email, id).subscribe()
  }
}
