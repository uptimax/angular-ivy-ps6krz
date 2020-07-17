import {Component, Input} from '@angular/core';
import NgForm from '@angular/forms';

Component({
  selector:"msg",
  templateUrl:"message.component.html",
  styles:[]
})
export class MessageComponent{
  @Input() emoji: string;
  onSubmit(f: NgForm){
    console.log(f);
  }
}