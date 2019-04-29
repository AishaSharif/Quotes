import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
var QuoteDetailsComponent = /** @class */ (function () {
    function QuoteDetailsComponent() {
        this.onDeleteQuote = new EventEmitter();
    }
    QuoteDetailsComponent.prototype.quoteDelete = function (toDelete) {
        this.onDeleteQuote.emit(toDelete);
    };
    QuoteDetailsComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], QuoteDetailsComponent.prototype, "onDeleteQuote", void 0);
    QuoteDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-quote-details',
            templateUrl: './quote-details.component.html',
            styleUrls: ['./quote-details.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], QuoteDetailsComponent);
    return QuoteDetailsComponent;
}());
export { QuoteDetailsComponent };
//# sourceMappingURL=quote-details.component.js.map