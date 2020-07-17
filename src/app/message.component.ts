import Component from '@angular/core'
import NgForm from '@angular/forms'

Component({
  selector:"form",
  templateUrl:"message.component.html",
  styles:[]
})
export class MessageComponent{
  onSubmit(f: NgForm){
    console.log(f);
  }
}