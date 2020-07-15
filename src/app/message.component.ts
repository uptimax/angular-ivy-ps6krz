import {Component,Input} from '@angular/core'

@Component({
  selector:'msg',
  templateUrl:'message.component.html',
  styles:['h1{font-family:robot,san-serif']
})
export class MessageComponent{
  @Input() emoji: string;
}