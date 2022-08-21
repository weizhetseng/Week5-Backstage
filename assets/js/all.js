"use strict";

$('.reply').click(function (e) {
  e.preventDefault();
  $('.reply_content,.answer,.assignment_btn_group').toggleClass('d-none');
});
$('.cancel').click(function (e) {
  e.preventDefault();
  $('.reply_content,.answer,.assignment_btn_group').toggleClass('d-none');
});
//# sourceMappingURL=all.js.map
