webpackHotUpdate("ip20",{

/***/ "./packages/twentytwenty-theme/src/components/Countdown.js":
/*!*****************************************************************!*\
  !*** ./packages/twentytwenty-theme/src/components/Countdown.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_lines_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/lines.png */ \"./packages/twentytwenty-theme/src/img/lines.png\");\n/* harmony import */ var _img_lines_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_lines_png__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./packages/twentytwenty-theme/src/components/link.js\");\n/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animate-on-scroll */ \"./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js\");\n/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-animated-css */ \"./node_modules/react-animated-css/lib/index.js\");\n/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var Countdown=()=>{var[countdownDate,setCountdownDate]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new Date(\"10/26/2020\").getTime());var[state,setState]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({days:0,hours:0,minutes:0,seconds:0});Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(()=>{setInterval(()=>setNewTime(),1000);},[]);var setNewTime=()=>{if(countdownDate){var currentTime=new Date().getTime();var distanceToDate=countdownDate-currentTime;var daysLeft=Math.floor(distanceToDate/(1000*60*60*24));var hoursLeft=Math.floor(distanceToDate%(1000*60*60*24)/(1000*60*60));var minutesLeft=Math.floor(distanceToDate%(1000*60*60)/(1000*60));var secondsLeft=Math.floor(distanceToDate%(1000*60)/1000);var numbersToAddZeroTo=[1,2,3,4,5,6,7,8,9];if(numbersToAddZeroTo.includes(daysLeft)){daysLeft=\"0\".concat(daysLeft);}if(numbersToAddZeroTo.includes(hoursLeft)){hoursLeft=\"0\".concat(hoursLeft);}if(numbersToAddZeroTo.includes(minutesLeft)){minutesLeft=\"0\".concat(minutesLeft);}if(numbersToAddZeroTo.includes(secondsLeft)){secondsLeft=\"0\".concat(secondsLeft);}setState({days:daysLeft,hours:hoursLeft,minutes:minutesLeft,seconds:secondsLeft});}};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{id:\"countdown-section\",className:\"countdown-section\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"countdown-container\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"countdown-title-section\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"title-img\",style:{backgroundImage:\"url(\".concat(_img_lines_png__WEBPACK_IMPORTED_MODULE_2___default.a,\")\")}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"title-cube\"})),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"countdown-title\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"p\",null,\"The Global IP Challenges Forum will be launched on\",\" \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"strong\",null,\"October 26th, 2020\"),\" in:\"))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(react_animated_css__WEBPACK_IMPORTED_MODULE_5__[\"Animated\"],{animationIn:\"lightSpeedIn\",animationOut:\"zoomOutDown\",animationInDuration:1000,animationOutDuration:1000,isVisible:true},\"asd\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"countdown-cubes-section\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"countdown-cubes\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"countdown-cubes-n\"},state.days||\"00\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"countdown-cubes-l\"},\"Days\")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"countdown-cubes\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"countdown-cubes-n\"},state.hours||\"00\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"countdown-cubes-l\"},\"Hours\")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"countdown-cubes\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"countdown-cubes-n\"},state.minutes||\"00\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"countdown-cubes-l\"},\"Minutes\")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"countdown-cubes\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"countdown-cubes-n\"},state.seconds||\"00\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"countdown-cubes-l\"},\"Seconds\"))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"p\",{className:\"register-to-event-text\"},\"Register Now to Attend the \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"strong\",null,\"Virtual Meeting!\")),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",{className:\"register-to-event-link\"},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(StyledLink,{link:\"/sign-up/\"},\"Register Now\")))));};/* harmony default export */ __webpack_exports__[\"default\"] = (Countdown);var StyledLink=/*#__PURE__*/Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{target:\"efcutgz0\",label:\"StyledLink\"})( false?undefined:{name:\"diaxb6\",styles:\"background-color:#00649c;font-family:\\\"29ltbukrabold\\\";font-size:16px;font-weight:bold;font-stretch:normal;font-style:normal;line-height:normal;letter-spacing:normal;color:#ffffff;text-decoration:none;padding:16px 48px;&:hover{background-color:#00496d;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxccHJvamVjdHNcXGlwMjBcXHBhY2thZ2VzXFx0d2VudHl0d2VudHktdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcQ291bnRkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIK0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxwcm9qZWN0c1xcaXAyMFxccGFja2FnZXNcXHR3ZW50eXR3ZW50eS10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxDb3VudGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbGluZXNJbWcgZnJvbSBcIi4uL2ltZy9saW5lcy5wbmdcIjtcclxuaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSBcImZyb250aXR5XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tIFwicmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGxcIjtcclxuaW1wb3J0IHsgQW5pbWF0ZWQgfSBmcm9tIFwicmVhY3QtYW5pbWF0ZWQtY3NzXCI7XHJcblxyXG5jb25zdCBDb3VudGRvd24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvdW50ZG93bkRhdGUsIHNldENvdW50ZG93bkRhdGVdID0gdXNlU3RhdGUoXHJcbiAgICBuZXcgRGF0ZShcIjEwLzI2LzIwMjBcIikuZ2V0VGltZSgpXHJcbiAgKTtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGRheXM6IDAsXHJcbiAgICBob3VyczogMCxcclxuICAgIG1pbnV0ZXM6IDAsXHJcbiAgICBzZWNvbmRzOiAwLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gc2V0TmV3VGltZSgpLCAxMDAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHNldE5ld1RpbWUgPSAoKSA9PiB7XHJcbiAgICBpZiAoY291bnRkb3duRGF0ZSkge1xyXG4gICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgY29uc3QgZGlzdGFuY2VUb0RhdGUgPSBjb3VudGRvd25EYXRlIC0gY3VycmVudFRpbWU7XHJcblxyXG4gICAgICBsZXQgZGF5c0xlZnQgPSBNYXRoLmZsb29yKGRpc3RhbmNlVG9EYXRlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcclxuICAgICAgbGV0IGhvdXJzTGVmdCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgKGRpc3RhbmNlVG9EYXRlICUgKDEwMDAgKiA2MCAqIDYwICogMjQpKSAvICgxMDAwICogNjAgKiA2MClcclxuICAgICAgKTtcclxuICAgICAgbGV0IG1pbnV0ZXNMZWZ0ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAoZGlzdGFuY2VUb0RhdGUgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBzZWNvbmRzTGVmdCA9IE1hdGguZmxvb3IoKGRpc3RhbmNlVG9EYXRlICUgKDEwMDAgKiA2MCkpIC8gMTAwMCk7XHJcblxyXG4gICAgICBjb25zdCBudW1iZXJzVG9BZGRaZXJvVG8gPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XHJcblxyXG4gICAgICBpZiAobnVtYmVyc1RvQWRkWmVyb1RvLmluY2x1ZGVzKGRheXNMZWZ0KSkge1xyXG4gICAgICAgIGRheXNMZWZ0ID0gYDAke2RheXNMZWZ0fWA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bWJlcnNUb0FkZFplcm9Uby5pbmNsdWRlcyhob3Vyc0xlZnQpKSB7XHJcbiAgICAgICAgaG91cnNMZWZ0ID0gYDAke2hvdXJzTGVmdH1gO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChudW1iZXJzVG9BZGRaZXJvVG8uaW5jbHVkZXMobWludXRlc0xlZnQpKSB7XHJcbiAgICAgICAgbWludXRlc0xlZnQgPSBgMCR7bWludXRlc0xlZnR9YDtcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVtYmVyc1RvQWRkWmVyb1RvLmluY2x1ZGVzKHNlY29uZHNMZWZ0KSkge1xyXG4gICAgICAgIHNlY29uZHNMZWZ0ID0gYDAke3NlY29uZHNMZWZ0fWA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICBkYXlzOiBkYXlzTGVmdCxcclxuICAgICAgICBob3VyczogaG91cnNMZWZ0LFxyXG4gICAgICAgIG1pbnV0ZXM6IG1pbnV0ZXNMZWZ0LFxyXG4gICAgICAgIHNlY29uZHM6IHNlY29uZHNMZWZ0LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImNvdW50ZG93bi1zZWN0aW9uXCIgY2xhc3NOYW1lPVwiY291bnRkb3duLXNlY3Rpb25cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tdGl0bGUtc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0aXRsZS1pbWdcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtsaW5lc0ltZ30pYCB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWN1YmVcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tdGl0bGVcIj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgVGhlIEdsb2JhbCBJUCBDaGFsbGVuZ2VzIEZvcnVtIHdpbGwgYmUgbGF1bmNoZWQgb257XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPHN0cm9uZz5PY3RvYmVyIDI2dGgsIDIwMjA8L3N0cm9uZz4gaW46XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxBbmltYXRlZFxyXG4gICAgICAgICAgYW5pbWF0aW9uSW49XCJsaWdodFNwZWVkSW5cIlxyXG4gICAgICAgICAgYW5pbWF0aW9uT3V0PVwiem9vbU91dERvd25cIlxyXG4gICAgICAgICAgYW5pbWF0aW9uSW5EdXJhdGlvbj17MTAwMH1cclxuICAgICAgICAgIGFuaW1hdGlvbk91dER1cmF0aW9uPXsxMDAwfVxyXG4gICAgICAgICAgaXNWaXNpYmxlPXt0cnVlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIGFzZFxyXG4gICAgICAgIDwvQW5pbWF0ZWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtblwiPntzdGF0ZS5kYXlzIHx8IFwiMDBcIn08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtbFwiPkRheXM8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtblwiPntzdGF0ZS5ob3VycyB8fCBcIjAwXCJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzLWxcIj5Ib3VyczwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1uXCI+e3N0YXRlLm1pbnV0ZXMgfHwgXCIwMFwifTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1sXCI+TWludXRlczwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1uXCI+e3N0YXRlLnNlY29uZHMgfHwgXCIwMFwifTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1sXCI+U2Vjb25kczwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlZ2lzdGVyLXRvLWV2ZW50LXRleHRcIj5cclxuICAgICAgICAgICAgUmVnaXN0ZXIgTm93IHRvIEF0dGVuZCB0aGUgPHN0cm9uZz5WaXJ0dWFsIE1lZXRpbmchPC9zdHJvbmc+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyLXRvLWV2ZW50LWxpbmtcIj5cclxuICAgICAgICAgICAgPFN0eWxlZExpbmsgbGluaz1cIi9zaWduLXVwL1wiPlJlZ2lzdGVyIE5vdzwvU3R5bGVkTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd247XHJcblxyXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkKExpbmspYFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY0OWM7XHJcbiAgZm9udC1mYW1pbHk6IFwiMjlsdGJ1a3JhYm9sZFwiO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAxNnB4IDQ4cHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDk2ZDtcclxuICB9XHJcbmA7XHJcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLmpzPzJiOTciXSwibmFtZXMiOlsiQ291bnRkb3duIiwiY291bnRkb3duRGF0ZSIsInNldENvdW50ZG93bkRhdGUiLCJ1c2VTdGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwic3RhdGUiLCJzZXRTdGF0ZSIsImRheXMiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidXNlRWZmZWN0Iiwic2V0SW50ZXJ2YWwiLCJzZXROZXdUaW1lIiwiY3VycmVudFRpbWUiLCJkaXN0YW5jZVRvRGF0ZSIsImRheXNMZWZ0IiwiTWF0aCIsImZsb29yIiwiaG91cnNMZWZ0IiwibWludXRlc0xlZnQiLCJzZWNvbmRzTGVmdCIsIm51bWJlcnNUb0FkZFplcm9UbyIsImluY2x1ZGVzIiwiYmFja2dyb3VuZEltYWdlIiwibGluZXNJbWciLCJTdHlsZWRMaW5rIiwiTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O3FSQU9BLEdBQU1BLFVBQVMsQ0FBRyxJQUFNLENBQ3RCLEdBQU0sQ0FBQ0MsYUFBRCxDQUFnQkMsZ0JBQWhCLEVBQW9DQyxzREFBUSxDQUNoRCxHQUFJQyxLQUFKLENBQVMsWUFBVCxFQUF1QkMsT0FBdkIsRUFEZ0QsQ0FBbEQsQ0FHQSxHQUFNLENBQUNDLEtBQUQsQ0FBUUMsUUFBUixFQUFvQkosc0RBQVEsQ0FBQyxDQUNqQ0ssSUFBSSxDQUFFLENBRDJCLENBRWpDQyxLQUFLLENBQUUsQ0FGMEIsQ0FHakNDLE9BQU8sQ0FBRSxDQUh3QixDQUlqQ0MsT0FBTyxDQUFFLENBSndCLENBQUQsQ0FBbEMsQ0FPQUMsdURBQVMsQ0FBQyxJQUFNLENBQ2RDLFdBQVcsQ0FBQyxJQUFNQyxVQUFVLEVBQWpCLENBQXFCLElBQXJCLENBQVgsQ0FDRCxDQUZRLENBRU4sRUFGTSxDQUFULENBSUEsR0FBTUEsV0FBVSxDQUFHLElBQU0sQ0FDdkIsR0FBSWIsYUFB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LGlFQUFLLFNBQVMsQ0FBQyxtQkFBZixVQUZGLENBTEYsQ0FTRSxpRUFBSyxTQUFTLENBQUMsaUJBQWYsRUFDRSxpRUFBSyxTQUFTLENBQUMsbUJBQWYsRUFBb0NILEtBQUssQ0FBQ0ksT0FBTixFQUFpQixJQUFyRCxDQURGLENBRUUsaUVBQUssU0FBUyxDQUFDLG1CQUFmLFlBRkYsQ0FURixDQWFFLGlFQUFLLFNBQVMsQ0FBQyxpQkFBZixFQUNFLGlFQUFLLFNBQVMsQ0FBQyxtQkFBZixFQUFvQ0osS0FBSyxDQUFDSyxPQUFOLEVBQWlCLElBQXJELENBREYsQ0FFRSxpRUFBSyxTQUFTLENBQUMsbUJBQWYsWUFGRixDQWJGLENBeEJGLENBMENFLHFFQUNFLCtEQUFHLFNBQVMsQ0FBQyx3QkFBYixnQ0FDNkIsMkZBRDdCLENBREYsQ0FJRSxpRUFBSyxTQUFTLENBQUMsd0JBQWYsRUFDRSwwREFBQyxVQUFELEVBQVksSUFBSSxDQUFDLFdBQWpCLGlCQURGLENBSkYsQ0ExQ0YsQ0FERixDQURGLENBdURELENBN0dELENBK0dlWCx3RUFBZixFQUVBLEdBQU0yQixXQUFVLENBQUcsa0ZBQU9DLDZDQUFQLHdDQUFILHl1TkFBaEIiLCJmaWxlIjoiLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvQ291bnRkb3duLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGxpbmVzSW1nIGZyb20gXCIuLi9pbWcvbGluZXMucG5nXCI7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiLi9saW5rXCI7XHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSBcInJlYWN0LWFuaW1hdGUtb24tc2Nyb2xsXCI7XHJcbmltcG9ydCB7IEFuaW1hdGVkIH0gZnJvbSBcInJlYWN0LWFuaW1hdGVkLWNzc1wiO1xyXG5cclxuY29uc3QgQ291bnRkb3duID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtjb3VudGRvd25EYXRlLCBzZXRDb3VudGRvd25EYXRlXSA9IHVzZVN0YXRlKFxyXG4gICAgbmV3IERhdGUoXCIxMC8yNi8yMDIwXCIpLmdldFRpbWUoKVxyXG4gICk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBkYXlzOiAwLFxyXG4gICAgaG91cnM6IDAsXHJcbiAgICBtaW51dGVzOiAwLFxyXG4gICAgc2Vjb25kczogMCxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEludGVydmFsKCgpID0+IHNldE5ld1RpbWUoKSwgMTAwMCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzZXROZXdUaW1lID0gKCkgPT4ge1xyXG4gICAgaWYgKGNvdW50ZG93bkRhdGUpIHtcclxuICAgICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgIGNvbnN0IGRpc3RhbmNlVG9EYXRlID0gY291bnRkb3duRGF0ZSAtIGN1cnJlbnRUaW1lO1xyXG5cclxuICAgICAgbGV0IGRheXNMZWZ0ID0gTWF0aC5mbG9vcihkaXN0YW5jZVRvRGF0ZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XHJcbiAgICAgIGxldCBob3Vyc0xlZnQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIChkaXN0YW5jZVRvRGF0ZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApXHJcbiAgICAgICk7XHJcbiAgICAgIGxldCBtaW51dGVzTGVmdCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgKGRpc3RhbmNlVG9EYXRlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKVxyXG4gICAgICApO1xyXG4gICAgICBsZXQgc2Vjb25kc0xlZnQgPSBNYXRoLmZsb29yKChkaXN0YW5jZVRvRGF0ZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG5cclxuICAgICAgY29uc3QgbnVtYmVyc1RvQWRkWmVyb1RvID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xyXG5cclxuICAgICAgaWYgKG51bWJlcnNUb0FkZFplcm9Uby5pbmNsdWRlcyhkYXlzTGVmdCkpIHtcclxuICAgICAgICBkYXlzTGVmdCA9IGAwJHtkYXlzTGVmdH1gO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChudW1iZXJzVG9BZGRaZXJvVG8uaW5jbHVkZXMoaG91cnNMZWZ0KSkge1xyXG4gICAgICAgIGhvdXJzTGVmdCA9IGAwJHtob3Vyc0xlZnR9YDtcclxuICAgICAgfVxyXG4gICAgICBpZiAobnVtYmVyc1RvQWRkWmVyb1RvLmluY2x1ZGVzKG1pbnV0ZXNMZWZ0KSkge1xyXG4gICAgICAgIG1pbnV0ZXNMZWZ0ID0gYDAke21pbnV0ZXNMZWZ0fWA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG51bWJlcnNUb0FkZFplcm9Uby5pbmNsdWRlcyhzZWNvbmRzTGVmdCkpIHtcclxuICAgICAgICBzZWNvbmRzTGVmdCA9IGAwJHtzZWNvbmRzTGVmdH1gO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgZGF5czogZGF5c0xlZnQsXHJcbiAgICAgICAgaG91cnM6IGhvdXJzTGVmdCxcclxuICAgICAgICBtaW51dGVzOiBtaW51dGVzTGVmdCxcclxuICAgICAgICBzZWNvbmRzOiBzZWNvbmRzTGVmdCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJjb3VudGRvd24tc2VjdGlvblwiIGNsYXNzTmFtZT1cImNvdW50ZG93bi1zZWN0aW9uXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLXRpdGxlLXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0bGUtaW1nXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7bGluZXNJbWd9KWAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1jdWJlXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIFRoZSBHbG9iYWwgSVAgQ2hhbGxlbmdlcyBGb3J1bSB3aWxsIGJlIGxhdW5jaGVkIG9ue1wiIFwifVxyXG4gICAgICAgICAgICAgIDxzdHJvbmc+T2N0b2JlciAyNnRoLCAyMDIwPC9zdHJvbmc+IGluOlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QW5pbWF0ZWRcclxuICAgICAgICAgIGFuaW1hdGlvbkluPVwibGlnaHRTcGVlZEluXCJcclxuICAgICAgICAgIGFuaW1hdGlvbk91dD1cInpvb21PdXREb3duXCJcclxuICAgICAgICAgIGFuaW1hdGlvbkluRHVyYXRpb249ezEwMDB9XHJcbiAgICAgICAgICBhbmltYXRpb25PdXREdXJhdGlvbj17MTAwMH1cclxuICAgICAgICAgIGlzVmlzaWJsZT17dHJ1ZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBhc2RcclxuICAgICAgICA8L0FuaW1hdGVkPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzLXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzLW5cIj57c3RhdGUuZGF5cyB8fCBcIjAwXCJ9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzLWxcIj5EYXlzPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRkb3duLWN1YmVzLW5cIj57c3RhdGUuaG91cnMgfHwgXCIwMFwifTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bi1jdWJlcy1sXCI+SG91cnM8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtblwiPntzdGF0ZS5taW51dGVzIHx8IFwiMDBcIn08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtbFwiPk1pbnV0ZXM8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtblwiPntzdGF0ZS5zZWNvbmRzIHx8IFwiMDBcIn08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudGRvd24tY3ViZXMtbFwiPlNlY29uZHM8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWdpc3Rlci10by1ldmVudC10ZXh0XCI+XHJcbiAgICAgICAgICAgIFJlZ2lzdGVyIE5vdyB0byBBdHRlbmQgdGhlIDxzdHJvbmc+VmlydHVhbCBNZWV0aW5nITwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWdpc3Rlci10by1ldmVudC1saW5rXCI+XHJcbiAgICAgICAgICAgIDxTdHlsZWRMaW5rIGxpbms9XCIvc2lnbi11cC9cIj5SZWdpc3RlciBOb3c8L1N0eWxlZExpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ291bnRkb3duO1xyXG5cclxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZChMaW5rKWBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NDljO1xyXG4gIGZvbnQtZmFtaWx5OiBcIjI5bHRidWtyYWJvbGRcIjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogMTZweCA0OHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDQ5NmQ7XHJcbiAgfVxyXG5gO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/components/Countdown.js\n");

/***/ })

})