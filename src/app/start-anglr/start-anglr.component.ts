import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-anglr',
  templateUrl: './start-anglr.component.html',
  styleUrls: ['./start-anglr.component.css']
})
export class StartAnglrComponent implements OnInit {
allownewuser=false;
serverStatus= "No server was created!";
serverName='';
  constructor() {
    setTimeout(()=>{this.allownewuser=true},2000)
   }

  ngOnInit(): void {
  }

oncreateserver(){
  this.serverStatus='server was created! Name is '+ this.serverName;
}

onUpdateServerName(event:Event){
  console.log(event);
  this.serverName= (<HTMLInputElement>event.target).value;

}

}
