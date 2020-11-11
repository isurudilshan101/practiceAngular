import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title= 'first project';
  name="isuru"
  getName(){
    return this.name
  }

  obj={
    name:'dilshan',
    age:20
  }

  arr=['one','two']
}
