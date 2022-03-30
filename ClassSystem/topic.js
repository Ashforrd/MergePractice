var topic = ["尚未開學","國定假日","環境準備","隨機性","重複性","條件判斷","停課"];
var startDate = new Date();

function setMonthAndDay(startMonth,startDay){
    startDate.setMonth(startMonth-1);
    startDate.setDate(startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

var dateObj = $( "#datepicker-widget-format" ).datepicker().on('changeDate',function(e){
    e.format();
});

function set(){
    // var input_val = $("input").val();
    
    // $('#text').css('color','red');

    var dateObj = $( "#datepicker-widget-format" ).datepicker().on('changeDate',function(e){
        e.format();
        });
    startDate = dateObj;
    // console.log(startDate);
    // console.log(startDate);
}

setMonthAndDay(3,23);
// console.log($( "#datepicker-widget-format" ).datepicker("getDate"));


