import { Component } from '@angular/core';
import { TickerService } from './ticker.service';
import { TickerMessage } from './tickermessage';

@Component({
    selector: 'ticker',
    template: `
    <div class="ticker">
        <div *ngFor="let message of messages" [style.color]="message.priority == 5 ? 'green' : 'black'">{{message.text}}</div>
    </div>
    `,
})

export class TickerComponent {

    constructor(private tickerService: TickerService) {
        tickerService.tickerFeed.subscribe(
            msg => {this.messages.push(msg);}
        );
    }

    messages: TickerMessage[] = [];
}
