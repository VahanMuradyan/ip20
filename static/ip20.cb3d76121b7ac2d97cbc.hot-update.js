webpackHotUpdate("ip20",{

/***/ "./packages/twentytwenty-theme/src/components/Countdown.js":
/*!*****************************************************************!*\
  !*** ./packages/twentytwenty-theme/src/components/Countdown.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_lines_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/lines.png */ \"./packages/twentytwenty-theme/src/img/lines.png\");\n/* harmony import */ var _img_lines_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_lines_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./packages/twentytwenty-theme/src/components/link.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var Countdown=()=>{var[countdownDate,setCountdownDate]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new Date('10/26/2020').getTime());var[state,setState]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({days:'',hours:'',minutes:'',seconds:''});Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(()=>{setInterval(()=>setNewTime(),1000);},[]);var setNewTime=()=>{if(countdownDate){var currentTime=new Date().getTime();var distanceToDate=countdownDate-currentTime;var daysLeft=Math.floor(distanceToDate/(1000*60*60*24));var hoursLeft=Math.floor(distanceToDate%(1000*60*60*24)/(1000*60*60));var minutesLeft=Math.floor(distanceToDate%(1000*60*60)/(1000*60));var secondsLeft=Math.floor(distanceToDate%(1000*60)/1000);var numbersToAddZeroTo=[1,2,3,4,5,6,7,8,9];if(numbersToAddZeroTo.includes(daysLeft)){daysLeft=\"0\".concat(daysLeft);}if(numbersToAddZeroTo.includes(hoursLeft)){hoursLeft=\"0\".concat(hoursLeft);}if(numbersToAddZeroTo.includes(minutesLeft)){minutesLeft=\"0\".concat(minutesLeft);}if(numbersToAddZeroTo.includes(secondsLeft)){secondsLeft=\"0\".concat(secondsLeft);}setState({days:daysLeft,hours:hoursLeft,minutes:minutesLeft,seconds:secondsLeft});}};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-section\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-container\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-title-section\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"title-img\",style:{backgroundImage:\"url(\".concat(_img_lines_png__WEBPACK_IMPORTED_MODULE_2___default.a,\")\")}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"title-cube\"})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-title\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"The Global IP Challenges Forum will be launched on \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"strong\",null,\"October 26th, 2020\"),\" in:\"))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-section\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-n\"},state.days||'00'),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-l\"},\"Days\")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-n\"},state.hours||'00'),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-l\"},\"Hours\")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-n\"},state.minutes||'00'),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-l\"},\"Minutes\")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-n\"},state.seconds||'00'),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-l\"},\"Seconds\"))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",{className:\"register-to-event-text\"},\"Register Now to Attend the \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"strong\",null,\"Virtual Meeting!\")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"register-to-event-link\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(StyledLink,{link:\"/sign-up/\"},\"Register Now\")))));};/* harmony default export */ __webpack_exports__[\"default\"] = (Countdown);var StyledLink=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{target:\"efcutgz0\",label:\"StyledLink\"})( false?undefined:{name:\"16kf0ie\",styles:\"background-color:#00649c;font-family:'29ltbukrabold';font-size:16px;font-weight:bold;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#ffffff;text-decoration:none;padding:16px 48px;&:hover{opacity:0.7;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXGlwMjBcXHBhY2thZ2VzXFx0d2VudHl0d2VudHktdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcQ291bnRkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGK0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xcaXAyMFxccGFja2FnZXNcXHR3ZW50eXR3ZW50eS10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxDb3VudGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGxpbmVzSW1nIGZyb20gXCIuLi9pbWcvbGluZXMucG5nXCI7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XHJcblxyXG5jb25zdCBDb3VudGRvd24gPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtjb3VudGRvd25EYXRlLCBzZXRDb3VudGRvd25EYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCcxMC8yNi8yMDIwJykuZ2V0VGltZSgpKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGRheXM6ICcnLFxyXG4gICAgaG91cnM6ICcnLFxyXG4gICAgbWludXRlczogJycsXHJcbiAgICBzZWNvbmRzOiAnJyxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEludGVydmFsKCgpID0+IHNldE5ld1RpbWUoKSwgMTAwMCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzZXROZXdUaW1lID0gKCkgPT4ge1xyXG4gICAgaWYgKGNvdW50ZG93bkRhdGUpIHtcclxuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlVG9EYXRlID0gY291bnRkb3duRGF0ZSAtIGN1cnJlbnRUaW1lO1xyXG5cclxuICAgICAgbGV0IGRheXNMZWZ0ID0gTWF0aC5mbG9vcihkaXN0YW5jZVRvRGF0ZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgIGxldCBob3Vyc0xlZnQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIChkaXN0YW5jZVRvRGF0ZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApLFxyXG4gICAgICApO1xyXG4gICAgICBsZXQgbWludXRlc0xlZnQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIChkaXN0YW5jZVRvRGF0ZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCksXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBzZWNvbmRzTGVmdCA9IE1hdGguZmxvb3IoKGRpc3RhbmNlVG9EYXRlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcblxyXG4gICAgICBjb25zdCBudW1iZXJzVG9BZGRaZXJvVG8gPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XHJcblxyXG4gICAgICBpZiAobnVtYmVyc1RvQWRkWmVyb1RvLmluY2x1ZGVzKGRheXNMZWZ0KSkge1xyXG4gICAgICAgIGRheXNMZWZ0ID0gYDAke2RheXNMZWZ0fWA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bWJlcnNUb0FkZFplcm9Uby5pbmNsdWRlcyhob3Vyc0xlZnQpKSB7XHJcbiAgICAgICAgaG91cnNMZWZ0ID0gYDAke2hvdXJzTGVmdH1gO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChudW1iZXJzVG9BZGRaZXJvVG8uaW5jbHVkZXMobWludXRlc0xlZnQpKSB7XHJcbiAgICAgICAgbWludXRlc0xlZnQgPSBgMCR7bWludXRlc0xlZnR9YDtcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVtYmVyc1RvQWRkWmVyb1RvLmluY2x1ZGVzKHNlY29uZHNMZWZ0KSkge1xyXG4gICAgICAgIHNlY29uZHNMZWZ0ID0gYDAke3NlY29uZHNMZWZ0fWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFN0YXRlKHsgZGF5czogZGF5c0xlZnQsIGhvdXJzOiBob3Vyc0xlZnQsIG1pbnV0ZXM6IG1pbnV0ZXNMZWZ0LCBzZWNvbmRzOiBzZWNvbmRzTGVmdCB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tc2VjdGlvblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi10aXRsZS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWltZ1wiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2xpbmVzSW1nfSlgIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWN1YmVcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tdGl0bGVcIj5cclxuICAgICAgICAgICAgPHA+VGhlIEdsb2JhbCBJUCBDaGFsbGVuZ2VzIEZvcnVtIHdpbGwgYmUgbGF1bmNoZWQgb24gPHN0cm9uZz5PY3RvYmVyIDI2dGgsIDIwMjA8L3N0cm9uZz4gaW46PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtblwiPntzdGF0ZS5kYXlzIHx8ICcwMCd9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzLWxcIj5EYXlzPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzLW5cIj57c3RhdGUuaG91cnMgfHwgJzAwJ308L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtbFwiPkhvdXJzPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzLW5cIj57c3RhdGUubWludXRlcyB8fCAnMDAnfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1sXCI+TWludXRlczwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1uXCI+e3N0YXRlLnNlY29uZHMgfHwgJzAwJ308L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtbFwiPlNlY29uZHM8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci10by1ldmVudC10ZXh0XCI+UmVnaXN0ZXIgTm93IHRvIEF0dGVuZCB0aGUgPHN0cm9uZz5WaXJ0dWFsIE1lZXRpbmchPC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci10by1ldmVudC1saW5rXCI+XHJcbiAgICAgICAgICAgIDxTdHlsZWRMaW5rIGxpbms9XCIvc2lnbi11cC9cIj5SZWdpc3RlciBOb3c8L1N0eWxlZExpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93bjtcclxuXHJcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQoTGluaylgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjQ5YztcclxuICBmb250LWZhbWlseTogJzI5bHRidWtyYWJvbGQnO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAxNnB4IDQ4cHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuYDsiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLmpzPzJiOTciXSwibmFtZXMiOlsiQ291bnRkb3duIiwiY291bnRkb3duRGF0ZSIsInNldENvdW50ZG93bkRhdGUiLCJ1c2VTdGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwic3RhdGUiLCJzZXRTdGF0ZSIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidXNlRWZmZWN0Iiwic2V0SW50ZXJ2YWwiLCJzZXROZXdUaW1lIiwiY3VycmVudFRpbWUiLCJkaXN0YW5jZVRvRGF0ZSIsImRheXNMZWZ0IiwiTWF0aCIsImZsb29yIiwiaG91cnNMZWZ0IiwibWludXRlc0xlZnQiLCJzZWNvbmRzTGVmdCIsIm51bWJlcnNUb0FkZFplcm9UbyIsImluY2x1ZGVzIiwiYmFja2dyb3VuZEltYWdlIiwibGluZXNJbWciLCJTdHlsZWRMaW5rIiwiTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cVJBS0EsR0FBTUEsVUFBUyxDQUFHLElBQU0sQ0FFdEIsR0FBTSxDQUFDQyxhQUFELENBQWdCQyxnQkFBaEIsRUFBb0NDLHNEQUFRLENBQUMsR0FBSUMsS0FBSixDQUFTLFlBQVQsRUFBdUJDLE9BQXZCLEVBQUQsQ0FBbEQsQ0FDQSxHQUFNLENBQUNDLEtBQUQsQ0FBUUMsUUFBUixFQUFvQkosc0RBQVEsQ0FBQyxDQUNqQ0ssSUFBSSxDQUFFLEVBRDJCLENBRWpDQyxLQUFLLENBQUUsRUFGMEIsQ0FHakNDLE9BQU8sQ0FBRSxFQUh3QixDQUlqQ0MsT0FBTyxDQUFFLEVBSndCLENBQUQsQ0FBbEMsQ0FPQUMsdURBQVMsQ0FBQyxJQUFNLENBQ2RDLFdBQVcsQ0FBQyxJQUFNQyxVQUFVLEVBQWpCLENBQXFCLElBQXJCLENBQVgsQ0FDRCxDQUZRLENBRU4sRUFGTSxDQUFULENBSUEsR0FBTUEsV0FBVSxDQUFHLElBQU0sQ0FDdkIsR0FBSWIsYUFBSixDQUFt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QVRGLENBYUUsaUVBQUssU0FBUyxDQUFDLGlCQUFmLEVBQ0UsaUVBQUssU0FBUyxDQUFDLG1CQUFmLEVBQW9DSixLQUFLLENBQUNLLE9BQU4sRUFBaUIsSUFBckQsQ0FERixDQUVFLGlFQUFLLFNBQVMsQ0FBQyxtQkFBZixZQUZGLENBYkYsQ0FURixDQTJCRSxxRUFDRSwrREFBRyxTQUFTLENBQUMsd0JBQWIsZ0NBQWlFLDJGQUFqRSxDQURGLENBRUUsaUVBQUssU0FBUyxDQUFDLHdCQUFmLEVBQ0UsMERBQUMsVUFBRCxFQUFZLElBQUksQ0FBQyxXQUFqQixpQkFERixDQUZGLENBM0JGLENBREYsQ0FERixDQXNDRCxDQXRGRCxDQXdGZVgsd0VBQWYsRUFFQSxHQUFNMkIsV0FBVSxDQUFHLGtGQUFPQyw2Q0FBUCx3Q0FBSCxtNUxBQWhCIiwiZmlsZSI6Ii4vcGFja2FnZXMvdHdlbnR5dHdlbnR5LXRoZW1lL3NyYy9jb21wb25lbnRzL0NvdW50ZG93bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbGluZXNJbWcgZnJvbSBcIi4uL2ltZy9saW5lcy5wbmdcIjtcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcclxuXHJcbmNvbnN0IENvdW50ZG93biA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgW2NvdW50ZG93bkRhdGUsIHNldENvdW50ZG93bkRhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoJzEwLzI2LzIwMjAnKS5nZXRUaW1lKCkpO1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgZGF5czogJycsXHJcbiAgICBob3VyczogJycsXHJcbiAgICBtaW51dGVzOiAnJyxcclxuICAgIHNlY29uZHM6ICcnLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gc2V0TmV3VGltZSgpLCAxMDAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNldE5ld1RpbWUgPSAoKSA9PiB7XHJcbiAgICBpZiAoY291bnRkb3duRGF0ZSkge1xyXG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgY29uc3QgZGlzdGFuY2VUb0RhdGUgPSBjb3VudGRvd25EYXRlIC0gY3VycmVudFRpbWU7XHJcblxyXG4gICAgICBsZXQgZGF5c0xlZnQgPSBNYXRoLmZsb29yKGRpc3RhbmNlVG9EYXRlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgbGV0IGhvdXJzTGVmdCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgKGRpc3RhbmNlVG9EYXRlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MCksXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBtaW51dGVzTGVmdCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgKGRpc3RhbmNlVG9EYXRlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKSxcclxuICAgICAgKTtcclxuICAgICAgbGV0IHNlY29uZHNMZWZ0ID0gTWF0aC5mbG9vcigoZGlzdGFuY2VUb0RhdGUgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuXHJcbiAgICAgIGNvbnN0IG51bWJlcnNUb0FkZFplcm9UbyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcclxuXHJcbiAgICAgIGlmIChudW1iZXJzVG9BZGRaZXJvVG8uaW5jbHVkZXMoZGF5c0xlZnQpKSB7XHJcbiAgICAgICAgZGF5c0xlZnQgPSBgMCR7ZGF5c0xlZnR9YDtcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVtYmVyc1RvQWRkWmVyb1RvLmluY2x1ZGVzKGhvdXJzTGVmdCkpIHtcclxuICAgICAgICBob3Vyc0xlZnQgPSBgMCR7aG91cnNMZWZ0fWA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bWJlcnNUb0FkZFplcm9Uby5pbmNsdWRlcyhtaW51dGVzTGVmdCkpIHtcclxuICAgICAgICBtaW51dGVzTGVmdCA9IGAwJHttaW51dGVzTGVmdH1gO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChudW1iZXJzVG9BZGRaZXJvVG8uaW5jbHVkZXMoc2Vjb25kc0xlZnQpKSB7XHJcbiAgICAgICAgc2Vjb25kc0xlZnQgPSBgMCR7c2Vjb25kc0xlZnR9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0U3RhdGUoeyBkYXlzOiBkYXlzTGVmdCwgaG91cnM6IGhvdXJzTGVmdCwgbWludXRlczogbWludXRlc0xlZnQsIHNlY29uZHM6IHNlY29uZHNMZWZ0IH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLXRpdGxlLXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtaW1nXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7bGluZXNJbWd9KWAgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtY3ViZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi10aXRsZVwiPlxyXG4gICAgICAgICAgICA8cD5UaGUgR2xvYmFsIElQIENoYWxsZW5nZXMgRm9ydW0gd2lsbCBiZSBsYXVuY2hlZCBvbiA8c3Ryb25nPk9jdG9iZXIgMjZ0aCwgMjAyMDwvc3Ryb25nPiBpbjo8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1zZWN0aW9uXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1uXCI+e3N0YXRlLmRheXMgfHwgJzAwJ308L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtbFwiPkRheXM8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtblwiPntzdGF0ZS5ob3VycyB8fCAnMDAnfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1sXCI+SG91cnM8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtblwiPntzdGF0ZS5taW51dGVzIHx8ICcwMCd9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzLWxcIj5NaW51dGVzPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzLW5cIj57c3RhdGUuc2Vjb25kcyB8fCAnMDAnfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1sXCI+U2Vjb25kczwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlZ2lzdGVyLXRvLWV2ZW50LXRleHRcIj5SZWdpc3RlciBOb3cgdG8gQXR0ZW5kIHRoZSA8c3Ryb25nPlZpcnR1YWwgTWVldGluZyE8L3N0cm9uZz48L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXRvLWV2ZW50LWxpbmtcIj5cclxuICAgICAgICAgICAgPFN0eWxlZExpbmsgbGluaz1cIi9zaWduLXVwL1wiPlJlZ2lzdGVyIE5vdzwvU3R5bGVkTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duO1xyXG5cclxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZChMaW5rKWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NDljO1xyXG4gIGZvbnQtZmFtaWx5OiAnMjlsdGJ1a3JhYm9sZCc7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBhZGRpbmc6IDE2cHggNDhweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/components/Countdown.js\n");

/***/ })

})