"use strict";
$(function(){
  // 超出指定长度...显示
  function ellipsis(obj, length) {
    var str = '',
        len = obj.text().length;
    if (length < len) {
      str = obj.text().substring(0, length) + '...';
      obj.text(str);
    }
  }
  var text = $('.test3 .text');
  ellipsis(text, 120);
});
