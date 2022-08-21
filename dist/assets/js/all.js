"use strict";

$('.reply').click(function (e) {
  e.preventDefault();
  $('.reply_content,.answer,.assignment_btn_group').toggleClass('d-none');
});
$('.cancel').click(function (e) {
  e.preventDefault();
  $('.reply_content,.answer,.assignment_btn_group').toggleClass('d-none');
});
$('.Verified').click(function (e) {
  e.preventDefault();
  $('.Verified,.Verified_button').toggleClass('d-none');
});
$('.Verified_button').click(function (e) {
  e.preventDefault();
  $('.Verified,.Verified_button').toggleClass('d-none');
});
//# sourceMappingURL=all.js.map
