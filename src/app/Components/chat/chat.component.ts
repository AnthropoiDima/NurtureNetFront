import { Component, Input } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { Observable, of } from 'rxjs';
import { Poruka } from 'src/app/Models/poruka';
import { ChatService } from 'src/app/Services/chat.service';
import { OcenaService } from 'src/app/Services/ocena.service';
import { SignalrService } from 'src/app/Services/signalr.service';
import { environment } from 'src/environments';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  @Input() idOglasa: number = -1
  @Input() emailSagovornika: string = ""
  poslatePoruke$: Observable<string> = new Observable<string>()
  primljenePoruke$: Observable<string> = new Observable<string>()
  poruka: string = ""

  private connection!: signalR.HubConnection
  userEmail: string = "";
  isDadilja: boolean = true;

  roomName: string = ""
  poruke$: Observable<Poruka[]> = of([])

  constructor(private service: ChatService, private signalRService: SignalrService) { }

  ngOnInit(): void {
    this.userEmail = environment.userEmail
    this.emailSagovornika=environment.sagovornik
    this.isDadilja = environment.isDadilja
    console.log("user: ", this.userEmail, " isDadilja: ", this.isDadilja)

    this.signalRService.startConnection()
    
    // this.signalRService.sendMessage(this.userEmail, this.emailSagovornika, "caooo")

    this.joinRoom()
    // this.joinRoom(this.emailSagovornika, "")
    this.preuzmiPoruke(this.userEmail, this.emailSagovornika)
  }

  async sendMessage()
  {
    await this.connection.invoke('SendMessage', this.userEmail + ': ' + this.poruka)
    this.preuzmiPoruke(this.userEmail, this.emailSagovornika)
    // this.signalRService.sendMessage(this.userEmail, this.emailSagovornika, poruka)
    //   .subscribe(res => {
    //     console.log(res);
    //   })
  }

//   async sendMessage(message: string, emailSender: string, userOrGroupName: string, isGroup: boolean) {
//     //userOrGroupName je ili ime usera, ili id grupe
//     await this.connection.invoke('SendMessage', message)
//     if (isGroup) {
//         const idGroupString = userOrGroupName
//         // await this.signalRService.AddGroupMessage(
//         //     emailSender,
//         //     idGroupString,
//         //     message
//         // )
//     } else {
//         // const idReceiver = (
//         //     await UserService.getUserIdByUsername(userOrGroupName)
//         // ).data
//         // await MessageService.AddDirectMessage(emailSender, idReceiver, message)
//     }
// }

  async joinRoom() {
    try {
        this.roomName = (this.userEmail < this.emailSagovornika) ? this.userEmail + this.emailSagovornika : this.emailSagovornika + this.userEmail
        const connection = new HubConnectionBuilder()
            .withUrl('http://localhost:5201/hub')
            .build()

        connection.on('ReceiveMessage', (user, message) => {
            console.log('message received: ', message)
            // setMessages((messages) => [...messages, { user, message }])
        })

        await connection.start()
        this.connection = connection
        await connection.invoke('JoinRoom', this.userEmail, this.roomName)
        // setConnection(connection)
    } catch (e) {
        console.log(e)
    }
  }

  preuzmiPoruke(emailSender: string, emailReceiver: string) {
      this.poruke$ = this.signalRService.preuzmiPoruke(this.userEmail, this.emailSagovornika)
   }

}