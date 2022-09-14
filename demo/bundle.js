/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WOCScrollTo = void 0;
var scroll_to_1 = __webpack_require__(/*! ./scroll-to */ "./src/scroll-to/index.ts");
Object.defineProperty(exports, "WOCScrollTo", ({ enumerable: true, get: function () { return scroll_to_1.WOCScrollTo; } }));


/***/ }),

/***/ "./src/scroll-to/index.ts":
/*!********************************!*\
  !*** ./src/scroll-to/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WOCScrollTo = void 0;
var WOCScrollTo = /** @class */ (function () {
    function WOCScrollTo(options) {
        this.options = options;
        this._behavior = 'smooth';
        this._gap = (options === null || options === void 0 ? void 0 : options.gap) || 0;
    }
    WOCScrollTo.prototype.scrollTo = function (element) {
        if (!element) {
            throw new Error('The element should be HTMLElement');
        }
        if (window && window.hasOwnProperty('scrollTo')) {
            window.scrollTo({
                top: element.offsetTop - this._gap,
                behavior: this._behavior,
            });
        }
    };
    return WOCScrollTo;
}());
exports.WOCScrollTo = WOCScrollTo;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***********************!*\
  !*** ./demo/index.ts ***!
  \***********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var index_1 = __webpack_require__(/*! ../src/index */ "./src/index.ts");
var DemoPage = /** @class */ (function () {
    function DemoPage() {
        console.log('constructor');
        this._initScroll();
    }
    DemoPage.prototype._initScroll = function () {
        console.log(index_1.WOCScrollTo);
        var wocScroll = new index_1.WOCScrollTo();
        var element = document.getElementById('scroll');
        setTimeout(function () { return wocScroll.scrollTo(element); }, 2000);
    };
    return DemoPage;
}());
window.onload = function () {
    new DemoPage();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBMEM7QUFBakMsb0hBQVc7Ozs7Ozs7Ozs7Ozs7O0FDR3BCO0lBR0UscUJBQW1CLE9BQTRCO1FBQTVCLFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBRHZDLGNBQVMsR0FBbUIsUUFBUSxDQUFDO1FBRTNDLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLEdBQUcsS0FBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNNLDhCQUFRLEdBQWYsVUFBZ0IsT0FBb0I7UUFDbEMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDL0MsTUFBTSxDQUFDLFFBQVEsQ0FBQztnQkFDZCxHQUFHLEVBQUUsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSTtnQkFDbEMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTO2FBQ3pCLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQztBQWpCWSxrQ0FBVzs7Ozs7OztVQ0h4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEsd0VBQTJDO0FBQzNDO0lBQ0U7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sOEJBQVcsR0FBbkI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFXLENBQUMsQ0FBQztRQUN6QixJQUFNLFNBQVMsR0FBRyxJQUFJLG1CQUFXLEVBQUUsQ0FBQztRQUNwQyxJQUFNLE9BQU8sR0FBZ0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQWdCLENBQUM7UUFDOUUsVUFBVSxDQUFDLGNBQU0sZ0JBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDO0FBRUQsTUFBTSxDQUFDLE1BQU0sR0FBRztJQUNkLElBQUksUUFBUSxFQUFFLENBQUM7QUFDakIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd29jLXVpLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3dvYy11aS8uL3NyYy9zY3JvbGwtdG8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd29jLXVpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dvYy11aS8uL2RlbW8vaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgV09DU2Nyb2xsVG8gfSBmcm9tICcuL3Njcm9sbC10byc7XG4iLCJleHBvcnQgdHlwZSBXT0NTY3JvbGxUb09wdGlvbnMgPSB7XG4gIGdhcDogbnVtYmVyO1xufTtcbmV4cG9ydCBjbGFzcyBXT0NTY3JvbGxUbyB7XG4gIHByaXZhdGUgX2dhcDogbnVtYmVyO1xuICBwcml2YXRlIF9iZWhhdmlvcjogU2Nyb2xsQmVoYXZpb3IgPSAnc21vb3RoJztcbiAgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM/OiBXT0NTY3JvbGxUb09wdGlvbnMpIHtcbiAgICB0aGlzLl9nYXAgPSBvcHRpb25zPy5nYXAgfHwgMDtcbiAgfVxuICBwdWJsaWMgc2Nyb2xsVG8oZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGVsZW1lbnQgc2hvdWxkIGJlIEhUTUxFbGVtZW50Jyk7XG4gICAgfVxuICAgIGlmICh3aW5kb3cgJiYgd2luZG93Lmhhc093blByb3BlcnR5KCdzY3JvbGxUbycpKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IGVsZW1lbnQub2Zmc2V0VG9wIC0gdGhpcy5fZ2FwLFxuICAgICAgICBiZWhhdmlvcjogdGhpcy5fYmVoYXZpb3IsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBXT0NTY3JvbGxUbyB9IGZyb20gJy4uL3NyYy9pbmRleCc7XG5jbGFzcyBEZW1vUGFnZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RvcicpO1xuICAgIHRoaXMuX2luaXRTY3JvbGwoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2luaXRTY3JvbGwoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coV09DU2Nyb2xsVG8pO1xuICAgIGNvbnN0IHdvY1Njcm9sbCA9IG5ldyBXT0NTY3JvbGxUbygpO1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njcm9sbCcpIGFzIEhUTUxFbGVtZW50O1xuICAgIHNldFRpbWVvdXQoKCkgPT4gd29jU2Nyb2xsLnNjcm9sbFRvKGVsZW1lbnQpLCAyMDAwKTtcbiAgfVxufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBuZXcgRGVtb1BhZ2UoKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=