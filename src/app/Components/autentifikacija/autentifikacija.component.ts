import { Component } from '@angular/core';
import { AutentifikacijaService } from 'src/app/Services/autentifikacija.service';
import { environment } from 'src/environments';

@Component({
  selector: 'app-autentifikacija',
  templateUrl: './autentifikacija.component.html',
  styleUrls: ['./autentifikacija.component.css']
})
export class AutentifikacijaComponent {
  email: string = ""
  password: string = ""
  dadilja: string = "true"

  constructor(private service: AutentifikacijaService) { }

  ngOnInit(): void {
  }

  Login() {
    environment.userEmail = this.email
    environment.isDadilja = this.dadilja == "true" ? true : false
    this.service.login(this.email, this.password).subscribe()
    console.log(environment.userEmail)
  }

}
