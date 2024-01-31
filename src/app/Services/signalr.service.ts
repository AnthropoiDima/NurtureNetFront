import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  poruke: string[] = [];

  private hubConnection!: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('http://localhost:5201/hub')
                            .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err))
  }
  
  public addMessageListener = () => {
    this.hubConnection.on('ReceiveMessage', (data) => {
        this.poruke = data;
        console.log(data);
      });
    }

    sendMessage(user: string, message: string): void {
      this.hubConnection.invoke('SendMessage', user, message)
          .catch(err => console.error(`Error while invoking SendMessage: ${err}`));
  }
}
