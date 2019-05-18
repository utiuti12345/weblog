var btnSubmit_onclick = function (event) {
  var $submit = $(this);
  var $form = $submit.parents("form");
  $form.attr("method",$submit.data("method"));
  $form.attr("action",$submit.data("action"));
  $form.submit();
  // ボタン非活性化
  $form.off().prop("disabled",true);
  // サブミット無効
  $form.on("submit",false);
};

var document_onready = function (event) {
  $("input[type='submit']").on("click", btnSubmit_onclick);
};

$(document).ready(document_onready);
