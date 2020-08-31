webpackHotUpdate("ip20",{

/***/ "./packages/twentytwenty-theme/src/components/Countdown.js":
/*!*****************************************************************!*\
  !*** ./packages/twentytwenty-theme/src/components/Countdown.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_lines_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/lines.png */ \"./packages/twentytwenty-theme/src/img/lines.png\");\n/* harmony import */ var _img_lines_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_lines_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./packages/twentytwenty-theme/src/components/link.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var Countdown=()=>{var[countdownDate,setCountdownDate]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new Date('10/26/2020').getTime());var[state,setState]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({days:0,hours:0,minutes:0,seconds:0});Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(()=>{setInterval(()=>setNewTime(),1000);console.log(state);},[state]);var setNewTime=()=>{if(countdownDate){var currentTime=new Date().getTime();var distanceToDate=countdownDate-currentTime;var days=Math.floor(distanceToDate/(1000*60*60*24));var hours=Math.floor(distanceToDate%(1000*60*60*24)/(1000*60*60));var minutes=Math.floor(distanceToDate%(1000*60*60)/(1000*60));var seconds=Math.floor(distanceToDate%(1000*60)/1000);var numbersToAddZeroTo=[1,2,3,4,5,6,7,8,9];days=\"\".concat(days);if(numbersToAddZeroTo.includes(hours)){hours=\"0\".concat(hours);}else if(numbersToAddZeroTo.includes(minutes)){minutes=\"0\".concat(minutes);}else if(numbersToAddZeroTo.includes(seconds)){seconds=\"0\".concat(seconds);}setState({days:days,hours:hours,minutes,seconds});}};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-section\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-container\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-title-section\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"title-img\",style:{backgroundImage:\"url(\".concat(_img_lines_png__WEBPACK_IMPORTED_MODULE_2___default.a,\")\")}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"title-cube\"})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-title\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"The Global IP Challenges Forum will be launched on \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"strong\",null,\"October 26th, 2020\"),\" in:\"))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-section\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-n\"},\"06\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-l\"},\"Days\")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-n\"},\"16\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-l\"},\"Hours\")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-n\"},\"07\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-l\"},\"Minutes\")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-n\"},\"13\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"countdown-cubes-l\"},\"Seconds\"))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",{className:\"register-to-event-text\"},\"Register Now to Attend the \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"strong\",null,\"Virtual Meeting!\")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{className:\"register-to-event-link\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(StyledLink,{link:\"/sign-up/\"},\"Register Now\")))));};/* harmony default export */ __webpack_exports__[\"default\"] = (Countdown);var StyledLink=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{target:\"efcutgz0\",label:\"StyledLink\"})( false?undefined:{name:\"16kf0ie\",styles:\"background-color:#00649c;font-family:'29ltbukrabold';font-size:16px;font-weight:bold;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#ffffff;text-decoration:none;padding:16px 48px;&:hover{opacity:0.7;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXGlwMjBcXHBhY2thZ2VzXFx0d2VudHl0d2VudHktdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcQ291bnRkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGK0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xcaXAyMFxccGFja2FnZXNcXHR3ZW50eXR3ZW50eS10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxDb3VudGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGxpbmVzSW1nIGZyb20gXCIuLi9pbWcvbGluZXMucG5nXCI7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XHJcblxyXG5jb25zdCBDb3VudGRvd24gPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtjb3VudGRvd25EYXRlLCBzZXRDb3VudGRvd25EYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCcxMC8yNi8yMDIwJykuZ2V0VGltZSgpKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGRheXM6IDAsXHJcbiAgICBob3VyczogMCxcclxuICAgIG1pbnV0ZXM6IDAsXHJcbiAgICBzZWNvbmRzOiAwLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gc2V0TmV3VGltZSgpLCAxMDAwKTtcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlKVxyXG4gIH0sIFtzdGF0ZV0pO1xyXG5cclxuICBjb25zdCBzZXROZXdUaW1lID0gKCkgPT4ge1xyXG4gICAgaWYgKGNvdW50ZG93bkRhdGUpIHtcclxuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlVG9EYXRlID0gY291bnRkb3duRGF0ZSAtIGN1cnJlbnRUaW1lO1xyXG5cclxuICAgICAgbGV0IGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlVG9EYXRlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgbGV0IGhvdXJzID0gTWF0aC5mbG9vcihcclxuICAgICAgICAoZGlzdGFuY2VUb0RhdGUgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSxcclxuICAgICAgKTtcclxuICAgICAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIChkaXN0YW5jZVRvRGF0ZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCksXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2VUb0RhdGUgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuXHJcbiAgICAgIGNvbnN0IG51bWJlcnNUb0FkZFplcm9UbyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcclxuXHJcbiAgICAgIGRheXMgPSBgJHtkYXlzfWA7XHJcbiAgICAgIGlmIChudW1iZXJzVG9BZGRaZXJvVG8uaW5jbHVkZXMoaG91cnMpKSB7XHJcbiAgICAgICAgaG91cnMgPSBgMCR7aG91cnN9YDtcclxuICAgICAgfSBlbHNlIGlmIChudW1iZXJzVG9BZGRaZXJvVG8uaW5jbHVkZXMobWludXRlcykpIHtcclxuICAgICAgICBtaW51dGVzID0gYDAke21pbnV0ZXN9YDtcclxuICAgICAgfSBlbHNlIGlmIChudW1iZXJzVG9BZGRaZXJvVG8uaW5jbHVkZXMoc2Vjb25kcykpIHtcclxuICAgICAgICBzZWNvbmRzID0gYDAke3NlY29uZHN9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0U3RhdGUoeyBkYXlzOiBkYXlzLCBob3VyczogaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLXNlY3Rpb25cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tdGl0bGUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbWdcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtsaW5lc0ltZ30pYCB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1jdWJlXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxwPlRoZSBHbG9iYWwgSVAgQ2hhbGxlbmdlcyBGb3J1bSB3aWxsIGJlIGxhdW5jaGVkIG9uIDxzdHJvbmc+T2N0b2JlciAyNnRoLCAyMDIwPC9zdHJvbmc+IGluOjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzLXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzLW5cIj4wNjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1sXCI+RGF5czwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1uXCI+MTY8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtbFwiPkhvdXJzPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzLW5cIj4wNzwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1sXCI+TWludXRlczwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1uXCI+MTM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtbFwiPlNlY29uZHM8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci10by1ldmVudC10ZXh0XCI+UmVnaXN0ZXIgTm93IHRvIEF0dGVuZCB0aGUgPHN0cm9uZz5WaXJ0dWFsIE1lZXRpbmchPC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci10by1ldmVudC1saW5rXCI+XHJcbiAgICAgICAgICAgIDxTdHlsZWRMaW5rIGxpbms9XCIvc2lnbi11cC9cIj5SZWdpc3RlciBOb3c8L1N0eWxlZExpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93bjtcclxuXHJcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQoTGluaylgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjQ5YztcclxuICBmb250LWZhbWlseTogJzI5bHRidWtyYWJvbGQnO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAxNnB4IDQ4cHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuYDsiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLmpzPzJiOTciXSwibmFtZXMiOlsiQ291bnRkb3duIiwiY291bnRkb3duRGF0ZSIsInNldENvdW50ZG93bkRhdGUiLCJ1c2VTdGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwic3RhdGUiLCJzZXRTdGF0ZSIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidXNlRWZmZWN0Iiwic2V0SW50ZXJ2YWwiLCJzZXROZXdUaW1lIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUaW1lIiwiZGlzdGFuY2VUb0RhdGUiLCJNYXRoIiwiZmxvb3IiLCJudW1iZXJzVG9BZGRaZXJvVG8iLCJpbmNsdWRlcyIsImJhY2tncm91bmRJbWFnZSIsImxpbmVzSW1nIiwiU3R5bGVkTGluayIsIkxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3FSQUtBLEdBQU1BLFVBQVMsQ0FBRyxJQUFNLENBRXRCLEdBQU0sQ0FBQ0MsYUFBRCxDQUFnQkMsZ0JBQWhCLEVBQW9DQyxzREFBUSxDQUFDLEdBQUlDLEtBQUosQ0FBUyxZQUFULEVBQXVCQyxPQUF2QixFQUFELENBQWxELENBQ0EsR0FBTSxDQUFDQyxLQUFELENBQVFDLFFBQVIsRUFBb0JKLHNEQUFRLENBQUMsQ0FDakNLLElBQUksQ0FBRSxDQUQyQixDQUVqQ0MsS0FBSyxDQUFFLENBRjBCLENBR2pDQyxPQUFPLENBQUUsQ0FId0IsQ0FJakNDLE9BQU8sQ0FBRSxDQUp3QixDQUFELENBQWxDLENBT0FDLHVEQUFTLENBQUMsSUFBTSxDQUNkQyxXQUFXLENBQUMsSUFBTUMsVUFBVSxFQUFqQixDQUFxQixJQUFyQixDQUFYLENBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVixLQUFaLEVBQ0QsQ0FIUSxDQUdOLENBQUNBLEtBQUQsQ0FITSxDQUFULENBS0EsR0FBTVEsV0FBVSxDQUFHLElBQU0sQ0FDdkIsR0FBSWIsYUFBSixDQUFtQixDQUNqQixHQUFNZ0IsWUFBVyxDQUFHLEdBQUliLEtBQUosR0FBV0MsT0FBWCxFQUFwQixDQUVBLEdBQU1hLGVBQWMsQ0FBR2pCLGFBQWEsQ0FBR2dCLFdBQXZDLENBRUEsR0FBSVQsS0FBSSxDQUFHVyxJQUFJLENBQUNDLEtBQUwsQ0FBV0YsY0FBYyxFQUFJLEtBQU8sRUFBUCxDQUFZLEVBQVosQ0FBaUIsRUFBckIsQ0FBekIsQ0FBWCxDQUNBLEdBQUlULE1BQUssQ0FBR1UsSUFBSSxDQUFDQyxLQUFMLENBQ1RGLGNBQWMsRUFBSSxLQUFPLEVBQVAsQ0FBWSxFQUFaLENBQWlCLEVBQXJCLENBQWYsRUFBNEMsS0FBTyxFQUFQLENBQVksRUFBeEQsQ0FEVSxDQUFaLENBR0EsR0FBSVIsUUFBTyxDQUFHUyxJQUFJLENBQUNDLEtBQUwsQ0FDWEYsY0FBYyxFQUFJLEtBQU8sRUFBUCxDQUFZLEVBQWhCLENBQWYsRUFBdUMsS0FBTyxFQUE5QyxDQURZLENBQWQsQ0FHQSxHQUFJUCxRQUFPLENBQUdRLElBQUksQ0FBQ0MsS0FBTCxDQUFZRixjQUFjLEVBQUksS0FBTyxFQUFYLENBQWYsQ0FBaUMsSUFBNUMsQ0FBZCxDQUVBLEdBQU1HLG1CQUFrQixDQUFHLENBQUMsQ0FBRCxDQUFJLENBQUosQ0FBTyxDQUFQLENBQVUsQ0FBVixDQUFhLENBQWIsQ0FBZ0IsQ0FBaEIsQ0FBbUIsQ0FBbkIsQ0FBc0IsQ0FBdEIsQ0FBeUIsQ0FBekIsQ0FBM0IsQ0FFQWIsSUFBSSxXQUFNQSxJQUFOLENBQUosQ0FDQSxHQUFJYSxrQkFBa0IsQ0FBQ0MsUUFBbkIsQ0FBNEJiLEtBQTVCLENBQUosQ0FBd0MsQ0FDdENBLEtBQUssWUFBT0EsS0FBUCxDQUFMLENBQ0QsQ0FGRCxJQUVPLElBQUlZLGtCQUFrQixDQUFDQyxRQUFuQixDQUE0QlosT0FBNUIsQ0FBSixDQUEwQyxDQUMvQ0EsT0FBTyxZQUFPQSxPQUFQLENBQVAsQ0FDRCxDQUZNLElBRUEsSUFBSVcsa0JBQWtCLENBQUNDLFFBQW5CLENBQTRCWCxPQUE1QixDQUFKLENBQTBDLENBQy9DQSxPQUFPLFlBQU9BLE9BQVAsQ0FBUCxDQUNELENBRURKLFFBQVEsQ0FBQyxDQUFFQyxJQUFJLENBQUVBLElBQVIsQ0FBY0MsS0FBSyxDQUFFQSxLQUFyQixDQUE0QkMsT0FBNUIsQ0FBcUNDLE9BQXJDLENBQUQsQ0FBUixDQUNELENBQ0YsQ0E1QkQsQ0E4QkEsTUFDRSxrRUFBSyxTQUFTLENBQUMsbUJBQWYsRUFDRSxpRUFBSyxTQUFTLENBQUMscUJBQWYsRUFDRSxpRUFBSyxTQUFTLENBQUMseUJBQWYsRUFDRSxpRUFBSyxTQUFTLENBQUMsV0FBZixDQUEyQixLQUFLLENBQUUsQ0FBRVksZUFBZSxlQUFTQyxxREFBVCxLQUFqQixDQUFsQyxFQUNFLGlFQUFLLFNBQVMsQ0FBQyxZQUFmLEVBREYsQ0FERixDQUlFLGlFQUFLLFNBQVMsQ0FBQyxpQkFBZixFQUNFLHlIQUFzRCw2RkFBdEQsUUFERixDQUpGLENBREYsQ0FTRSxpRUFBSyxTQUFTLENBQUMseUJBQWYsRUFDRSxpRUFBSyxTQUFTLENBQUMsaUJBQWYsRUFDRSxpRUFBSyxTQUFTLENBQUMsbUJBQWYsT0FERixDQUVFLGlFQUFLLFNBQVMsQ0FBQyxtQkFBZixTQUZGLENBREYsQ0FLRSxpRUFBSyxTQUFTLENBQUMsaUJBQWYsRUFDRSxpRUFBSyxTQUFTLENBQUMsbUJBQWYsT0FERixDQUVFLGlFQUFLLFNBQVMsQ0FBQyxtQkFBZixVQUZGLENBTEYsQ0FTRSxpRUFBSyxTQUFTLENBQUMsaUJBQWYsRUFDRSxpRUFBSyxTQUFTLENBQUMsbUJBQWYsT0FERixDQUVFLGlFQUFLLFNBQVMsQ0FBQyxtQkFBZixZQUZGLENBVEYsQ0FhRSxpRUFBSyxTQUFTLENBQUMsaUJBQWYsRUFDRSxpRUFBSyxTQUFTLENBQUMsbUJBQWYsT0FERixDQUVFLGlFQUFLLFNBQVMsQ0FBQyxtQkFBZixZQUZGLENBYkYsQ0FURixDQTJCRSxxRUFDRSwrREFBRyxTQUFTLENBQUMsd0JBQWIsZ0NBQWlFLDJGQUFqRSxDQURGLENBRUUsaUVBQUssU0FBUyxDQUFDLHdCQUFmLEVBQ0UsMERBQUMsVUFBRCxFQUFZLElBQUksQ0FBQyxXQUFqQixpQkFERixDQUZGLENBM0JGLENBREYsQ0FERixDQXNDRCxDQW5GRCxDQXFGZXhCLHdFQUFmLEVBRUEsR0FBTXlCLFdBQVUsQ0FBRyxrRkFBT0MsNkNBQVAsd0NBQUgsMm1MQUFoQiIsImZpbGUiOiIuL3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvY29tcG9uZW50cy9Db3VudGRvd24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGxpbmVzSW1nIGZyb20gXCIuLi9pbWcvbGluZXMucG5nXCI7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XHJcblxyXG5jb25zdCBDb3VudGRvd24gPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IFtjb3VudGRvd25EYXRlLCBzZXRDb3VudGRvd25EYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCcxMC8yNi8yMDIwJykuZ2V0VGltZSgpKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGRheXM6IDAsXHJcbiAgICBob3VyczogMCxcclxuICAgIG1pbnV0ZXM6IDAsXHJcbiAgICBzZWNvbmRzOiAwLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gc2V0TmV3VGltZSgpLCAxMDAwKTtcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlKVxyXG4gIH0sIFtzdGF0ZV0pO1xyXG5cclxuICBjb25zdCBzZXROZXdUaW1lID0gKCkgPT4ge1xyXG4gICAgaWYgKGNvdW50ZG93bkRhdGUpIHtcclxuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlVG9EYXRlID0gY291bnRkb3duRGF0ZSAtIGN1cnJlbnRUaW1lO1xyXG5cclxuICAgICAgbGV0IGRheXMgPSBNYXRoLmZsb29yKGRpc3RhbmNlVG9EYXRlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgbGV0IGhvdXJzID0gTWF0aC5mbG9vcihcclxuICAgICAgICAoZGlzdGFuY2VUb0RhdGUgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSxcclxuICAgICAgKTtcclxuICAgICAgbGV0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIChkaXN0YW5jZVRvRGF0ZSAlICgxMDAwICogNjAgKiA2MCkpIC8gKDEwMDAgKiA2MCksXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2VUb0RhdGUgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcclxuXHJcbiAgICAgIGNvbnN0IG51bWJlcnNUb0FkZFplcm9UbyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcclxuXHJcbiAgICAgIGRheXMgPSBgJHtkYXlzfWA7XHJcbiAgICAgIGlmIChudW1iZXJzVG9BZGRaZXJvVG8uaW5jbHVkZXMoaG91cnMpKSB7XHJcbiAgICAgICAgaG91cnMgPSBgMCR7aG91cnN9YDtcclxuICAgICAgfSBlbHNlIGlmIChudW1iZXJzVG9BZGRaZXJvVG8uaW5jbHVkZXMobWludXRlcykpIHtcclxuICAgICAgICBtaW51dGVzID0gYDAke21pbnV0ZXN9YDtcclxuICAgICAgfSBlbHNlIGlmIChudW1iZXJzVG9BZGRaZXJvVG8uaW5jbHVkZXMoc2Vjb25kcykpIHtcclxuICAgICAgICBzZWNvbmRzID0gYDAke3NlY29uZHN9YDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0U3RhdGUoeyBkYXlzOiBkYXlzLCBob3VyczogaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLXNlY3Rpb25cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tdGl0bGUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbWdcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtsaW5lc0ltZ30pYCB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1jdWJlXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxwPlRoZSBHbG9iYWwgSVAgQ2hhbGxlbmdlcyBGb3J1bSB3aWxsIGJlIGxhdW5jaGVkIG9uIDxzdHJvbmc+T2N0b2JlciAyNnRoLCAyMDIwPC9zdHJvbmc+IGluOjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzLXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzLW5cIj4wNjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1sXCI+RGF5czwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1uXCI+MTY8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtbFwiPkhvdXJzPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzLW5cIj4wNzwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1sXCI+TWludXRlczwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1uXCI+MTM8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtbFwiPlNlY29uZHM8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci10by1ldmVudC10ZXh0XCI+UmVnaXN0ZXIgTm93IHRvIEF0dGVuZCB0aGUgPHN0cm9uZz5WaXJ0dWFsIE1lZXRpbmchPC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci10by1ldmVudC1saW5rXCI+XHJcbiAgICAgICAgICAgIDxTdHlsZWRMaW5rIGxpbms9XCIvc2lnbi11cC9cIj5SZWdpc3RlciBOb3c8L1N0eWxlZExpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdW50ZG93bjtcclxuXHJcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQoTGluaylgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjQ5YztcclxuICBmb250LWZhbWlseTogJzI5bHRidWtyYWJvbGQnO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAxNnB4IDQ4cHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gIH1cclxuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/components/Countdown.js\n");

/***/ })

})