import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [ ]
  addQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }
  deleteQuote(onDeleteQuote, index){
    if(onDeleteQuote){
      let toDelete = confirm('Are you sure you want to delete this quote?')
      if (toDelete){
        this.quotes.splice(index, 1);
      }
    }
  }
  highlightQoute(){
    for (var i = 0; i = this.quotes.length; i++){
      if (this.quotes[i].upvote > this.quotes[i].highestUpvoted){
        this.quotes[i].highestUpvoted = this.quotes[i].upvote
      }
    }  
  }
  constructor() { }
  ngOnInit() { }
}
