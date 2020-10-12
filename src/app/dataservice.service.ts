import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }
  getStudents(){
    return this.http.get('https://jsonblob.com/api/d4928e74-0c7a-11eb-89ae-138e6d087ec0')
    
  }
  getComments()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/comments');

  }

}
