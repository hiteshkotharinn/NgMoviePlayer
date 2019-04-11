import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'A Movie Player';
  playList = 'Play List';
  noVideoPlaying: boolean = true;

  ngOnInit() {
    this.hideTooltipText();
  }

  hideTooltipText() {
    setTimeout(() => {
      this.noVideoPlaying = false;
    }, 6000);
  }

}
