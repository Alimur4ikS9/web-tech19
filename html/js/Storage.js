function SaveItem() {
			
	var name = document.forms.ShoppingList.name.value;
	var data = document.forms.ShoppingList.data.value;
	localStorage.setItem(name, data);
	doShowAll();
	
}

function ModifyItem() {
	var name = document.forms.ShoppingList.name.value;
	document.forms.ShoppingList.data.value = localStorage.getItem(name);
	var data = document.forms.ShoppingList.data.value;
	localStorage.setItem(name, data);
	doShowAll();

}

function RemoveItem() {
	var name = document.forms.ShoppingList.name.value;
	document.forms.ShoppingList.data.value = localStorage.removeItem(name);
	doShowAll();
}

function ClearAll() {
	localStorage.clear();
	doShowAll();
}

// dynamically draw the table

function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>Topic</th><th>Date</th></tr>\n";
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
		}
		if (list == "<tr><th>Topic</th><th>Date</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = list;
	} else {
		alert('cannot');
	}
}
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}




function check()
{
   console.log(localStorage.key(1) + " " + localStorage.getItem(localStorage.key(1)))

    sessionStorage.clear();

  var user =document.getElementsByClassName("name")[0].value, password = document.getElementsByClassName("pass")[0].value;

   console.log(document.getElementsByClassName("name")[0].value + " " + document.getElementsByClassName("pass")[0].value);
  
  for (var i = 0; i < localStorage.length; i++){


if(user == localStorage.key(i) && password  === localStorage.getItem(localStorage.key(i)))
    {
        sessionStorage.setItem(user, password);
          location.href = "index.html";
                        return;
    }

      
    

 

    }

     $('#exampleModal').modal('show');

}

function clear() {
sessionStorage.clear();
document.getElementById('loginform').style.visibility = 'visible';
        document.getElementById('hid').style.visibility = 'hidden';

        document.getElementById('result').innerHTML = "";

// body...
}
