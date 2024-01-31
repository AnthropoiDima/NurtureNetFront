import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DadiljaComponent } from './Components/dadilja/dadilja.component';
import { DadiljaService } from './Services/dadilja.service';
import { DadiljaUpdateComponent } from './Components/dadilja-update/dadilja-update.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { OglasComponent } from './Components/oglas/oglas.component';
import { OglasListComponent } from './Components/oglas-list/oglas-list.component';
import { AutentifikacijaComponent } from './Components/autentifikacija/autentifikacija.component';
import { RegistracijaComponent } from './Components/registracija/registracija.component';
import { OcenaComponent } from './Components/ocena/ocena.component';
import { ChatComponent } from './Components/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    DadiljaComponent,
    DadiljaUpdateComponent,
    OglasComponent,
    OglasListComponent,
    AutentifikacijaComponent,
    RegistracijaComponent,
    OcenaComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatRadioModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
