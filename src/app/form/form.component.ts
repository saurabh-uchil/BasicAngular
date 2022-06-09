import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name = 'Saurabh'
  isHidden = true
  styleClass = 'bold';
  val1 = true;
  val2 = true;
  val3 = true;
  myStyle={
    color:'orange',
    fontWeight:'bold',
    background:'yellow'
  }

  constructor() { }

  ngOnInit(): void {
  }

  greet(){
    return "Hello " + this.name
  }
  addClass(){
    let myClass = {class1: this.val1, class2: this.val2, class3: this.val3 }
    return myClass
  }

  
}
