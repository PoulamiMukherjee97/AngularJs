import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject'

@Injectable({
  providedIn: 'root'
})
export class SiblingserviceService {
  private message="This is the initial message";
  public observer = new Subject<string>();
  public subscribedObserver = this.observer.asObservable();
  
  constructor() { }
  getMessage(){return this.message}
  setMessage(msg){this.observer.next(msg);}
}
