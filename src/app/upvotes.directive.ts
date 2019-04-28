import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUpvotes]'
})
export class UpvotesDirective {
  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor = "red";
  }
}
