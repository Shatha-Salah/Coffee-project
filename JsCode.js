// Contact Us Page
function validateform() {
  var FirstName = document.getElementById("fname");
  var LastName = document.getElementById("lname");
  var Message = document.getElementById("Message");
  var select = document.getElementById("Type");

  if (FirstName.value == "") {
    alert("FirstName must be filled out");
    return false;
  }
  else if (LastName.value == "") {
    alert("LastName must be filled out ");
    return false;
  }
  else if (Message.value == "") {
    alert("Message must be filled out ");
    return false;
  }

  if (select.value == "enquiry")
    alert("Please select enquiry type")
  return false;

}
// Home Page
function changeContent() {
  document.getElementById("change").innerHTML = "Welcome to Coffee House";
}

//Menu Page

// object constructor 
function Dessert(list, price) {
  this.list = list;
  this.price = price;

}
var d1 = new Dessert("Chocolate Cornflake Nest", 5);
var d2 = new Dessert("Chocolate & Hazelnut Shimmer Cake", 10);
var d3 = new Dessert("Chocolate Torte", 17);
var d4 = new Dessert("Salted Caramel Brownie", 20);
var d5 = new Dessert("Lime & Coconut Loaf Cake", 5);
var d6 = new Dessert("Milk Chocolate Chunk Shortbread", 9);
var d7 = new Dessert("Cinnamon Brioche Bun", 10);

//print d1 values 
// for (x in d1) {
// document.write("<br>" + d1[x])
// }

//array of objects 
var arrDessert = [d1, d2, d3, d4, d5, d6, d7]

function createTable() {
  var ctable = "<table border='1'  >"
  for (var i = 0; i < arrDessert.length; i++) {
    ctable += "<tr>"

    for (x in arrDessert[i]) {
      ctable += "<td>" + arrDessert[i][x] + "</td>"
    }
    ctable += "</tr>"
  }
  ctable += "</table>"
  return ctable
}
//document.getElementById("content").innerHTML = createTable()


function getTable() {
  document.getElementById("t").innerHTML = createTable()
}
