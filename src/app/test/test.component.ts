import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input('parentData') parentName : any
  @Output() childEvent = new EventEmitter() 
  constructor() { }

  ngOnInit(): void {
  }
  
  fireEvent(){
    this.childEvent.emit('Passing hello from child to parent!!')
  }
}
