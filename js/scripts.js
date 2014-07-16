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

    var totalCost = parseInt($("#total-rent").val());
    var numberOfRoommates = parseInt($("#total-roommates").val());
    var electricity = parseInt($("#electricity").val()); 
    var internet = parseInt($("#internet").val()); 
    var cable = parseInt($("#cable").val()); 
    var phone = parseInt($("#phone").val()); 
    var parking = parseInt($("#parking").val()); 

    // Add default values (Can't add things)
    var utilArray = [electricity, internet, cable, phone, parking]; 
    var totalRent = (totalCost + numberOfRoommates + electricity + internet + cable + phone + parking); 
    var answer = rentAdvisor(totalCost, numberOfRoommates, utilArray);
    $("#rent-form").empty();
    $("#results").show(); 

    // $("#here").text("hello"); <--not working 

    $("#results").append("<p>With total rent of $" + totalRent + "and a total of " + numberOfRoommates + " roommates, you will have to pay $" + answer + " per month.</p>");

    event.preventDefault();

  });
});
