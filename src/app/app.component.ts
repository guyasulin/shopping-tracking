import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ItemService } from './items/services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Shopping Tracking List';

  constructor( public itemService:ItemService) {
    this.itemService.getCurrencyData();
    
  }

  ngOnInit() {
    this.loadScript();
}

  private loadScript() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = 'window["adrum-start-time"] = new Date().getTime(); (function(config){ config.appKey = ' + environment.production + '; })(window["adrum-config"] || (window["adrum-config"] = {}));';
    const head = document.getElementsByTagName('head')[0];
    if (head !== null && head !== undefined) {
      document.head.appendChild(script);
    }
}
}
