window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  
  content.load(page)
    .then(menu.close.bind(menu));
   
};


//alert เลือกวันที่ยืม
var selectDate = function() {
  var dialog = document.getElementById('my-alert-dialog');

  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('alert-dialog.html', { append: true })
      .then(function(dialog) {
        dialog.show();
      });
  }
};
var hideAlertDialog = function() {
  document
    .getElementById('my-alert-dialog')
    .hide();
};

var notify = function() {
  ons.notification.alert('This dialog was created with ons.notification');
};




// $(function(){

// 	var startDateTextBox = $('#dateStart');
// 	var endDateTextBox = $('#dateEnd');

// 	startDateTextBox.datepicker({ 
// 		dateFormat: 'dd-M-yy',
// 		onClose: function(dateText, inst) {
// 			if (endDateTextBox.val() != '') {
// 				var testStartDate = startDateTextBox.datetimepicker('getDate');
// 				var testEndDate = endDateTextBox.datetimepicker('getDate');
// 				if (testStartDate > testEndDate)
// 					endDateTextBox.datetimepicker('setDate', testStartDate);
// 			}
// 			else {
// 				endDateTextBox.val(dateText);
// 			}
// 		},
// 		onSelect: function (selectedDateTime){
// 			endDateTextBox.datetimepicker('option', 'minDate', startDateTextBox.datetimepicker('getDate') );
// 		}
// 	});
// 	endDateTextBox.datepicker({ 
// 		dateFormat: 'dd-M-yy',
// 		onClose: function(dateText, inst) {
// 			if (startDateTextBox.val() != '') {
// 				var testStartDate = startDateTextBox.datetimepicker('getDate');
// 				var testEndDate = endDateTextBox.datetimepicker('getDate');
// 				if (testStartDate > testEndDate)
// 					startDateTextBox.datetimepicker('setDate', testEndDate);
// 			}
// 			else {
// 				startDateTextBox.val(dateText);
// 			}
// 		},
// 		onSelect: function (selectedDateTime){
// 			startDateTextBox.datetimepicker('option', 'maxDate', endDateTextBox.datetimepicker('getDate') );
// 		}
// 	});

// });







            
    



