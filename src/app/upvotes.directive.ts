import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpvotes]'
})
export class UpvotesDirective {
  constructor(private elem:ElementRef) { }
  @HostListener('click') highestUpvote(){
    this.highlight('red')
  }
  private highlight(action:string){
    this.elem.nativeElement.style.backgroundColor = action;
  }
}
