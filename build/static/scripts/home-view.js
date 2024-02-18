/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home/view.php.scss":
/*!********************************!*\
  !*** ./src/home/view.php.scss ***!
  \********************************/
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
/*!******************************!*\
  !*** ./src/home/view.php.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_php_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.php.scss */ "./src/home/view.php.scss");
// Some shit!

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3NjcmlwdHMvaG9tZS12aWV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3lCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dhcnlhbnRpZXIuY29tLy4vc3JjL2hvbWUvdmlldy5waHAuc2Nzcz9jMTFmIiwid2VicGFjazovL2dhcnlhbnRpZXIuY29tL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2dhcnlhbnRpZXIuY29tL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZ2FyeWFudGllci5jb20vLi9zcmMvaG9tZS92aWV3LnBocC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gU29tZSBzaGl0IVxuaW1wb3J0ICcuL3ZpZXcucGhwLnNjc3MnO1xuY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IobGluaykge1xuICAgICAgICB0aGlzLmxpbmsgPSBsaW5rO1xuICAgICAgICB0aGlzLnBhZ2UgPSBudWxsO1xuICAgIH1cbn1cbmNsYXNzIE5hdmlnYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgdGhpcy5hY3RpdmVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fbGlua3MuYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuYWN0aXZlUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXlvdXRfcGFnZXMuYWN0aXZlJyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJMaW5rcygpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyUGFnZXMoKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJMaW5rcygpIHtcbiAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2aWdhdGlvbl9saW5rcycpO1xuICAgICAgICBsaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBsaW5rLmRhdGFzZXQuaW5kZXg7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbaW5kZXhdID0gbmV3IE5hdmlnYXRpb25Db21wb25lbnQobGluayk7XG4gICAgICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5uYXZpZ2F0ZShpbmRleCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVnaXN0ZXJQYWdlcygpIHtcbiAgICAgICAgY29uc3QgcGFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGF5b3V0X3BhZ2VzJyk7XG4gICAgICAgIHBhZ2VzLmZvckVhY2gocGFnZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhZ2UuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tpbmRleF0ucGFnZSA9IHBhZ2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBuYXZpZ2F0ZShpbmRleCkge1xuICAgICAgICBpZiAoIWluZGV4IHx8IGluZGV4ID09PSAnJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaW5kZXggPSBpbmRleC5yZXBsYWNlKCcjJywgJycpO1xuICAgICAgICBjb25zdCB7IGxpbmssIHBhZ2UgfSA9IHRoaXMuY29tcG9uZW50c1tpbmRleF07XG4gICAgICAgIHRoaXMuYWN0aXZlTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5hY3RpdmVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBwYWdlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLmFjdGl2ZUxpbmsgPSBsaW5rO1xuICAgICAgICB0aGlzLmFjdGl2ZVBhZ2UgPSBwYWdlO1xuICAgIH1cbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgbmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKCk7XG4gICAgbmF2aWdhdGlvbi5uYXZpZ2F0ZSh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==