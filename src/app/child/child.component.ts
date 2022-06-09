import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    child ="Saurabh Uchil s/o"
    @Input() childOf: any 
    @Output() brother = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.brother.emit('Brother of Divyashree Uchil')
  }
}
