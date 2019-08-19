import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioretrieverService {
  socket: WebSocket;
  
  constructor(port: String) {
    this.socket = new WebSocket(`ws://localhost:${port}`);
  }

  newListener(listener: Function){
    this.socket.addEventListener("message", data => {
      listener(data.data)
    })
  }
}
