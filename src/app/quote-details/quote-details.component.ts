import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quote:Quote;
  @Output() onDeleteQuote = new EventEmitter<boolean>();
  quoteDelete(index:boolean){
    this.onDeleteQuote.emit(index)
  }
  upvote(){
    this.quote.upvote++;
  }
  downvote(){
    this.quote.downvote++;
  }
  highestUpvote(){
    // let highestVotes = this.quote[0]
    // for (var i = 0; i = this.quote.length; i++){
    //   this.quote.upvote.max()
    // }
  }
  constructor() { }
  ngOnInit() { }
}
