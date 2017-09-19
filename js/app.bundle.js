webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

angular.module('dashboard', []);

__webpack_require__(2);
__webpack_require__(5);
__webpack_require__(6);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var angular = __webpack_require__(0);

angular.module('dashboard')
       .directive('YepNope', __webpack_require__(4));


/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

function YepNopeDirective() {
  return {
    restrict: 'E',
    link: function (scope, element, attrs) {
      scope.$watch(attrs.check, function (val) {
        var words = val ? 'Yep' : 'Nope';
        element.text(words);
      });
    }
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {



/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(0);

angular.module('dashboard')
       .controller('dashboardController', __webpack_require__(7));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


DashboardController.$inject = ['GithubStatusService'];
function DashboardController(gh) {
    var _this = this;
    _this.github = '';
    gh.getStatus().success(function(status) {
        _this.github = status;
    });
}


/***/ })
],[1]);