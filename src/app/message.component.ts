import {Component,Input} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector:'msg',
  templateUrl:'message.component.html',
  styles:['h1{font-family:robot,san-serif','h2{color:teal']
})
export class MessageComponent{
  @Input() emoji: string;
  awesome = ' awesome🔥🔥🔥🔥';
  inc(){
    this.awesome +=  ' 💕👄💝💋'
  }
  name;
  prod_name;
  quantity = 1;
  products = ["bread"];
  addprod(f: NgForm){
    this.products.push(f);
  }
  add(){
    ++this.quantity
  }
}