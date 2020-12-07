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
var OKAlertDialog = function () {

  var daysDiff;


  var startDate = document.getElementById('startDate').value;
  var endDate = document.getElementById('endDate').value;
  console.log(startDate);
  console.log(endDate);
  startDate = startDate.split("-");
  endDate = endDate.split("-");
  sDate = new Date(startDate[0], startDate[1] - 1, startDate[2]);
  eDate = new Date(endDate[0], endDate[1] - 1, endDate[2]);
  daysDiff = Math.round((eDate - sDate) / 86400000);
  console.log(daysDiff);
  document.getElementById("incorrectDate").innerHTML = "*****กรุณากรอกวันที่ให้ถูกต้อง*****";
  if (daysDiff > 0) {

    document.getElementById('my-alert-dialog')
      .hide();
  }
  
};
var cancleAlertDialog = function () {


  document
    .getElementById('my-alert-dialog')
    .hide();
}



var notify = function () {
  ons.notification.alert('ชำระเงินเรียบร้อยแล้ว');
  $('#showShoppingCart').hide();
};















