import { Component, OnInit } from '@angular/core';
import { SiblingserviceService } from '../services/siblingservice.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {
  messageFromService=this.service.getMessage();
  constructor(private service:SiblingserviceService) { }
  ngOnInit(): void {
  }
  change(){
    this.service.observer.next("This message is set by Sibling1");
  }

}
