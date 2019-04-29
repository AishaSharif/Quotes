import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpvotes]'
})
export class UpvotesDirective {
  constructor(private elem:ElementRef) { }
  // @HostListener('highestUpvote'){
  //   this.backgroundColor('red')
  // }
  // private highligh(action:string){
  //   this.elem.nativeElement.style.backgroundColor = action;
  // }
}
