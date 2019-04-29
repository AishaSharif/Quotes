import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NgOnChangesFeature } from '@angular/core/src/render3';

@Directive({
  selector: '[appUpvotes]'
})
export class UpvotesDirective {
  constructor(private elem:ElementRef) { }
  
  @HostListener('change') NgOnChangesFeature(){
    this.highlight('yellow')
  }
  private highlight(action:string){
    this.elem.nativeElement.style.backgroundColor = action;
  }
}
