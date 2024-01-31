import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { DadiljaComponent } from './Components/dadilja/dadilja.component';
import { DadiljaUpdateComponent } from './Components/dadilja-update/dadilja-update.component';
import { AppComponent } from './app.component';
import { OglasComponent } from './Components/oglas/oglas.component';
import { OglasListComponent } from './Components/oglas-list/oglas-list.component';
import { AutentifikacijaComponent } from './Components/autentifikacija/autentifikacija.component';
import { registerLocaleData } from '@angular/common';
import { RegistracijaComponent } from './Components/registracija/registracija.component';
import { OcenaComponent } from './Components/ocena/ocena.component';
import { ChatComponent } from './Components/chat/chat.component';

const routes: Routes = [
  {path: 'profil', component: DadiljaComponent},
  {path: 'izmeni-profil', component: DadiljaUpdateComponent},
  {path: 'oglas', component: OglasComponent},
  {path: 'oglasi', component: OglasListComponent},
  {path: 'login', component: AutentifikacijaComponent},
  {path: 'signup', component: RegistracijaComponent},
  {path: 'oceni', component: OcenaComponent},
  {path: 'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    
  }
}
