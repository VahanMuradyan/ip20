webpackHotUpdate("ip20",{

/***/ "./packages/twentytwenty-theme/src/css/App.css":
/*!*****************************************************!*\
  !*** ./packages/twentytwenty-theme/src/css/App.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"@font-face {\\r\\n  font-family: BukraAlt_Bold;\\r\\n  src: url(static/fonts/BukraAlt_Bold.otf);\\r\\n} \\r\\n\\r\\n@font-face {\\r\\n  font-family: BukraAlt_Medium;\\r\\n  src: url(static/fonts/BukraAlt_Medium.otf);\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: BukraAlt_Regular;\\r\\n  src: url(static/fonts/BukraAlt_Regular.otf);\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: '29ltbukrabold';\\r\\n  src: url(static/fonts/29ltbukrabold.ttf);\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: '29ltbukrabolditalic';\\r\\n  src: url(static/fonts/29ltbukrabolditalic.ttf);\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: '29ltbukralight';\\r\\n  src: url(static/fonts/29ltbukralight.ttf);\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: '29ltbukraregular';\\r\\n  src: url(static/fonts/29ltbukraregular.ttf);\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\nbody {\\r\\n  background: #aba7a7;\\r\\n}\\r\\n\\r\\n/* Header */\\r\\n.header-container {\\r\\n  padding: 15px 0;\\r\\n  max-width: 1140px;\\r\\n  margin: 0 auto;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n.site-logo {\\r\\n  width: 317px;\\r\\n}\\r\\n.header-links {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n.header-links .register-link {\\r\\n  border-right: 1px solid #86b8cc;\\r\\n}\\r\\n\\r\\n/* Event Information */\\r\\n.event_info_section {\\r\\n  position: relative;\\r\\n}\\r\\n.event_info_section video {\\r\\n  /* width: 100%; */\\r\\n}\\r\\n.video-container {\\r\\n  overflow: hidden;\\r\\n  width: 100%;\\r\\n  height: 700px;\\r\\n  position: relative;\\r\\n}\\r\\n.text_on_video {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.text_on_video .event_title {\\r\\n  font-size: 24px;\\r\\n  color: #ffffff;\\r\\n  margin-bottom: 15px;\\r\\n  font-family: '29ltbukraregular';\\r\\n}\\r\\n.text_on_video .event_desc {\\r\\n  font-size: 36px;\\r\\n  font-weight: bold;\\r\\n  color: #ffffff;\\r\\n  margin-top: 0;\\r\\n  font-family: BukraAlt_Bold;\\r\\n  line-height: 35px;\\r\\n}\\r\\n.start_date_section {\\r\\n  background-color: rgba(0, 0, 0, 0.4);\\r\\n  padding: 25px 25px 20px;\\r\\n  display: flex;\\r\\n  max-width: 385px;\\r\\n}\\r\\n.start_date {\\r\\n  display: flex;\\r\\n  align-items: flex-end;\\r\\n  margin-left: -50px;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n.start_date h1 {\\r\\n  font-size: 72px;\\r\\n  font-family: BukraAlt_Bold;\\r\\n  margin: 0;\\r\\n  color: #fff;\\r\\n  margin-right: 20px;\\r\\n}\\r\\n.start_date p {\\r\\n  font-size: 30px;\\r\\n  font-family: BukraAlt_Regular;\\r\\n  margin: 0;\\r\\n  color: #fff;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n.start_date h5 {\\r\\n  font-size: 30px;\\r\\n  font-family: BukraAlt_Bold;\\r\\n  margin: 0;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n\\r\\n/* Countdown */\\r\\n.countdown-section {\\r\\n  padding: 50px;\\r\\n  background-color: #003347;\\r\\n}\\r\\n.countdown-container {\\r\\n  max-width: 1140px;\\r\\n  margin: 0 auto;\\r\\n}\\r\\n\\r\\n.countdown-container .countdown-title-section {\\r\\n  display: flex;\\r\\n}\\r\\n.countdown-container .title-img {\\r\\n  position: relative;\\r\\n  width: 64px;\\r\\n  height: 64px;\\r\\n}\\r\\n.countdown-container .title-cube {\\r\\n  background: #00496d;\\r\\n  height: 30px;\\r\\n  width: 30px;\\r\\n  position: absolute;\\r\\n  top: -10px;\\r\\n  left: -10px;\\r\\n}\\r\\n.countdown-container .countdown-title p {\\r\\n  font-family: BukraAlt_Regular;\\r\\n  font-size: 30px;\\r\\n  font-weight: normal;\\r\\n  font-stretch: normal;\\r\\n  font-style: normal;\\r\\n  line-height: 1.33;\\r\\n  letter-spacing: normal;\\r\\n  color: #ffffff;\\r\\n}\\r\\n.countdown-container .countdown-title strong {\\r\\n  font-family: BukraAlt_Bold;\\r\\n}\\r\\n\\r\\n@media (max-width: 1200px) {\\r\\n  .header-container {\\r\\n    max-width: 960px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 992px) {\\r\\n  .header-container {\\r\\n    max-width: 720px;\\r\\n  }\\r\\n  .site-logo {\\r\\n    width: 211px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .header-container {\\r\\n    max-width: 540px;\\r\\n  }\\r\\n  .register-link {\\r\\n    display: none;\\r\\n  }\\r\\n  .site-logo {\\r\\n    width: 158px;\\r\\n  }\\r\\n  .text_on_video .event_title {\\r\\n    font-size: 18px;\\r\\n  }\\r\\n  .text_on_video .event_desc {\\r\\n    font-size: 24px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 576px) {\\r\\n  .header-container {\\r\\n    max-width: calc(100% - 32px);\\r\\n  }\\r\\n  .text_on_video .event_title, .text_on_video .event_desc {\\r\\n    text-align: center;\\r\\n  }\\r\\n  .start_date_section {\\r\\n    max-width: 100%;\\r\\n  }\\r\\n  .start_date_section img {\\r\\n    width: 48px;\\r\\n    height: 48px;\\r\\n    object-fit: cover;\\r\\n  }\\r\\n  .start_date {\\r\\n    margin-left: -30px;\\r\\n  }\\r\\n  .start_date h1 {\\r\\n    font-size: 48px;\\r\\n  }\\r\\n  .start_date h5,\\r\\n  .start_date p {\\r\\n    font-size: 20px;\\r\\n  }\\r\\n  .text_on_video .event_desc {\\r\\n    font-size: 27px;\\r\\n  }\\r\\n}\\r\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2Nzcy9BcHAuY3NzPzc5MDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSw0RUFBYSxpQ0FBaUMsK0NBQStDLEtBQUsscUJBQXFCLG1DQUFtQyxpREFBaUQsS0FBSyxvQkFBb0Isb0NBQW9DLGtEQUFrRCxLQUFLLG9CQUFvQixtQ0FBbUMsK0NBQStDLEtBQUssb0JBQW9CLHlDQUF5QyxxREFBcUQsS0FBSyxvQkFBb0Isb0NBQW9DLGdEQUFnRCxLQUFLLG9CQUFvQixzQ0FBc0Msa0RBQWtELEtBQUssV0FBVyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLFVBQVUsMEJBQTBCLEtBQUssMkNBQTJDLHNCQUFzQix3QkFBd0IscUJBQXFCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEtBQUssZ0JBQWdCLG1CQUFtQixLQUFLLG1CQUFtQixvQkFBb0IscUNBQXFDLDBCQUEwQixLQUFLLGtDQUFrQyxzQ0FBc0MsS0FBSyx3REFBd0QseUJBQXlCLEtBQUssK0JBQStCLHFCQUFxQixRQUFRLHNCQUFzQix1QkFBdUIsa0JBQWtCLG9CQUFvQix5QkFBeUIsS0FBSyxvQkFBb0IseUJBQXlCLGFBQWEsY0FBYyxlQUFlLGdCQUFnQixvQkFBb0IsOEJBQThCLDBCQUEwQixLQUFLLGlDQUFpQyxzQkFBc0IscUJBQXFCLDBCQUEwQixzQ0FBc0MsS0FBSyxnQ0FBZ0Msc0JBQXNCLHdCQUF3QixxQkFBcUIsb0JBQW9CLGlDQUFpQyx3QkFBd0IsS0FBSyx5QkFBeUIsMkNBQTJDLDhCQUE4QixvQkFBb0IsdUJBQXVCLEtBQUssaUJBQWlCLG9CQUFvQiw0QkFBNEIseUJBQXlCLHVCQUF1QixLQUFLLG9CQUFvQixzQkFBc0IsaUNBQWlDLGdCQUFnQixrQkFBa0IseUJBQXlCLEtBQUssbUJBQW1CLHNCQUFzQixvQ0FBb0MsZ0JBQWdCLGtCQUFrQix5QkFBeUIsS0FBSyxvQkFBb0Isc0JBQXNCLGlDQUFpQyxnQkFBZ0Isa0JBQWtCLEtBQUssbURBQW1ELG9CQUFvQixnQ0FBZ0MsS0FBSywwQkFBMEIsd0JBQXdCLHFCQUFxQixLQUFLLHVEQUF1RCxvQkFBb0IsS0FBSyxxQ0FBcUMseUJBQXlCLGtCQUFrQixtQkFBbUIsS0FBSyxzQ0FBc0MsMEJBQTBCLG1CQUFtQixrQkFBa0IseUJBQXlCLGlCQUFpQixrQkFBa0IsS0FBSyw2Q0FBNkMsb0NBQW9DLHNCQUFzQiwwQkFBMEIsMkJBQTJCLHlCQUF5Qix3QkFBd0IsNkJBQTZCLHFCQUFxQixLQUFLLGtEQUFrRCxpQ0FBaUMsS0FBSyxvQ0FBb0MseUJBQXlCLHlCQUF5QixPQUFPLEtBQUssbUNBQW1DLHlCQUF5Qix5QkFBeUIsT0FBTyxrQkFBa0IscUJBQXFCLE9BQU8sS0FBSyxtQ0FBbUMseUJBQXlCLHlCQUF5QixPQUFPLHNCQUFzQixzQkFBc0IsT0FBTyxrQkFBa0IscUJBQXFCLE9BQU8sbUNBQW1DLHdCQUF3QixPQUFPLGtDQUFrQyx3QkFBd0IsT0FBTyxLQUFLLG1DQUFtQyx5QkFBeUIscUNBQXFDLE9BQU8sK0RBQStELDJCQUEyQixPQUFPLDJCQUEyQix3QkFBd0IsT0FBTywrQkFBK0Isb0JBQW9CLHFCQUFxQiwwQkFBMEIsT0FBTyxtQkFBbUIsMkJBQTJCLE9BQU8sc0JBQXNCLHdCQUF3QixPQUFPLDBDQUEwQyx3QkFBd0IsT0FBTyxrQ0FBa0Msd0JBQXdCLE9BQU8sS0FBSyxLIiwiZmlsZSI6Ii4vcGFja2FnZXMvdHdlbnR5dHdlbnR5LXRoZW1lL3NyYy9jc3MvQXBwLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogQnVrcmFBbHRfQm9sZDtcXHJcXG4gIHNyYzogdXJsKHN0YXRpYy9mb250cy9CdWtyYUFsdF9Cb2xkLm90Zik7XFxyXFxufSBcXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBCdWtyYUFsdF9NZWRpdW07XFxyXFxuICBzcmM6IHVybChzdGF0aWMvZm9udHMvQnVrcmFBbHRfTWVkaXVtLm90Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IEJ1a3JhQWx0X1JlZ3VsYXI7XFxyXFxuICBzcmM6IHVybChzdGF0aWMvZm9udHMvQnVrcmFBbHRfUmVndWxhci5vdGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnMjlsdGJ1a3JhYm9sZCc7XFxyXFxuICBzcmM6IHVybChzdGF0aWMvZm9udHMvMjlsdGJ1a3JhYm9sZC50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnMjlsdGJ1a3JhYm9sZGl0YWxpYyc7XFxyXFxuICBzcmM6IHVybChzdGF0aWMvZm9udHMvMjlsdGJ1a3JhYm9sZGl0YWxpYy50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnMjlsdGJ1a3JhbGlnaHQnO1xcclxcbiAgc3JjOiB1cmwoc3RhdGljL2ZvbnRzLzI5bHRidWtyYWxpZ2h0LnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICcyOWx0YnVrcmFyZWd1bGFyJztcXHJcXG4gIHNyYzogdXJsKHN0YXRpYy9mb250cy8yOWx0YnVrcmFyZWd1bGFyLnR0Zik7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogI2FiYTdhNztcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuLmhlYWRlci1jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogMTVweCAwO1xcclxcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uc2l0ZS1sb2dvIHtcXHJcXG4gIHdpZHRoOiAzMTdweDtcXHJcXG59XFxyXFxuLmhlYWRlci1saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmhlYWRlci1saW5rcyAucmVnaXN0ZXItbGluayB7XFxyXFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODZiOGNjO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFdmVudCBJbmZvcm1hdGlvbiAqL1xcclxcbi5ldmVudF9pbmZvX3NlY3Rpb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uZXZlbnRfaW5mb19zZWN0aW9uIHZpZGVvIHtcXHJcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcclxcbn1cXHJcXG4udmlkZW8tY29udGFpbmVyIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNzAwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi50ZXh0X29uX3ZpZGVvIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi50ZXh0X29uX3ZpZGVvIC5ldmVudF90aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDI0cHg7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICBmb250LWZhbWlseTogJzI5bHRidWtyYXJlZ3VsYXInO1xcclxcbn1cXHJcXG4udGV4dF9vbl92aWRlbyAuZXZlbnRfZGVzYyB7XFxyXFxuICBmb250LXNpemU6IDM2cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBCdWtyYUFsdF9Cb2xkO1xcclxcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XFxyXFxufVxcclxcbi5zdGFydF9kYXRlX3NlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgcGFkZGluZzogMjVweCAyNXB4IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWF4LXdpZHRoOiAzODVweDtcXHJcXG59XFxyXFxuLnN0YXJ0X2RhdGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcbi5zdGFydF9kYXRlIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogNzJweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBCdWtyYUFsdF9Cb2xkO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbi5zdGFydF9kYXRlIHAge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IEJ1a3JhQWx0X1JlZ3VsYXI7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuLnN0YXJ0X2RhdGUgaDUge1xcclxcbiAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IEJ1a3JhQWx0X0JvbGQ7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogQ291bnRkb3duICovXFxyXFxuLmNvdW50ZG93bi1zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMzQ3O1xcclxcbn1cXHJcXG4uY291bnRkb3duLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDExNDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRkb3duLWNvbnRhaW5lciAuY291bnRkb3duLXRpdGxlLXNlY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLmNvdW50ZG93bi1jb250YWluZXIgLnRpdGxlLWltZyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogNjRweDtcXHJcXG4gIGhlaWdodDogNjRweDtcXHJcXG59XFxyXFxuLmNvdW50ZG93bi1jb250YWluZXIgLnRpdGxlLWN1YmUge1xcclxcbiAgYmFja2dyb3VuZDogIzAwNDk2ZDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtMTBweDtcXHJcXG4gIGxlZnQ6IC0xMHB4O1xcclxcbn1cXHJcXG4uY291bnRkb3duLWNvbnRhaW5lciAuY291bnRkb3duLXRpdGxlIHAge1xcclxcbiAgZm9udC1mYW1pbHk6IEJ1a3JhQWx0X1JlZ3VsYXI7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBsaW5lLWhlaWdodDogMS4zMztcXHJcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuLmNvdW50ZG93bi1jb250YWluZXIgLmNvdW50ZG93bi10aXRsZSBzdHJvbmcge1xcclxcbiAgZm9udC1mYW1pbHk6IEJ1a3JhQWx0X0JvbGQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gIC5oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxyXFxuICAuaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogNzIwcHg7XFxyXFxuICB9XFxyXFxuICAuc2l0ZS1sb2dvIHtcXHJcXG4gICAgd2lkdGg6IDIxMXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NDBweDtcXHJcXG4gIH1cXHJcXG4gIC5yZWdpc3Rlci1saW5rIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5zaXRlLWxvZ28ge1xcclxcbiAgICB3aWR0aDogMTU4cHg7XFxyXFxuICB9XFxyXFxuICAudGV4dF9vbl92aWRlbyAuZXZlbnRfdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICB9XFxyXFxuICAudGV4dF9vbl92aWRlbyAuZXZlbnRfZGVzYyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxyXFxuICAuaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XFxyXFxuICB9XFxyXFxuICAudGV4dF9vbl92aWRlbyAuZXZlbnRfdGl0bGUsIC50ZXh0X29uX3ZpZGVvIC5ldmVudF9kZXNjIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLnN0YXJ0X2RhdGVfc2VjdGlvbiB7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIC5zdGFydF9kYXRlX3NlY3Rpb24gaW1nIHtcXHJcXG4gICAgd2lkdGg6IDQ4cHg7XFxyXFxuICAgIGhlaWdodDogNDhweDtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB9XFxyXFxuICAuc3RhcnRfZGF0ZSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcXHJcXG4gIH1cXHJcXG4gIC5zdGFydF9kYXRlIGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcclxcbiAgfVxcclxcbiAgLnN0YXJ0X2RhdGUgaDUsXFxyXFxuICAuc3RhcnRfZGF0ZSBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgfVxcclxcbiAgLnRleHRfb25fdmlkZW8gLmV2ZW50X2Rlc2Mge1xcclxcbiAgICBmb250LXNpemU6IDI3cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/css/App.css\n");

/***/ })

})