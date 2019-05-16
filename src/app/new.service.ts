import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  employee:any[];

  constructor() { 
    this.employee=[
      {empcode:'001', name:'amit'},
      {empcode:'002', name:'akash'},
      {empcode:'003', name:'ravi'},
    ]
  }
  display(){
    return "Hello World"
  }
}
