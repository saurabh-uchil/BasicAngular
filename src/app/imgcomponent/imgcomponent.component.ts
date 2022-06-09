import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imgcomponent',
  templateUrl: './imgcomponent.component.html',
  styleUrls: ['./imgcomponent.component.css']
})
export class ImgcomponentComponent implements OnInit {
  bold =  true;
  italic = true;
  greetings = ""
  myinput = "Saurabh Uchil"
  isTrue = true
  color = 'orange'

  players = [{index:1,pname:'ronaldo'},{index:2,pname:'messi'} , {index:3,pname:'lewandowski'}, {index:4,pname:'mbappe'}, {index:'5',pname:'salah'}]
  constructor() { }


  ngOnInit(): void {
  }

  addClass(){
    let myclass = {
      isbold:this.bold,
      isItalic: this.italic
    }

    return myclass
  }
  
  onClick(input: any){  
    this.greetings = input.value
  }

  addData(){
    //this.players.push('neymar')
    console.log(this.players)
  }

  trackByIndex(index:number, player:any){
    return player.index
  }
}
