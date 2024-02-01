import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Observable } from 'rxjs';
import { Poruka } from '../Models/poruka';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  poruke: string[] = [];
  url = "http://localhost:5201/";

  constructor(private http: HttpClient) { }

  private hubConnection!: signalR.HubConnection;
  messages: string[] = [];

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
      this.messages.push(data);
      this.poruke = data;
      console.log('Received message: ' + data);
      });
  }

  sendMessage(emailSender: string, emailReceiver: string, message: string) {
    //  this.hubConnection.invoke('ReceiveMessage', user, message)
    //     .catch(err => console.error(`Error while invoking SendMessage: ${err}`));
    return this.http.post(this.url + "Poruka/PosaljiPoruku/" + emailSender + '/' + emailReceiver, {
      sadrzaj: message,
      timeStamp: new Date()
    })
  }

  preuzmiPoruke(emailSender: string, emailReceiver: string) {
    return this.http.get<Poruka[]>(this.url + "Poruka/PreuzmiPoruke/" + emailSender + '/' + emailReceiver);
  }
}