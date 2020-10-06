import { Component, OnInit } from '@angular/core';
import { SiblingserviceService } from '../services/siblingservice.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component implements OnInit {
  messageFromService=this.service.getMessage();
  constructor(private service:SiblingserviceService) { 
    this.service.subscribedObserver.subscribe(data=>{this.messageFromService=data})
  }
  ngOnInit(): void {
  }

}
