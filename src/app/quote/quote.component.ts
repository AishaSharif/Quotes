import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, "jane doe", "Robert A. Heinlein", "They didn't want it good, they wanted it Wednesday")
  ]
  constructor() { }
  ngOnInit() { }

}
