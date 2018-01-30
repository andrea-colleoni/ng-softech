import { Component } from '@angular/core';
import { NgZone } from '@angular/core';

function _window() : any {
  // return the global native browser window object
  return window;
}

@Component({
  selector: 'ngjs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngjs';

  constructor(private zone : NgZone) {
    window['mioComponente'] = {
      zone: this.zone,
      funzComp: (value) => this.funzioneInComponente(value),
      component: this
    }
  }

  clickImmagine() {
    console.log('dentro NG');
    _window().miaFunzione();
    _window().$.each([1,2,3], function(i, x) {console.log(i); });
  }

  funzioneInComponente(param) {
    console.log('dentro il componenent => ' + param);
  }
}
