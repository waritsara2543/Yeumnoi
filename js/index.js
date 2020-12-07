// splitter

window.fn = {};

window.fn.open = function () {
  var menu = document.getElementById('menu');

  menu.open();
};

window.fn.load = function (page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');

  content.load(page)
    .then(menu.close.bind(menu));

};


//alert เลือกวันที่ยืม
var selectDate = function () {
  var dialog = document.getElementById('my-alert-dialog');

  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('alert-dialog.html', { append: true })
      .then(function (dialog) {
        dialog.show();
      });
  }

};
















