import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input() loggedIn : boolean;
  message : string;
  name = 'Vishwas';

/*
  get loggedIn(): boolean {
    return this._loggedIn;
  }

  @Input() set loggedIn(value:boolean){
    this._loggedIn = value;
    if (value === true){
      this.message = 'Welcome back Vishwas'       
    } else {
      this.message = 'Please log in'       
    }
  }
*/
  constructor() { }

  ngOnChanges(changes:SimpleChanges) {
    console.log(changes);

    const loggedInValue = changes['loggedIn'];
    if (loggedInValue.currentValue === true){
      this.message = 'Welcome back';
    } else {
      this.message = 'Please log in';
    }
  }

  greetVishwas(){
    alert('Hey Vishwas!');
  }

}