import { NewService } from './new.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDependencyInjection';
  emp:any[];
  text:string;
   constructor(private newservice: NewService){}

   ngOnInit(){
     this.text = this.newservice.display()
     this.emp = this.newservice.employee;
   }
}
