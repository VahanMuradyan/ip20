webpackHotUpdate("ip20",{

/***/ "./packages/twentytwenty-theme/src/css/App.css":
/*!*****************************************************!*\
  !*** ./packages/twentytwenty-theme/src/css/App.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"@font-face {\\r\\n  font-family: BukraAlt_Bold;\\r\\n  src: url(static/fonts/BukraAlt_Bold.otf);\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: BukraAlt_Medium;\\r\\n  src: url(static/fonts/BukraAlt_Medium.otf);\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: BukraAlt_Regular;\\r\\n  src: url(static/fonts/BukraAlt_Regular.otf);\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: \\\"29ltbukrabold\\\";\\r\\n  src: url(static/fonts/29ltbukrabold.ttf);\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: \\\"29ltbukrabolditalic\\\";\\r\\n  src: url(static/fonts/29ltbukrabolditalic.ttf);\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: \\\"29ltbukralight\\\";\\r\\n  src: url(static/fonts/29ltbukralight.ttf);\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: \\\"29ltbukraregular\\\";\\r\\n  src: url(static/fonts/29ltbukraregular.ttf);\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\nbody {\\r\\n  background: #aba7a7;\\r\\n}\\r\\n\\r\\n/* Header */\\r\\n.header-container {\\r\\n  padding: 15px 0;\\r\\n  max-width: 1140px;\\r\\n  margin: 0 auto;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n.site-logo {\\r\\n  width: 317px;\\r\\n}\\r\\n.header-links {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n.header-links .register-link {\\r\\n  border-right: 1px solid #86b8cc;\\r\\n}\\r\\n\\r\\n/* Event Information */\\r\\n.event_info_section {\\r\\n  position: relative;\\r\\n}\\r\\n.event_info_section video {\\r\\n  /* width: 100%; */\\r\\n}\\r\\n.video-container {\\r\\n  overflow: hidden;\\r\\n  width: 100%;\\r\\n  height: 700px;\\r\\n  position: relative;\\r\\n}\\r\\n.text_on_video {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.text_on_video .event_title {\\r\\n  font-size: 24px;\\r\\n  color: #ffffff;\\r\\n  margin-bottom: 16px;\\r\\n  font-family: \\\"29ltbukraregular\\\";\\r\\n}\\r\\n.text_on_video .event_desc {\\r\\n  font-size: 36px;\\r\\n  font-weight: bold;\\r\\n  color: #ffffff;\\r\\n  margin-top: 0;\\r\\n  font-family: BukraAlt_Bold;\\r\\n  line-height: 35px;\\r\\n  margin-bottom: 32px;\\r\\n}\\r\\n.start_date_section {\\r\\n  background-color: rgba(0, 0, 0, 0.4);\\r\\n  padding: 25px 25px 20px;\\r\\n  display: flex;\\r\\n  max-width: 385px;\\r\\n}\\r\\n.start_date {\\r\\n  display: flex;\\r\\n  align-items: flex-end;\\r\\n  margin-left: -50px;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n.start_date h1 {\\r\\n  font-size: 72px;\\r\\n  font-family: BukraAlt_Bold;\\r\\n  margin: 0;\\r\\n  color: #fff;\\r\\n  margin-right: 20px;\\r\\n}\\r\\n.start_date p {\\r\\n  font-size: 30px;\\r\\n  font-family: BukraAlt_Regular;\\r\\n  margin: 0;\\r\\n  color: #fff;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n.start_date h5 {\\r\\n  font-size: 30px;\\r\\n  font-family: BukraAlt_Bold;\\r\\n  margin: 0;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n/* Countdown */\\r\\n.countdown-section {\\r\\n  padding: 50px 10px;\\r\\n  background-color: #003347;\\r\\n}\\r\\n.countdown-container {\\r\\n  max-width: 1140px;\\r\\n  margin: 0 auto;\\r\\n  min-height: 300px;\\r\\n}\\r\\n\\r\\n.countdown-container .countdown-title-section {\\r\\n  position: relative;\\r\\n}\\r\\n.countdown-container .title-img {\\r\\n  position: relative;\\r\\n  width: 64px;\\r\\n  height: 64px;\\r\\n}\\r\\n.countdown-container .title-cube {\\r\\n  background: #00496d87;\\r\\n  height: 30px;\\r\\n  width: 30px;\\r\\n  position: absolute;\\r\\n  top: -10px;\\r\\n  left: -10px;\\r\\n}\\r\\n.countdown-container .countdown-title {\\r\\n  position: relative;\\r\\n  margin-left: 25px;\\r\\n  margin-top: -35px;\\r\\n}\\r\\n.countdown-container .countdown-title p {\\r\\n  font-family: BukraAlt_Regular;\\r\\n  font-size: 30px;\\r\\n  font-weight: normal;\\r\\n  font-stretch: normal;\\r\\n  font-style: normal;\\r\\n  line-height: 1.33;\\r\\n  letter-spacing: normal;\\r\\n  color: #ffffff;\\r\\n}\\r\\n.countdown-container .countdown-title strong {\\r\\n  font-family: BukraAlt_Bold;\\r\\n}\\r\\n.countdown-container .countdown-cubes-section {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  margin-top: 80px;\\r\\n}\\r\\n.countdown-container .countdown-cubes:not(:last-child) {\\r\\n  margin-right: 20px;\\r\\n}\\r\\n.countdown-container .countdown-cubes-n {\\r\\n  font-family: BukraAlt_Bold;\\r\\n  font-size: 72px;\\r\\n  font-weight: bold;\\r\\n  font-stretch: normal;\\r\\n  font-style: normal;\\r\\n  line-height: normal;\\r\\n  letter-spacing: normal;\\r\\n  text-align: center;\\r\\n  color: #ffffff;\\r\\n  border: solid 1px #00496d;\\r\\n  background-color: #00496d;\\r\\n  width: 170px;\\r\\n  height: 170px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.countdown-container .countdown-cubes-l {\\r\\n  font-family: BukraAlt_Medium;\\r\\n  font-size: 16px;\\r\\n  font-weight: 500;\\r\\n  font-stretch: normal;\\r\\n  font-style: normal;\\r\\n  line-height: normal;\\r\\n  letter-spacing: normal;\\r\\n  text-align: center;\\r\\n  color: #ffffff;\\r\\n  margin-top: 24px;\\r\\n}\\r\\n.countdown-container .register-to-event-text {\\r\\n  font-family: BukraAlt_Regular;\\r\\n  font-size: 30px;\\r\\n  font-weight: normal;\\r\\n  font-stretch: normal;\\r\\n  font-style: normal;\\r\\n  line-height: 1.33;\\r\\n  letter-spacing: normal;\\r\\n  text-align: center;\\r\\n  color: #ffffff;\\r\\n  margin-top: 80px;\\r\\n}\\r\\n.countdown-container .register-to-event-text strong {\\r\\n  font-family: BukraAlt_Bold;\\r\\n}\\r\\n.countdown-container .register-to-event-link {\\r\\n  text-align: center;\\r\\n  margin-top: 50px;\\r\\n}\\r\\n\\r\\n@media (max-width: 1200px) {\\r\\n  .header-container,\\r\\n  .countdown-container {\\r\\n    max-width: 960px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 992px) {\\r\\n  .header-container,\\r\\n  .countdown-container {\\r\\n    max-width: 720px;\\r\\n  }\\r\\n  .site-logo {\\r\\n    width: 211px;\\r\\n  }\\r\\n  .countdown-container .countdown-cubes-n {\\r\\n    font-size: 48px;\\r\\n    height: 100px;\\r\\n    width: 100px;\\r\\n  }\\r\\n  .countdown-container .register-to-event-text,\\r\\n  .countdown-container .countdown-title p {\\r\\n    font-size: 20px;\\r\\n    line-height: 1.6;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .header-container,\\r\\n  .countdown-container {\\r\\n    max-width: 540px;\\r\\n  }\\r\\n  .register-link {\\r\\n    display: none;\\r\\n  }\\r\\n  .site-logo {\\r\\n    width: 158px;\\r\\n  }\\r\\n  .text_on_video .event_title {\\r\\n    font-size: 18px;\\r\\n  }\\r\\n  .text_on_video .event_desc {\\r\\n    font-size: 24px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 576px) {\\r\\n  .header-container,\\r\\n  .countdown-container {\\r\\n    max-width: calc(100% - 32px);\\r\\n  }\\r\\n  .text_on_video .event_title,\\r\\n  .text_on_video .event_desc {\\r\\n    text-align: center;\\r\\n  }\\r\\n  .start_date_section {\\r\\n    max-width: 100%;\\r\\n  }\\r\\n  .start_date_section img {\\r\\n    width: 48px;\\r\\n    height: 48px;\\r\\n    object-fit: cover;\\r\\n  }\\r\\n  .start_date {\\r\\n    margin-left: -30px;\\r\\n  }\\r\\n  .start_date h1 {\\r\\n    font-size: 48px;\\r\\n  }\\r\\n  .start_date h5,\\r\\n  .start_date p {\\r\\n    font-size: 20px;\\r\\n  }\\r\\n  .text_on_video .event_desc {\\r\\n    font-size: 27px;\\r\\n  }\\r\\n  .countdown-container .countdown-title p {\\r\\n    font-size: 20px;\\r\\n    line-height: 1.5;\\r\\n  }\\r\\n  .countdown-container .title-cube {\\r\\n    height: 20px;\\r\\n    width: 20px;\\r\\n    top: -5px;\\r\\n    left: -5px;\\r\\n  }\\r\\n  .countdown-container .title-img {\\r\\n    height: 48px;\\r\\n    width: 48px;\\r\\n  }\\r\\n  .countdown-container .countdown-cubes-n {\\r\\n    font-size: 24px;\\r\\n    height: 60px;\\r\\n    width: 60px;\\r\\n  }\\r\\n  .countdown-container .countdown-cubes-l {\\r\\n    font-size: 12px;\\r\\n  }\\r\\n  .register-to-event-link a {\\r\\n    display: block;\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2Nzcy9BcHAuY3NzPzc5MDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSw0RUFBYSxpQ0FBaUMsK0NBQStDLEtBQUssb0JBQW9CLG1DQUFtQyxpREFBaUQsS0FBSyxvQkFBb0Isb0NBQW9DLGtEQUFrRCxLQUFLLG9CQUFvQixxQ0FBcUMsK0NBQStDLEtBQUssb0JBQW9CLDJDQUEyQyxxREFBcUQsS0FBSyxvQkFBb0Isc0NBQXNDLGdEQUFnRCxLQUFLLG9CQUFvQix3Q0FBd0Msa0RBQWtELEtBQUssV0FBVyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLFVBQVUsMEJBQTBCLEtBQUssMkNBQTJDLHNCQUFzQix3QkFBd0IscUJBQXFCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEtBQUssZ0JBQWdCLG1CQUFtQixLQUFLLG1CQUFtQixvQkFBb0IscUNBQXFDLDBCQUEwQixLQUFLLGtDQUFrQyxzQ0FBc0MsS0FBSyx3REFBd0QseUJBQXlCLEtBQUssK0JBQStCLHFCQUFxQixRQUFRLHNCQUFzQix1QkFBdUIsa0JBQWtCLG9CQUFvQix5QkFBeUIsS0FBSyxvQkFBb0IseUJBQXlCLGFBQWEsY0FBYyxlQUFlLGdCQUFnQixvQkFBb0IsOEJBQThCLDBCQUEwQixLQUFLLGlDQUFpQyxzQkFBc0IscUJBQXFCLDBCQUEwQix3Q0FBd0MsS0FBSyxnQ0FBZ0Msc0JBQXNCLHdCQUF3QixxQkFBcUIsb0JBQW9CLGlDQUFpQyx3QkFBd0IsMEJBQTBCLEtBQUsseUJBQXlCLDJDQUEyQyw4QkFBOEIsb0JBQW9CLHVCQUF1QixLQUFLLGlCQUFpQixvQkFBb0IsNEJBQTRCLHlCQUF5Qix1QkFBdUIsS0FBSyxvQkFBb0Isc0JBQXNCLGlDQUFpQyxnQkFBZ0Isa0JBQWtCLHlCQUF5QixLQUFLLG1CQUFtQixzQkFBc0Isb0NBQW9DLGdCQUFnQixrQkFBa0IseUJBQXlCLEtBQUssb0JBQW9CLHNCQUFzQixpQ0FBaUMsZ0JBQWdCLGtCQUFrQixLQUFLLCtDQUErQyx5QkFBeUIsZ0NBQWdDLEtBQUssMEJBQTBCLHdCQUF3QixxQkFBcUIsd0JBQXdCLEtBQUssdURBQXVELHlCQUF5QixLQUFLLHFDQUFxQyx5QkFBeUIsa0JBQWtCLG1CQUFtQixLQUFLLHNDQUFzQyw0QkFBNEIsbUJBQW1CLGtCQUFrQix5QkFBeUIsaUJBQWlCLGtCQUFrQixLQUFLLDJDQUEyQyx5QkFBeUIsd0JBQXdCLHdCQUF3QixLQUFLLDZDQUE2QyxvQ0FBb0Msc0JBQXNCLDBCQUEwQiwyQkFBMkIseUJBQXlCLHdCQUF3Qiw2QkFBNkIscUJBQXFCLEtBQUssa0RBQWtELGlDQUFpQyxLQUFLLG1EQUFtRCxvQkFBb0IsOEJBQThCLHVCQUF1QixLQUFLLDREQUE0RCx5QkFBeUIsS0FBSyw2Q0FBNkMsaUNBQWlDLHNCQUFzQix3QkFBd0IsMkJBQTJCLHlCQUF5QiwwQkFBMEIsNkJBQTZCLHlCQUF5QixxQkFBcUIsZ0NBQWdDLGdDQUFnQyxtQkFBbUIsb0JBQW9CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssNkNBQTZDLG1DQUFtQyxzQkFBc0IsdUJBQXVCLDJCQUEyQix5QkFBeUIsMEJBQTBCLDZCQUE2Qix5QkFBeUIscUJBQXFCLHVCQUF1QixLQUFLLGtEQUFrRCxvQ0FBb0Msc0JBQXNCLDBCQUEwQiwyQkFBMkIseUJBQXlCLHdCQUF3Qiw2QkFBNkIseUJBQXlCLHFCQUFxQix1QkFBdUIsS0FBSyx5REFBeUQsaUNBQWlDLEtBQUssa0RBQWtELHlCQUF5Qix1QkFBdUIsS0FBSyxvQ0FBb0Msb0RBQW9ELHlCQUF5QixPQUFPLEtBQUssbUNBQW1DLG9EQUFvRCx5QkFBeUIsT0FBTyxrQkFBa0IscUJBQXFCLE9BQU8sK0NBQStDLHdCQUF3QixzQkFBc0IscUJBQXFCLE9BQU8sa0dBQWtHLHdCQUF3Qix5QkFBeUIsT0FBTyxLQUFLLG1DQUFtQyxvREFBb0QseUJBQXlCLE9BQU8sc0JBQXNCLHNCQUFzQixPQUFPLGtCQUFrQixxQkFBcUIsT0FBTyxtQ0FBbUMsd0JBQXdCLE9BQU8sa0NBQWtDLHdCQUF3QixPQUFPLEtBQUssbUNBQW1DLG9EQUFvRCxxQ0FBcUMsT0FBTyxvRUFBb0UsMkJBQTJCLE9BQU8sMkJBQTJCLHdCQUF3QixPQUFPLCtCQUErQixvQkFBb0IscUJBQXFCLDBCQUEwQixPQUFPLG1CQUFtQiwyQkFBMkIsT0FBTyxzQkFBc0Isd0JBQXdCLE9BQU8sMENBQTBDLHdCQUF3QixPQUFPLGtDQUFrQyx3QkFBd0IsT0FBTywrQ0FBK0Msd0JBQXdCLHlCQUF5QixPQUFPLHdDQUF3QyxxQkFBcUIsb0JBQW9CLGtCQUFrQixtQkFBbUIsT0FBTyx1Q0FBdUMscUJBQXFCLG9CQUFvQixPQUFPLCtDQUErQyx3QkFBd0IscUJBQXFCLG9CQUFvQixPQUFPLCtDQUErQyx3QkFBd0IsT0FBTyxpQ0FBaUMsdUJBQXVCLG9CQUFvQixPQUFPLEtBQUssSyIsImZpbGUiOiIuL3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvY3NzL0FwcC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IEJ1a3JhQWx0X0JvbGQ7XFxyXFxuICBzcmM6IHVybChzdGF0aWMvZm9udHMvQnVrcmFBbHRfQm9sZC5vdGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBCdWtyYUFsdF9NZWRpdW07XFxyXFxuICBzcmM6IHVybChzdGF0aWMvZm9udHMvQnVrcmFBbHRfTWVkaXVtLm90Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IEJ1a3JhQWx0X1JlZ3VsYXI7XFxyXFxuICBzcmM6IHVybChzdGF0aWMvZm9udHMvQnVrcmFBbHRfUmVndWxhci5vdGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiMjlsdGJ1a3JhYm9sZFxcXCI7XFxyXFxuICBzcmM6IHVybChzdGF0aWMvZm9udHMvMjlsdGJ1a3JhYm9sZC50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiMjlsdGJ1a3JhYm9sZGl0YWxpY1xcXCI7XFxyXFxuICBzcmM6IHVybChzdGF0aWMvZm9udHMvMjlsdGJ1a3JhYm9sZGl0YWxpYy50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiMjlsdGJ1a3JhbGlnaHRcXFwiO1xcclxcbiAgc3JjOiB1cmwoc3RhdGljL2ZvbnRzLzI5bHRidWtyYWxpZ2h0LnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCIyOWx0YnVrcmFyZWd1bGFyXFxcIjtcXHJcXG4gIHNyYzogdXJsKHN0YXRpYy9mb250cy8yOWx0YnVrcmFyZWd1bGFyLnR0Zik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogI2FiYTdhNztcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuLmhlYWRlci1jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogMTVweCAwO1xcclxcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uc2l0ZS1sb2dvIHtcXHJcXG4gIHdpZHRoOiAzMTdweDtcXHJcXG59XFxyXFxuLmhlYWRlci1saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWRlci1saW5rcyAucmVnaXN0ZXItbGluayB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODZiOGNjO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFdmVudCBJbmZvcm1hdGlvbiAqL1xcclxcbi5ldmVudF9pbmZvX3NlY3Rpb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uZXZlbnRfaW5mb19zZWN0aW9uIHZpZGVvIHtcXHJcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcclxcbn1cXHJcXG4udmlkZW8tY29udGFpbmVyIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNzAwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi50ZXh0X29uX3ZpZGVvIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi50ZXh0X29uX3ZpZGVvIC5ldmVudF90aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIjI5bHRidWtyYXJlZ3VsYXJcXFwiO1xcclxcbn1cXHJcXG4udGV4dF9vbl92aWRlbyAuZXZlbnRfZGVzYyB7XFxyXFxuICBmb250LXNpemU6IDM2cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBCdWtyYUFsdF9Cb2xkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcclxcbn1cXHJcXG4uc3RhcnRfZGF0ZV9zZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIHBhZGRpbmc6IDI1cHggMjVweCAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1heC13aWR0aDogMzg1cHg7XFxyXFxufVxcclxcbi5zdGFydF9kYXRlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuICBtYXJnaW4tbGVmdDogLTUwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG4uc3RhcnRfZGF0ZSBoMSB7XFxyXFxuICBmb250LXNpemU6IDcycHg7XFxyXFxuICBmb250LWZhbWlseTogQnVrcmFBbHRfQm9sZDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG4uc3RhcnRfZGF0ZSBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBCdWtyYUFsdF9SZWd1bGFyO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxufVxcclxcbi5zdGFydF9kYXRlIGg1IHtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBCdWtyYUFsdF9Cb2xkO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIENvdW50ZG93biAqL1xcclxcbi5jb3VudGRvd24tc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiA1MHB4IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMzQ3O1xcclxcbn1cXHJcXG4uY291bnRkb3duLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDExNDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgbWluLWhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb3VudGRvd24tY29udGFpbmVyIC5jb3VudGRvd24tdGl0bGUtc2VjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5jb3VudGRvd24tY29udGFpbmVyIC50aXRsZS1pbWcge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDY0cHg7XFxyXFxuICBoZWlnaHQ6IDY0cHg7XFxyXFxufVxcclxcbi5jb3VudGRvd24tY29udGFpbmVyIC50aXRsZS1jdWJlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDQ5NmQ4NztcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG4gIGxlZnQ6IC0xMHB4O1xcclxcbn1cXHJcXG4uY291bnRkb3duLWNvbnRhaW5lciAuY291bnRkb3duLXRpdGxlIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbiAgbWFyZ2luLXRvcDogLTM1cHg7XFxyXFxufVxcclxcbi5jb3VudGRvd24tY29udGFpbmVyIC5jb3VudGRvd24tdGl0bGUgcCB7XFxyXFxuICBmb250LWZhbWlseTogQnVrcmFBbHRfUmVndWxhcjtcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjMzO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG4uY291bnRkb3duLWNvbnRhaW5lciAuY291bnRkb3duLXRpdGxlIHN0cm9uZyB7XFxyXFxuICBmb250LWZhbWlseTogQnVrcmFBbHRfQm9sZDtcXHJcXG59XFxyXFxuLmNvdW50ZG93bi1jb250YWluZXIgLmNvdW50ZG93bi1jdWJlcy1zZWN0aW9uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDgwcHg7XFxyXFxufVxcclxcbi5jb3VudGRvd24tY29udGFpbmVyIC5jb3VudGRvd24tY3ViZXM6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbi5jb3VudGRvd24tY29udGFpbmVyIC5jb3VudGRvd24tY3ViZXMtbiB7XFxyXFxuICBmb250LWZhbWlseTogQnVrcmFBbHRfQm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogNzJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwNDk2ZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQ5NmQ7XFxyXFxuICB3aWR0aDogMTcwcHg7XFxyXFxuICBoZWlnaHQ6IDE3MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvdW50ZG93bi1jb250YWluZXIgLmNvdW50ZG93bi1jdWJlcy1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBCdWtyYUFsdF9NZWRpdW07XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgbWFyZ2luLXRvcDogMjRweDtcXHJcXG59XFxyXFxuLmNvdW50ZG93bi1jb250YWluZXIgLnJlZ2lzdGVyLXRvLWV2ZW50LXRleHQge1xcclxcbiAgZm9udC1mYW1pbHk6IEJ1a3JhQWx0X1JlZ3VsYXI7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBsaW5lLWhlaWdodDogMS4zMztcXHJcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIG1hcmdpbi10b3A6IDgwcHg7XFxyXFxufVxcclxcbi5jb3VudGRvd24tY29udGFpbmVyIC5yZWdpc3Rlci10by1ldmVudC10ZXh0IHN0cm9uZyB7XFxyXFxuICBmb250LWZhbWlseTogQnVrcmFBbHRfQm9sZDtcXHJcXG59XFxyXFxuLmNvdW50ZG93bi1jb250YWluZXIgLnJlZ2lzdGVyLXRvLWV2ZW50LWxpbmsge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgLmhlYWRlci1jb250YWluZXIsXFxyXFxuICAuY291bnRkb3duLWNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogOTYwcHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xcclxcbiAgLmhlYWRlci1jb250YWluZXIsXFxyXFxuICAuY291bnRkb3duLWNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogNzIwcHg7XFxyXFxuICB9XFxyXFxuICAuc2l0ZS1sb2dvIHtcXHJcXG4gICAgd2lkdGg6IDIxMXB4O1xcclxcbiAgfVxcclxcbiAgLmNvdW50ZG93bi1jb250YWluZXIgLmNvdW50ZG93bi1jdWJlcy1uIHtcXHJcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICB9XFxyXFxuICAuY291bnRkb3duLWNvbnRhaW5lciAucmVnaXN0ZXItdG8tZXZlbnQtdGV4dCxcXHJcXG4gIC5jb3VudGRvd24tY29udGFpbmVyIC5jb3VudGRvd24tdGl0bGUgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuaGVhZGVyLWNvbnRhaW5lcixcXHJcXG4gIC5jb3VudGRvd24tY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NDBweDtcXHJcXG4gIH1cXHJcXG4gIC5yZWdpc3Rlci1saW5rIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5zaXRlLWxvZ28ge1xcclxcbiAgICB3aWR0aDogMTU4cHg7XFxyXFxuICB9XFxyXFxuICAudGV4dF9vbl92aWRlbyAuZXZlbnRfdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICB9XFxyXFxuICAudGV4dF9vbl92aWRlbyAuZXZlbnRfZGVzYyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxyXFxuICAuaGVhZGVyLWNvbnRhaW5lcixcXHJcXG4gIC5jb3VudGRvd24tY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcXHJcXG4gIH1cXHJcXG4gIC50ZXh0X29uX3ZpZGVvIC5ldmVudF90aXRsZSxcXHJcXG4gIC50ZXh0X29uX3ZpZGVvIC5ldmVudF9kZXNjIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLnN0YXJ0X2RhdGVfc2VjdGlvbiB7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIC5zdGFydF9kYXRlX3NlY3Rpb24gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDQ4cHg7XFxyXFxuICAgIGhlaWdodDogNDhweDtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB9XFxyXFxuICAuc3RhcnRfZGF0ZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcXHJcXG4gIH1cXHJcXG4gIC5zdGFydF9kYXRlIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgfVxcclxcbiAgLnN0YXJ0X2RhdGUgaDUsXFxyXFxuICAuc3RhcnRfZGF0ZSBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgLnRleHRfb25fdmlkZW8gLmV2ZW50X2Rlc2Mge1xcclxcbiAgICBmb250LXNpemU6IDI3cHg7XFxyXFxuICB9XFxyXFxuICAuY291bnRkb3duLWNvbnRhaW5lciAuY291bnRkb3duLXRpdGxlIHAge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICB9XFxyXFxuICAuY291bnRkb3duLWNvbnRhaW5lciAudGl0bGUtY3ViZSB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIHRvcDogLTVweDtcXHJcXG4gICAgbGVmdDogLTVweDtcXHJcXG4gIH1cXHJcXG4gIC5jb3VudGRvd24tY29udGFpbmVyIC50aXRsZS1pbWcge1xcclxcbiAgICBoZWlnaHQ6IDQ4cHg7XFxyXFxuICAgIHdpZHRoOiA0OHB4O1xcclxcbiAgfVxcclxcbiAgLmNvdW50ZG93bi1jb250YWluZXIgLmNvdW50ZG93bi1jdWJlcy1uIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgfVxcclxcbiAgLmNvdW50ZG93bi1jb250YWluZXIgLmNvdW50ZG93bi1jdWJlcy1sIHtcXHJcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgfVxcclxcbiAgLnJlZ2lzdGVyLXRvLWV2ZW50LWxpbmsgYSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/css/App.css\n");

/***/ })

})