import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'MyFirstApp';
  owner ='Ms.Amruta Kasar Shewale';
 fname='';
lname='';
ngOnInit(){
    this.fname='Rahul',
this.lname='Shewale'
  }
}
