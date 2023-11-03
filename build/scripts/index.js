/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index/view.php.scss":
/*!*********************************!*\
  !*** ./src/index/view.php.scss ***!
  \*********************************/
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
/*!*******************************!*\
  !*** ./src/index/view.php.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_php_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.php.scss */ "./src/index/view.php.scss");

class NavigationComponent {
    constructor(link) {
        this.link = link;
        this.page = null;
    }
}
class Navigation {
    constructor() {
        this.components = {};
        this.activeLink = document.querySelector('.navigation_links.active');
        this.activePage = document.querySelector('.layout_pages.active');
        this.registerLinks();
        this.registerPages();
    }
    registerLinks() {
        const links = document.querySelectorAll('.navigation_links');
        links.forEach(link => {
            const index = link.dataset.index;
            this.components[index] = new NavigationComponent(link);
            link.addEventListener('click', () => this.navigate(index));
        });
    }
    registerPages() {
        const pages = document.querySelectorAll('.layout_pages');
        pages.forEach(page => {
            const index = page.dataset.index;
            this.components[index].page = page;
        });
    }
    navigate(index) {
        if (!index || index === '')
            return;
        index = index.replace('#', '');
        const { link, page } = this.components[index];
        this.activeLink.classList.remove('active');
        this.activePage.classList.remove('active');
        link.classList.add('active');
        page.classList.add('active');
        this.activeLink = link;
        this.activePage = page;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const navigation = new Navigation();
    navigation.navigate(window.location.hash);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FyeWFudGllci5jb20vLi9zcmMvaW5kZXgvdmlldy5waHAuc2Nzcz9hMzViIiwid2VicGFjazovL2dhcnlhbnRpZXIuY29tL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhcnlhbnRpZXIuY29tL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2FyeWFudGllci5jb20vLi9zcmMvaW5kZXgvdmlldy5waHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi92aWV3LnBocC5zY3NzJztcbmNsYXNzIE5hdmlnYXRpb25Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGxpbmspIHtcbiAgICAgICAgdGhpcy5saW5rID0gbGluaztcbiAgICAgICAgdGhpcy5wYWdlID0gbnVsbDtcbiAgICB9XG59XG5jbGFzcyBOYXZpZ2F0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge307XG4gICAgICAgIHRoaXMuYWN0aXZlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX2xpbmtzLmFjdGl2ZScpO1xuICAgICAgICB0aGlzLmFjdGl2ZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGF5b3V0X3BhZ2VzLmFjdGl2ZScpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyTGlua3MoKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclBhZ2VzKCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyTGlua3MoKSB7XG4gICAgICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmlnYXRpb25fbGlua3MnKTtcbiAgICAgICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gbGluay5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW2luZGV4XSA9IG5ldyBOYXZpZ2F0aW9uQ29tcG9uZW50KGxpbmspO1xuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMubmF2aWdhdGUoaW5kZXgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlZ2lzdGVyUGFnZXMoKSB7XG4gICAgICAgIGNvbnN0IHBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxheW91dF9wYWdlcycpO1xuICAgICAgICBwYWdlcy5mb3JFYWNoKHBhZ2UgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYWdlLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbaW5kZXhdLnBhZ2UgPSBwYWdlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmF2aWdhdGUoaW5kZXgpIHtcbiAgICAgICAgaWYgKCFpbmRleCB8fCBpbmRleCA9PT0gJycpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGluZGV4ID0gaW5kZXgucmVwbGFjZSgnIycsICcnKTtcbiAgICAgICAgY29uc3QgeyBsaW5rLCBwYWdlIH0gPSB0aGlzLmNvbXBvbmVudHNbaW5kZXhdO1xuICAgICAgICB0aGlzLmFjdGl2ZUxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuYWN0aXZlUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgcGFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5hY3RpdmVMaW5rID0gbGluaztcbiAgICAgICAgdGhpcy5hY3RpdmVQYWdlID0gcGFnZTtcbiAgICB9XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IG5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbigpO1xuICAgIG5hdmlnYXRpb24ubmF2aWdhdGUod2luZG93LmxvY2F0aW9uLmhhc2gpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=