import { Component } from '@angular/core';

@Component({
    selector    : 'app-server',
    templateUrl : './server.component.html',
    styles:[`
    online{
        color:white;
    }
    `]
})
export class ServerComponent{
    serverId:number=29;
    serverStatus:string='offline';

    constructor() { 
    this.serverStatus=Math.random() > 0.5 ? 'online' : 'offline';
    }

    ngOnInit(): void {
    }

    getServerstatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus ==='online' ? 'green' : 'red';
    }
}