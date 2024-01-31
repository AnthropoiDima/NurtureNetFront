import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/Services/chat.service';
import { OcenaService } from 'src/app/Services/ocena.service';
import { SignalrService } from 'src/app/Services/signalr.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  @Input() idOglasa: number = -1
  @Input() emailKorisnika: string = ""
  @Input() emailSagovornika: string = ""
  poslatePoruke$: Observable<string> = new Observable<string>()
  primljenePoruke$: Observable<string> = new Observable<string>()
  poruka: string = ""
  
  constructor(private service: ChatService, private signalRService: SignalrService) { }

  ngOnInit(): void {
    this.signalRService.startConnection()
  }

  sendMessage(emailSagovornika: string, poruka: string) 
  {
    this.signalRService.sendMessage(this.emailSagovornika, poruka)
  }

}