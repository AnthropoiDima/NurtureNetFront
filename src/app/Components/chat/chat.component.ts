import { Component, Input } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { HubConnectionBuilder } from '@microsoft/signalr';
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
  @Input() emailKorisnika: string = "ema@gmail.com"
  @Input() emailSagovornika: string = "marko1@gmail.com"
  poslatePoruke$: Observable<string> = new Observable<string>()
  primljenePoruke$: Observable<string> = new Observable<string>()
  poruka: string = ""

  private connection!: signalR.HubConnection

  constructor(private service: ChatService, private signalRService: SignalrService) { }

  ngOnInit(): void {
    this.signalRService.startConnection()
    
    this.signalRService.sendMessage(this.emailKorisnika, this.emailSagovornika, "caooo")

    this.joinRoom(this.emailKorisnika, "")
    // this.joinRoom(this.emailSagovornika, "")
  }

  async sendMessage(emailKorisnika:string, emailSagovornika: string, poruka: string) 
  {
    await this.connection.invoke('SendMessage', poruka)
    this.signalRService.sendMessage(this.emailKorisnika, this.emailSagovornika, poruka)
      .subscribe(res => {
        console.log(res);
      })
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

async joinRoom(emailKorisnika: string, roomName: string) {
    try {
        roomName = "ema@gmail.commarko1@gmail.com"
        const connection = new HubConnectionBuilder()
            .withUrl('http://localhost:5201/hub')
            .build()

        connection.on('ReceiveMessage', (user, message) => {
            console.log('message received: ', message)
            // setMessages((messages) => [...messages, { user, message }])
        })

        await connection.start()
        this.connection = connection
        await connection.invoke('JoinRoom', emailKorisnika, roomName)
        // setConnection(connection)
    } catch (e) {
        console.log(e)
    }
}


}