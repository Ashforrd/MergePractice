$(function(){
  $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
  let topicCount = topic.length;
  //一秒鐘有1000毫秒
  //每分鐘60秒、每小時60分鐘、每天24小時
  let millisecsPerDay = 24*60*60*1000;
  for(var x=0;x<topicCount;x++){
    var class_num = "class" + x;
    var set_item = "<tr id=" + class_num + ">" + `<td>${x+1}</td>` + `<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString()}</td>` + `<td>${topic[x]}</td>` + "</tr>";
    $("#courseTable").append(set_item);
  }

  // for(var i=0;i<topicCount;i++){
  //   $("#class"+i).css("color","red");    
  // }

  $("#courseTable tr").each(function(){
    var currentRow=$(this);
    var col1_value=currentRow.find("td:eq(0)");
    var col2_value=currentRow.find("td:eq(1)");
    var col3_value=currentRow.find("td:eq(2)");
    if(col3_value.text() == "停課"){
      col3_value.css('color','red');
      col2_value.css('color','red');
    }
  });
});

$(function(){
  $( "#datepicker-widget-format" ).datepicker();
});