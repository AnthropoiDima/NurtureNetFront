import { Component } from '@angular/core';
import { SignalrService } from './Services/signalr.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public signalRService: SignalrService, private http: HttpClient) {}
  title = 'NurtureNet';

  ngOnInit(): void {
    // this.signalRService.startConnection();
    // this.signalRService.addMessageListener();   
    // this.startHttpRequest();
  }

  // private startHttpRequest = () => {
  //   this.http.post('http://localhost:5201/Poruka/PosaljiPoruku/' + 'ema@gmail.com', {
  //     sadrzaj: "cao",
  //     timeStamp: "2024-01-31T00:31:55.119Z"
  //   })
  //     .subscribe(res => {
  //       console.log(res);
  //     })
  // }
}