import { Component } from "@angular/core";

/**
 * @Selector: Custom Html tag<> selector
 * @TemplateUrl: Points to location of the Components location
 */
@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white;
        }
    `]
})
export class ServerComponent{
    serverId: number = 10;
    serverStatus: String = 'offline'

    getServerStatus(){
        return this.serverStatus;
    }

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}