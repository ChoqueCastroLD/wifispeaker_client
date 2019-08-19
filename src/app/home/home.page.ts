import { Component } from '@angular/core';
import { AudioretrieverService } from '../services/audioretriever.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  audio;
  ctx;
  constructor() {
    this.audio = new Audio();
    this.ctx = new AudioContext();
  }
  conectar(){
    new WebSocket('ws://localhost:8080')
    .addEventListener("message", payload => {

      let buffer = JSON.parse(payload.data).buf;
      let song = this.ctx.createBuffer(buffer.numberOfChannels, buffer.length, buffer.sampleRate)

      for (var channel = 0; channel < song.numberOfChannels; channel++) {
        for (var i = 0; i < song.length; i++) {
          song.getChannelData(channel)[i] = buffer._channelData[channel][i];
        }
      }

      let source = this.ctx.createBufferSource();
      source.buffer = song;
      source.connect(this.ctx.destination);
      source.start()
      console.log("playing...")
    })
  }
}
