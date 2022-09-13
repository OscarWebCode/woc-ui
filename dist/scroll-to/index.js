"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WOCScrollTo = void 0;
var WOCScrollTo = /** @class */ (function () {
    function WOCScrollTo(gap) {
        this.gap = gap;
    }
    WOCScrollTo.prototype.scrollTo = function (element) {
        if (!element)
            return;
        window.scrollTo({
            top: element.offsetTop - this.gap,
            behavior: 'smooth',
        });
    };
    return WOCScrollTo;
}());
exports.WOCScrollTo = WOCScrollTo;
