var rentAdvisor = function(totalCost, numberOfRoommates, utilArray) {

  var sumOfUtil = 0;

  //utilArray is an optional parameter
  if (utilArray != null) {
    var n = utilArray.length;
    for (var i=0; i < n; i++) {
      sumOfUtil += utilArray[i];
    }
  }

  if (numberOfRoommates === 0) {
    return totalCost + sumOfUtil;
  } else {
    return ((totalCost + sumOfUtil)/(numberOfRoommates+1));
  }
};


$(document).ready(function() {

  $("form#rent-form").submit(function(event){

    var totalRent = parseInt($("#total-rent").val());
    var numberOfRoommates = parseInt($("#total-roommates").val());
    var electricity = parseInt($("#electricity").val());
    var internet = parseInt($("#internet").val());
    var cable = parseInt($("#cable").val());
    var phone = parseInt($("#phone").val());
    var parking = parseInt($("#parking").val());

    var utilArray = [electricity, internet, cable, phone, parking];
    var totalCost = (totalRent + numberOfRoommates + electricity + internet + cable + phone + parking);
    var answer = rentAdvisor(totalCost, numberOfRoommates, utilArray);

    $("#rent-form").empty();
    $("#results").show();

    $("#total-rent-td").append("$" + totalRent);
    $("#electricity-td").append("$" + electricity);
    $("#internet-td").append("$" + internet);
    $("#cable-td").append("$" + cable);
    $("#phone-td").append("$" + phone);
    $("#parking-td").append("$" + parking);
    $("#total-cost-td").append("$" + totalCost);

    $("#results").append("<h3><p>With <b>total rent</b> of <span id='css'>$" + totalCost + "</span>and a total of " + numberOfRoommates + " <b>roommates</b>, you will have to pay <span id='css'>$" + answer + "</span> per month.</p></h3>");

    event.preventDefault();

  });
});
