/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/career/resume/view.php.scss":
/*!*****************************************!*\
  !*** ./src/career/resume/view.php.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./src/career/resume/view.php.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_php_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.php.scss */ "./src/career/resume/view.php.scss");

class FiveStarRating {
    constructor(container) {
        this.container = container;
        this.rating = parseInt(container.dataset.rating);
        this.render();
    }
    render() {
        for (var idx = 1; idx <= 5; idx++) {
            const star = document.createElement('i');
            const starClass = star.classList;
            starClass.add('ms-Icon');
            starClass.add(idx <= this.rating ? 'ms-Icon--FavoriteStarFill' : 'ms-Icon--FavoriteStar');
            this.container.appendChild(star);
        }
    }
}
function addNavigateExternalIcon(anchor) {
    const icon = document.createElement('span');
    const iconClass = icon.classList;
    iconClass.add('ms-Icon');
    iconClass.add('ms-Icon--NavigateExternalInline');
    anchor.innerText += '  ';
    anchor.appendChild(icon);
}
document.addEventListener('DOMContentLoaded', () => {
    const anchors = document.querySelectorAll('a');
    const fiveStarRating = document.querySelectorAll('.five-star-rating');
    const certBadgeAz204 = document.querySelector('#az_204_cert_badge');
    anchors.forEach(anchor => {
        addNavigateExternalIcon(anchor);
    });
    fiveStarRating.forEach(rating => {
        new FiveStarRating(rating);
    });
    certBadgeAz204.addEventListener('click', e => {
        location.href = 'https://www.credly.com/badges/eeb6fe6c-3277-40d1-9505-a01380d054b2/public_url';
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3NjcmlwdHMvY2FyZWVyX3Jlc3VtZS12aWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ055QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixVQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FyeWFudGllci5jb20vLi9zcmMvY2FyZWVyL3Jlc3VtZS92aWV3LnBocC5zY3NzP2ZhZjUiLCJ3ZWJwYWNrOi8vZ2FyeWFudGllci5jb20vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2FyeWFudGllci5jb20vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nYXJ5YW50aWVyLmNvbS8uL3NyYy9jYXJlZXIvcmVzdW1lL3ZpZXcucGhwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vdmlldy5waHAuc2Nzcyc7XG5jbGFzcyBGaXZlU3RhclJhdGluZyB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLnJhdGluZyA9IHBhcnNlSW50KGNvbnRhaW5lci5kYXRhc2V0LnJhdGluZyk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgZm9yICh2YXIgaWR4ID0gMTsgaWR4IDw9IDU7IGlkeCsrKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgY29uc3Qgc3RhckNsYXNzID0gc3Rhci5jbGFzc0xpc3Q7XG4gICAgICAgICAgICBzdGFyQ2xhc3MuYWRkKCdtcy1JY29uJyk7XG4gICAgICAgICAgICBzdGFyQ2xhc3MuYWRkKGlkeCA8PSB0aGlzLnJhdGluZyA/ICdtcy1JY29uLS1GYXZvcml0ZVN0YXJGaWxsJyA6ICdtcy1JY29uLS1GYXZvcml0ZVN0YXInKTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTmF2aWdhdGVFeHRlcm5hbEljb24oYW5jaG9yKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBpY29uQ2xhc3MgPSBpY29uLmNsYXNzTGlzdDtcbiAgICBpY29uQ2xhc3MuYWRkKCdtcy1JY29uJyk7XG4gICAgaWNvbkNsYXNzLmFkZCgnbXMtSWNvbi0tTmF2aWdhdGVFeHRlcm5hbElubGluZScpO1xuICAgIGFuY2hvci5pbm5lclRleHQgKz0gJyAgJztcbiAgICBhbmNob3IuYXBwZW5kQ2hpbGQoaWNvbik7XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGFuY2hvcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhJyk7XG4gICAgY29uc3QgZml2ZVN0YXJSYXRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZml2ZS1zdGFyLXJhdGluZycpO1xuICAgIGNvbnN0IGNlcnRCYWRnZUF6MjA0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F6XzIwNF9jZXJ0X2JhZGdlJyk7XG4gICAgYW5jaG9ycy5mb3JFYWNoKGFuY2hvciA9PiB7XG4gICAgICAgIGFkZE5hdmlnYXRlRXh0ZXJuYWxJY29uKGFuY2hvcik7XG4gICAgfSk7XG4gICAgZml2ZVN0YXJSYXRpbmcuZm9yRWFjaChyYXRpbmcgPT4ge1xuICAgICAgICBuZXcgRml2ZVN0YXJSYXRpbmcocmF0aW5nKTtcbiAgICB9KTtcbiAgICBjZXJ0QmFkZ2VBejIwNC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBsb2NhdGlvbi5ocmVmID0gJ2h0dHBzOi8vd3d3LmNyZWRseS5jb20vYmFkZ2VzL2VlYjZmZTZjLTMyNzctNDBkMS05NTA1LWEwMTM4MGQwNTRiMi9wdWJsaWNfdXJsJztcbiAgICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9