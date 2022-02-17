var products = [
  {
    id: "100",
    name: "iPhone 4S",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "101",
    name: "Moto X",
    brand: "Motorola",
    os: "Android",
  },
  {
    id: "102",
    name: "iPhone 6",
    brand: "Apple",
    os: "iOS",
  },
  {
    id: "103",
    name: "Samsung Galaxy S",
    brand: "Samsung",
    os: "Android",
  },
  {
    id: "104",
    name: "Google Nexus",
    brand: "ASUS",
    os: "Android",
  },
  {
    id: "105",
    name: "Surface",
    brand: "Microsoft",
    os: "Windows",
  },
];

$(document).ready(function () {
  display();
  $("#errorMsg").hide();

  $("#btnSearch1").on("click", function () {
	
	var  fieldOS = document.getElementById("filterOS").value;
    var  fieldBrand = document.getElementById("filterBrand").value;
	if(fieldOS == "" && !fieldBrand== ""){
	
      var html =
        "<table> <tr> <th> Id </th> </t> <th>   Name</th> </t> <th> Brand </th< </t> <th> Operating System </th> ";
      for (i = 0; i < products.length; i++) {
		  if( products[i].brand== fieldBrand){
        html +=
          "<tr><td>" +
          products[i].id +
          "</td><td>" +
          products[i].name +
          "</td><td>" +
          products[i].brand +
          "</td><td>" +
          products[i].os +
          '</td> <td> <button id="btnHide"  onclick= " hideRow(' +
          parseInt(products[i].id) +
          ')">X</button> </td>  </tr>';
      

      html += "</table>";
      document.getElementById("product_table").innerHTML = html;
		  }
		}
	}
	 else if (!fieldOS == "" && fieldBrand== ""){
				  var html =
			"<table> <tr> <th> Id </th> </t> <th>   Name</th> </t> <th> Brand </th< </t> <th> Operating System </th> ";
		  for (i = 0; i < products.length; i++) {
			  if( products[i].os== fieldOS){
			html +=
			  "<tr><td>" +
			  products[i].id +
			  "</td><td>" +
			  products[i].name +
			  "</td><td>" +
			  products[i].brand +
			  "</td><td>" +
			  products[i].os +
			  '</td> <td> <button id="btnHide"  onclick= " hideRow(' +
			  parseInt(products[i].id) +
			  ')">X</button> </td> </tr>';
		  
	
		  html += "</table>";
		  document.getElementById("product_table").innerHTML = html;
			  }
			}
		}
		
		else if (!fieldOS == "" && !fieldBrand== ""){
			var html =
	  "<table> <tr> <th> Id </th> </t> <th>   Name</th> </t> <th> Brand </th< </t> <th> Operating System </th> ";
	for (i = 0; i < products.length; i++) {
		
		if( products[i].os== fieldOS && products[i].brand == fieldBrand){
			
	  html +=
		"<tr><td>" +
		products[i].id +
		"</td><td>" +
		products[i].name +
		"</td><td>" +
		products[i].brand +
		"</td><td>" +
		products[i].os +
		'</td> <td> <button id="btnHide"  onclick= " hideRow(' +
		parseInt(products[i].id) +
		')">X</button> </td>  </tr>';
	

	html += "</table>";
	document.getElementById("product_table").innerHTML = html;
		}
	  }
  }
  else {
	  display();
  }
		
		
		
  });
  $("#btnSearch2").on('click',function(){
	    
    var  selec = document.getElementById("selector").value;
	var inputsel = document.getElementById("searchElement2").value;
	console.log(inputsel);
	if (selec == "ID"){	 
		var html =
		"<table> <tr> <th> Id </th> </t> <th>   Name</th> </t> <th> Brand </th< </t> <th> Operating System </th> ";
	  for (i = 0; i < products.length; i++) {
		  
		  if( products[i].id== parseInt(inputsel)){
			
		html +=
		  "<tr><td>" +
		  products[i].id +
		  "</td><td>" +
		  products[i].name +
		  "</td><td>" +
		  products[i].brand +
		  "</td><td>" +
		  products[i].os +
		  '</td> <td> <button id="btnHide"  onclick= " hideRow(' +
		  parseInt(products[i].id) +
		  ')">X</button> </td>  </tr>';
	  
  
	  html += "</table>";
	  document.getElementById("product_table").innerHTML = html;
		  }
		}
	}
	else if(selec == "Name") {
		console.log("hii");
		var html =
		"<table> <tr> <th> Id </th> </t> <th>   Name</th> </t> <th> Brand </th< </t> <th> Operating System </th> ";
	  for (i = 0; i < products.length; i++) {
		  
		  if( products[i].name == inputsel)
		  {
			  
		  html +=
		  "<tr><td>" +
		  products[i].id +
		  "</td><td>" +
		  products[i].name +
		  "</td><td>" +
		  products[i].brand +
		  "</td><td>" +
		  products[i].os +
		  '</td> <td> <button id="btnHide"  onclick= " hideRow(' +
		  parseInt(products[i].id) +
		  ')">X</button> </td>  </tr>';
	  
  
	  html += "</table>";
	  document.getElementById("product_table").innerHTML = html;
		  }
		}

	}
	else{
		

		display();
		 

	}

	

  });

});
function display() {
  var html =
    "<table> <tr> <th> Id </th> </t> <th>   Name</th> </t> <th> Brand </th< </t> <th> Operating System </th> ";
  for (i = 0; i < products.length; i++) {
    html +=
      "<tr><td>" +
      products[i].id +
      "</td><td>" +
      products[i].name +
      "</td><td>" +
      products[i].brand +
      "</td><td>" +
      products[i].os +
      '</td> <td> <button id="btnHide"  onclick= " hideRow(' +
      parseInt(products[i].id) +
      ')">X</button> </td></tr>';
  }

  html += "</table>";
  document.getElementById("product_table").innerHTML = html;
}
 
 function hideRow(x){
	 
	 for (let i=0; i<products.length; i++){
		 if (products[i].id==x){
			 
			 if(x==100){
			 
			 $("tr").eq(1).hide();
			 }
			 else if (x==101){
				$("tr").eq(2).hide();

			 }
			 else if (x==102){
				$("tr").eq(3).hide();

			 }
			 else if (x==103){
				$("tr").eq(4).hide();

			 }
			 else if (x==104){
				$("tr").eq(5).hide();

			 }
			 else if (x==105){
				$("tr").eq(6).hide();

			 }
		 }
	 }


	 
	
}
 