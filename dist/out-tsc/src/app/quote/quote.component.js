import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Quote } from '../quote';
var QuoteComponent = /** @class */ (function () {
    // deleteQuote(quote){
    //   this.quotes.splice(index, 1)
    // }
    // deleteQuote(quote){
    //   if (toDelete){
    //   }
    // }
    function QuoteComponent() {
        this.quotes = [
            new Quote(1, "jane doe", "Robert A. Heinlein", "They didn't want it good, they wanted it Wednesday")
        ];
    }
    QuoteComponent.prototype.addNewQuote = function (quote) {
        var quoteLength = this.quotes.length;
        quote.id = quoteLength + 1;
        this.quotes.push(quote);
    };
    QuoteComponent.prototype.deleteQuote = function (quote) {
        if (onDeleteQuote) {
            var toDelete = confirm('Are you sure you want to delete this quote?');
            if (toDelete) {
                this.quotes.splice(index, 1);
            }
        }
    };
    QuoteComponent.prototype.ngOnInit = function () { };
    QuoteComponent = tslib_1.__decorate([
        Component({
            selector: 'app-quote',
            templateUrl: './quote.component.html',
            styleUrls: ['./quote.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], QuoteComponent);
    return QuoteComponent;
}());
export { QuoteComponent };
//# sourceMappingURL=quote.component.js.map