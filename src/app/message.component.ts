import {Component, Input} from '@angular/core';
import NgForm from '@angular/forms';

@Component({
  selector:"msg",
  templateUrl:"message.component.html",
  styles:[]
})
export class MessageComponent{
  quantity = 1;
  add(){
    ++this.quantity
  }
  products =[];

  @Input() emoji: string;
  onSubmit(f){
    console.log(f);
  }
}