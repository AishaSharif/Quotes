import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
var QuoteFormComponent = /** @class */ (function () {
    function QuoteFormComponent() {
        this.newQuote = new Quote(0, "", "", "");
        this.addQuote = new EventEmitter();
    }
    QuoteFormComponent.prototype.submitQuote = function () {
        this.addQuote.emit(this.newQuote);
    };
    QuoteFormComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], QuoteFormComponent.prototype, "addQuote", void 0);
    QuoteFormComponent = tslib_1.__decorate([
        Component({
            selector: 'app-quote-form',
            templateUrl: './quote-form.component.html',
            styleUrls: ['./quote-form.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], QuoteFormComponent);
    return QuoteFormComponent;
}());
export { QuoteFormComponent };
//# sourceMappingURL=quote-form.component.js.map