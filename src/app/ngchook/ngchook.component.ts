import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ngchook',
  templateUrl: './ngchook.component.html',
  styleUrls: ['./ngchook.component.css']
})
export class NgchookComponent implements  OnChanges {
  @Input() message:any
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for (let propertyName in changes){
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      console.log(propertyName+ ': currentValue = ' +current + ': previousValue = ' + previous); 
    }
  }


}
