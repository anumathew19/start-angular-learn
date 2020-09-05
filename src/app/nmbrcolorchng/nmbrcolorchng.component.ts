import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nmbrcolorchng',
  templateUrl: './nmbrcolorchng.component.html',
  styleUrls: ['./nmbrcolorchng.component.css']
})
export class NmbrcolorchngComponent implements OnInit {
showSecret= false;
log= [];
  constructor() { }

  ngOnInit(): void {
  }
onToggleDetail(){
  this.showSecret=!this.showSecret;
  this.log.push(this.log.length+1)
}
}
