webpackHotUpdate("ip20",{

/***/ "./packages/twentytwenty-theme/src/css/App.css":
/*!*****************************************************!*\
  !*** ./packages/twentytwenty-theme/src/css/App.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"@font-face {\\r\\n  font-family: BukraAlt_Bold;\\r\\n  src: url(static/fonts/BukraAlt_Bold.otf);\\r\\n} \\r\\n\\r\\n@font-face {\\r\\n  font-family: BukraAlt_Medium;\\r\\n  src: url(static/fonts/BukraAlt_Medium.otf);\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: BukraAlt_Regular;\\r\\n  src: url(static/fonts/BukraAlt_Regular.otf);\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: '29ltbukrabold';\\r\\n  src: url(static/fonts/29ltbukrabold.ttf);\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: '29ltbukrabolditalic';\\r\\n  src: url(static/fonts/29ltbukrabolditalic.ttf);\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: '29ltbukralight';\\r\\n  src: url(static/fonts/29ltbukralight.ttf);\\r\\n}\\r\\n\\r\\n@font-face {\\r\\n  font-family: '29ltbukraregular';\\r\\n  src: url(static/fonts/29ltbukraregular.ttf);\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\nbody {\\r\\n  background: #aba7a7;\\r\\n}\\r\\n\\r\\n/* Header */\\r\\n.header-container {\\r\\n  padding: 15px 0;\\r\\n  max-width: 1140px;\\r\\n  margin: 0 auto;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n.site-logo {\\r\\n  width: 317px;\\r\\n}\\r\\n.header-links {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n.header-links .register-link {\\r\\n  border-right: 1px solid #86b8cc;\\r\\n}\\r\\n\\r\\n/* Event Information */\\r\\n.event_info_section {\\r\\n  position: relative;\\r\\n}\\r\\n.event_info_section video {\\r\\n  /* width: 100%; */\\r\\n}\\r\\n.video-container {\\r\\n  overflow: hidden;\\r\\n  width: 100%;\\r\\n  height: 700px;\\r\\n  position: relative;\\r\\n}\\r\\n.text_on_video {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  bottom: 0;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n.text_on_video .event_title {\\r\\n  font-size: 24px;\\r\\n  color: #ffffff;\\r\\n  margin-bottom: 15px;\\r\\n  font-family: '29ltbukraregular';\\r\\n}\\r\\n.text_on_video .event_desc {\\r\\n  font-size: 36px;\\r\\n  font-weight: bold;\\r\\n  color: #ffffff;\\r\\n  margin-top: 0;\\r\\n  font-family: BukraAlt_Bold;\\r\\n  line-height: 35px;\\r\\n}\\r\\n.start_date_section {\\r\\n  background-color: rgba(0, 0, 0, 0.4);\\r\\n  padding: 25px 25px 20px;\\r\\n  display: flex;\\r\\n  max-width: 385px;\\r\\n}\\r\\n.start_date {\\r\\n  display: flex;\\r\\n  align-items: flex-end;\\r\\n  margin-left: -50px;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n.start_date h1 {\\r\\n  font-size: 72px;\\r\\n  font-family: BukraAlt_Bold;\\r\\n  margin: 0;\\r\\n  color: #fff;\\r\\n  margin-right: 20px;\\r\\n}\\r\\n.start_date p {\\r\\n  font-size: 30px;\\r\\n  font-family: BukraAlt_Regular;\\r\\n  margin: 0;\\r\\n  color: #fff;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n.start_date h5 {\\r\\n  font-size: 30px;\\r\\n  font-family: BukraAlt_Bold;\\r\\n  margin: 0;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n\\r\\n/* Countdown */\\r\\n.countdown-section {\\r\\n  padding: 50px 10px;\\r\\n  background-color: #003347;\\r\\n}\\r\\n.countdown-container {\\r\\n  max-width: 1140px;\\r\\n  margin: 0 auto;\\r\\n  min-height: 300px;\\r\\n}\\r\\n\\r\\n.countdown-container .countdown-title-section {\\r\\n  position: relative;\\r\\n}\\r\\n.countdown-container .title-img {\\r\\n  position: relative;\\r\\n  width: 64px;\\r\\n  height: 64px;\\r\\n}\\r\\n.countdown-container .title-cube {\\r\\n  background: #00496d87;\\r\\n  height: 30px;\\r\\n  width: 30px;\\r\\n  position: absolute;\\r\\n  top: -10px;\\r\\n  left: -10px;\\r\\n}\\r\\n.countdown-container .countdown-title {\\r\\n  position: relative;\\r\\n  margin-left: 25px;\\r\\n  margin-top: -35px;\\r\\n}\\r\\n.countdown-container .countdown-title p {\\r\\n  font-family: BukraAlt_Regular;\\r\\n  font-size: 30px;\\r\\n  font-weight: normal;\\r\\n  font-stretch: normal;\\r\\n  font-style: normal;\\r\\n  line-height: 1.33;\\r\\n  letter-spacing: normal;\\r\\n  color: #ffffff;\\r\\n}\\r\\n.countdown-container .countdown-title strong {\\r\\n  font-family: BukraAlt_Bold;\\r\\n}\\r\\n.countdown-cubes-section {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n.countdown-cubes {\\r\\n  margin-right: 20px;\\r\\n}\\r\\n.countdown-cubes-n {\\r\\n  font-family: BukraAlt_Bold  ;\\r\\n  font-size: 72px;\\r\\n  font-weight: bold;\\r\\n  font-stretch: normal;\\r\\n  font-style: normal;\\r\\n  line-height: normal;\\r\\n  letter-spacing: normal;\\r\\n  text-align: center;\\r\\n  color: #ffffff;\\r\\n  border: solid 1px #00496d;\\r\\n  background-color: #00496d;\\r\\n}\\r\\n.countdown-cubes-l {\\r\\n\\r\\n}\\r\\n\\r\\n@media (max-width: 1200px) {\\r\\n  .header-container,\\r\\n  .countdown-container {\\r\\n    max-width: 960px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 992px) {\\r\\n  .header-container,\\r\\n  .countdown-container {\\r\\n    max-width: 720px;\\r\\n  }\\r\\n  .site-logo {\\r\\n    width: 211px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .header-container,\\r\\n  .countdown-container {\\r\\n    max-width: 540px;\\r\\n  }\\r\\n  .register-link {\\r\\n    display: none;\\r\\n  }\\r\\n  .site-logo {\\r\\n    width: 158px;\\r\\n  }\\r\\n  .text_on_video .event_title {\\r\\n    font-size: 18px;\\r\\n  }\\r\\n  .text_on_video .event_desc {\\r\\n    font-size: 24px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 576px) {\\r\\n  .header-container,\\r\\n  .countdown-container {\\r\\n    max-width: calc(100% - 32px);\\r\\n  }\\r\\n  .text_on_video .event_title, .text_on_video .event_desc {\\r\\n    text-align: center;\\r\\n  }\\r\\n  .start_date_section {\\r\\n    max-width: 100%;\\r\\n  }\\r\\n  .start_date_section img {\\r\\n    width: 48px;\\r\\n    height: 48px;\\r\\n    object-fit: cover;\\r\\n  }\\r\\n  .start_date {\\r\\n    margin-left: -30px;\\r\\n  }\\r\\n  .start_date h1 {\\r\\n    font-size: 48px;\\r\\n  }\\r\\n  .start_date h5,\\r\\n  .start_date p {\\r\\n    font-size: 20px;\\r\\n  }\\r\\n  .text_on_video .event_desc {\\r\\n    font-size: 27px;\\r\\n  }\\r\\n  .countdown-container .countdown-title p {\\r\\n    font-size: 20px;\\r\\n    line-height: 1.50;\\r\\n  }\\r\\n  .countdown-container .title-cube {\\r\\n    height: 20px;\\r\\n    width: 20px;\\r\\n    top: -5px;\\r\\n    left: -5px;\\r\\n  }\\r\\n  .countdown-container .title-img {\\r\\n    height: 48px;\\r\\n    width: 48px;\\r\\n  }\\r\\n}\\r\\n\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2Nzcy9BcHAuY3NzPzc5MDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZSw0RUFBYSxpQ0FBaUMsK0NBQStDLEtBQUsscUJBQXFCLG1DQUFtQyxpREFBaUQsS0FBSyxvQkFBb0Isb0NBQW9DLGtEQUFrRCxLQUFLLG9CQUFvQixtQ0FBbUMsK0NBQStDLEtBQUssb0JBQW9CLHlDQUF5QyxxREFBcUQsS0FBSyxvQkFBb0Isb0NBQW9DLGdEQUFnRCxLQUFLLG9CQUFvQixzQ0FBc0Msa0RBQWtELEtBQUssV0FBVyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLFVBQVUsMEJBQTBCLEtBQUssMkNBQTJDLHNCQUFzQix3QkFBd0IscUJBQXFCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEtBQUssZ0JBQWdCLG1CQUFtQixLQUFLLG1CQUFtQixvQkFBb0IscUNBQXFDLDBCQUEwQixLQUFLLGtDQUFrQyxzQ0FBc0MsS0FBSyx3REFBd0QseUJBQXlCLEtBQUssK0JBQStCLHFCQUFxQixRQUFRLHNCQUFzQix1QkFBdUIsa0JBQWtCLG9CQUFvQix5QkFBeUIsS0FBSyxvQkFBb0IseUJBQXlCLGFBQWEsY0FBYyxlQUFlLGdCQUFnQixvQkFBb0IsOEJBQThCLDBCQUEwQixLQUFLLGlDQUFpQyxzQkFBc0IscUJBQXFCLDBCQUEwQixzQ0FBc0MsS0FBSyxnQ0FBZ0Msc0JBQXNCLHdCQUF3QixxQkFBcUIsb0JBQW9CLGlDQUFpQyx3QkFBd0IsS0FBSyx5QkFBeUIsMkNBQTJDLDhCQUE4QixvQkFBb0IsdUJBQXVCLEtBQUssaUJBQWlCLG9CQUFvQiw0QkFBNEIseUJBQXlCLHVCQUF1QixLQUFLLG9CQUFvQixzQkFBc0IsaUNBQWlDLGdCQUFnQixrQkFBa0IseUJBQXlCLEtBQUssbUJBQW1CLHNCQUFzQixvQ0FBb0MsZ0JBQWdCLGtCQUFrQix5QkFBeUIsS0FBSyxvQkFBb0Isc0JBQXNCLGlDQUFpQyxnQkFBZ0Isa0JBQWtCLEtBQUssbURBQW1ELHlCQUF5QixnQ0FBZ0MsS0FBSywwQkFBMEIsd0JBQXdCLHFCQUFxQix3QkFBd0IsS0FBSyx1REFBdUQseUJBQXlCLEtBQUsscUNBQXFDLHlCQUF5QixrQkFBa0IsbUJBQW1CLEtBQUssc0NBQXNDLDRCQUE0QixtQkFBbUIsa0JBQWtCLHlCQUF5QixpQkFBaUIsa0JBQWtCLEtBQUssMkNBQTJDLHlCQUF5Qix3QkFBd0Isd0JBQXdCLEtBQUssNkNBQTZDLG9DQUFvQyxzQkFBc0IsMEJBQTBCLDJCQUEyQix5QkFBeUIsd0JBQXdCLDZCQUE2QixxQkFBcUIsS0FBSyxrREFBa0QsaUNBQWlDLEtBQUssOEJBQThCLG9CQUFvQiw4QkFBOEIsS0FBSyxzQkFBc0IseUJBQXlCLEtBQUssd0JBQXdCLG1DQUFtQyxzQkFBc0Isd0JBQXdCLDJCQUEyQix5QkFBeUIsMEJBQTBCLDZCQUE2Qix5QkFBeUIscUJBQXFCLGdDQUFnQyxnQ0FBZ0MsS0FBSyx3QkFBd0IsU0FBUyxvQ0FBb0Msb0RBQW9ELHlCQUF5QixPQUFPLEtBQUssbUNBQW1DLG9EQUFvRCx5QkFBeUIsT0FBTyxrQkFBa0IscUJBQXFCLE9BQU8sS0FBSyxtQ0FBbUMsb0RBQW9ELHlCQUF5QixPQUFPLHNCQUFzQixzQkFBc0IsT0FBTyxrQkFBa0IscUJBQXFCLE9BQU8sbUNBQW1DLHdCQUF3QixPQUFPLGtDQUFrQyx3QkFBd0IsT0FBTyxLQUFLLG1DQUFtQyxvREFBb0QscUNBQXFDLE9BQU8sK0RBQStELDJCQUEyQixPQUFPLDJCQUEyQix3QkFBd0IsT0FBTywrQkFBK0Isb0JBQW9CLHFCQUFxQiwwQkFBMEIsT0FBTyxtQkFBbUIsMkJBQTJCLE9BQU8sc0JBQXNCLHdCQUF3QixPQUFPLDBDQUEwQyx3QkFBd0IsT0FBTyxrQ0FBa0Msd0JBQXdCLE9BQU8sK0NBQStDLHdCQUF3QiwwQkFBMEIsT0FBTyx3Q0FBd0MscUJBQXFCLG9CQUFvQixrQkFBa0IsbUJBQW1CLE9BQU8sdUNBQXVDLHFCQUFxQixvQkFBb0IsT0FBTyxLQUFLLEsiLCJmaWxlIjoiLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2Nzcy9BcHAuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJAZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBCdWtyYUFsdF9Cb2xkO1xcclxcbiAgc3JjOiB1cmwoc3RhdGljL2ZvbnRzL0J1a3JhQWx0X0JvbGQub3RmKTtcXHJcXG59IFxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6IEJ1a3JhQWx0X01lZGl1bTtcXHJcXG4gIHNyYzogdXJsKHN0YXRpYy9mb250cy9CdWtyYUFsdF9NZWRpdW0ub3RmKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogQnVrcmFBbHRfUmVndWxhcjtcXHJcXG4gIHNyYzogdXJsKHN0YXRpYy9mb250cy9CdWtyYUFsdF9SZWd1bGFyLm90Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICcyOWx0YnVrcmFib2xkJztcXHJcXG4gIHNyYzogdXJsKHN0YXRpYy9mb250cy8yOWx0YnVrcmFib2xkLnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICcyOWx0YnVrcmFib2xkaXRhbGljJztcXHJcXG4gIHNyYzogdXJsKHN0YXRpYy9mb250cy8yOWx0YnVrcmFib2xkaXRhbGljLnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICcyOWx0YnVrcmFsaWdodCc7XFxyXFxuICBzcmM6IHVybChzdGF0aWMvZm9udHMvMjlsdGJ1a3JhbGlnaHQudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICBmb250LWZhbWlseTogJzI5bHRidWtyYXJlZ3VsYXInO1xcclxcbiAgc3JjOiB1cmwoc3RhdGljL2ZvbnRzLzI5bHRidWtyYXJlZ3VsYXIudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYWJhN2E3O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgKi9cXHJcXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAxNXB4IDA7XFxyXFxuICBtYXgtd2lkdGg6IDExNDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5zaXRlLWxvZ28ge1xcclxcbiAgd2lkdGg6IDMxN3B4O1xcclxcbn1cXHJcXG4uaGVhZGVyLWxpbmtzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uaGVhZGVyLWxpbmtzIC5yZWdpc3Rlci1saW5rIHtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4NmI4Y2M7XFxyXFxufVxcclxcblxcclxcbi8qIEV2ZW50IEluZm9ybWF0aW9uICovXFxyXFxuLmV2ZW50X2luZm9fc2VjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcbi5ldmVudF9pbmZvX3NlY3Rpb24gdmlkZW8ge1xcclxcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxyXFxufVxcclxcbi52aWRlby1jb250YWluZXIge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA3MDBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuLnRleHRfb25fdmlkZW8ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnRleHRfb25fdmlkZW8gLmV2ZW50X3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnMjlsdGJ1a3JhcmVndWxhcic7XFxyXFxufVxcclxcbi50ZXh0X29uX3ZpZGVvIC5ldmVudF9kZXNjIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxuICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgZm9udC1mYW1pbHk6IEJ1a3JhQWx0X0JvbGQ7XFxyXFxuICBsaW5lLWhlaWdodDogMzVweDtcXHJcXG59XFxyXFxuLnN0YXJ0X2RhdGVfc2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICBwYWRkaW5nOiAyNXB4IDI1cHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtd2lkdGg6IDM4NXB4O1xcclxcbn1cXHJcXG4uc3RhcnRfZGF0ZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcbiAgbWFyZ2luLWxlZnQ6IC01MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuLnN0YXJ0X2RhdGUgaDEge1xcclxcbiAgZm9udC1zaXplOiA3MnB4O1xcclxcbiAgZm9udC1mYW1pbHk6IEJ1a3JhQWx0X0JvbGQ7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuLnN0YXJ0X2RhdGUgcCB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LWZhbWlseTogQnVrcmFBbHRfUmVndWxhcjtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbn1cXHJcXG4uc3RhcnRfZGF0ZSBoNSB7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LWZhbWlseTogQnVrcmFBbHRfQm9sZDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBDb3VudGRvd24gKi9cXHJcXG4uY291bnRkb3duLXNlY3Rpb24ge1xcclxcbiAgcGFkZGluZzogNTBweCAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzM0NztcXHJcXG59XFxyXFxuLmNvdW50ZG93bi1jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY291bnRkb3duLWNvbnRhaW5lciAuY291bnRkb3duLXRpdGxlLXNlY3Rpb24ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG4uY291bnRkb3duLWNvbnRhaW5lciAudGl0bGUtaW1nIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiA2NHB4O1xcclxcbiAgaGVpZ2h0OiA2NHB4O1xcclxcbn1cXHJcXG4uY291bnRkb3duLWNvbnRhaW5lciAudGl0bGUtY3ViZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMDA0OTZkODc7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICB3aWR0aDogMzBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogLTEwcHg7XFxyXFxuICBsZWZ0OiAtMTBweDtcXHJcXG59XFxyXFxuLmNvdW50ZG93bi1jb250YWluZXIgLmNvdW50ZG93bi10aXRsZSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW4tbGVmdDogMjVweDtcXHJcXG4gIG1hcmdpbi10b3A6IC0zNXB4O1xcclxcbn1cXHJcXG4uY291bnRkb3duLWNvbnRhaW5lciAuY291bnRkb3duLXRpdGxlIHAge1xcclxcbiAgZm9udC1mYW1pbHk6IEJ1a3JhQWx0X1JlZ3VsYXI7XFxyXFxuICBmb250LXNpemU6IDMwcHg7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBsaW5lLWhlaWdodDogMS4zMztcXHJcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxyXFxuICBjb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuLmNvdW50ZG93bi1jb250YWluZXIgLmNvdW50ZG93bi10aXRsZSBzdHJvbmcge1xcclxcbiAgZm9udC1mYW1pbHk6IEJ1a3JhQWx0X0JvbGQ7XFxyXFxufVxcclxcbi5jb3VudGRvd24tY3ViZXMtc2VjdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi5jb3VudGRvd24tY3ViZXMge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG4uY291bnRkb3duLWN1YmVzLW4ge1xcclxcbiAgZm9udC1mYW1pbHk6IEJ1a3JhQWx0X0JvbGQgIDtcXHJcXG4gIGZvbnQtc2l6ZTogNzJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAjZmZmZmZmO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzAwNDk2ZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDQ5NmQ7XFxyXFxufVxcclxcbi5jb3VudGRvd24tY3ViZXMtbCB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gIC5oZWFkZXItY29udGFpbmVyLFxcclxcbiAgLmNvdW50ZG93bi1jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcXHJcXG4gIC5oZWFkZXItY29udGFpbmVyLFxcclxcbiAgLmNvdW50ZG93bi1jb250YWluZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDcyMHB4O1xcclxcbiAgfVxcclxcbiAgLnNpdGUtbG9nbyB7XFxyXFxuICAgIHdpZHRoOiAyMTFweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAuaGVhZGVyLWNvbnRhaW5lcixcXHJcXG4gIC5jb3VudGRvd24tY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1NDBweDtcXHJcXG4gIH1cXHJcXG4gIC5yZWdpc3Rlci1saW5rIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIC5zaXRlLWxvZ28ge1xcclxcbiAgICB3aWR0aDogMTU4cHg7XFxyXFxuICB9XFxyXFxuICAudGV4dF9vbl92aWRlbyAuZXZlbnRfdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICB9XFxyXFxuICAudGV4dF9vbl92aWRlbyAuZXZlbnRfZGVzYyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XFxyXFxuICAuaGVhZGVyLWNvbnRhaW5lcixcXHJcXG4gIC5jb3VudGRvd24tY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcXHJcXG4gIH1cXHJcXG4gIC50ZXh0X29uX3ZpZGVvIC5ldmVudF90aXRsZSwgLnRleHRfb25fdmlkZW8gLmV2ZW50X2Rlc2Mge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAuc3RhcnRfZGF0ZV9zZWN0aW9uIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLnN0YXJ0X2RhdGVfc2VjdGlvbiBpbWcge1xcclxcbiAgICB3aWR0aDogNDhweDtcXHJcXG4gICAgaGVpZ2h0OiA0OHB4O1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIH1cXHJcXG4gIC5zdGFydF9kYXRlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xcclxcbiAgfVxcclxcbiAgLnN0YXJ0X2RhdGUgaDEge1xcclxcbiAgICBmb250LXNpemU6IDQ4cHg7XFxyXFxuICB9XFxyXFxuICAuc3RhcnRfZGF0ZSBoNSxcXHJcXG4gIC5zdGFydF9kYXRlIHAge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICB9XFxyXFxuICAudGV4dF9vbl92aWRlbyAuZXZlbnRfZGVzYyB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjdweDtcXHJcXG4gIH1cXHJcXG4gIC5jb3VudGRvd24tY29udGFpbmVyIC5jb3VudGRvd24tdGl0bGUgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTA7XFxyXFxuICB9XFxyXFxuICAuY291bnRkb3duLWNvbnRhaW5lciAudGl0bGUtY3ViZSB7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIHRvcDogLTVweDtcXHJcXG4gICAgbGVmdDogLTVweDtcXHJcXG4gIH1cXHJcXG4gIC5jb3VudGRvd24tY29udGFpbmVyIC50aXRsZS1pbWcge1xcclxcbiAgICBoZWlnaHQ6IDQ4cHg7XFxyXFxuICAgIHdpZHRoOiA0OHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/css/App.css\n");

/***/ })

})