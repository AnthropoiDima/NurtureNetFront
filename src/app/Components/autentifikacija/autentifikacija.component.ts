import { Component } from '@angular/core';
import { AutentifikacijaService } from 'src/app/Services/autentifikacija.service';

@Component({
  selector: 'app-autentifikacija',
  templateUrl: './autentifikacija.component.html',
  styleUrls: ['./autentifikacija.component.css']
})
export class AutentifikacijaComponent {
  email: string = ""
  password: string = ""

  constructor(private service: AutentifikacijaService) { }

  ngOnInit(): void {
  }

  Login() {
    this.service.login(this.email, this.password).subscribe()
  }

}
