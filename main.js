menu_list_array = ["Veg Margherita Pizza", "Meat Monster", "Flatbread Pita", 
"Pepperoni and Jackfruit Juice Pizza", "Key Shaped Compressed Pizza"];


function getmenu(){
var htmldata;
htmldata='<ol class="menu_list">'
menu_list_array.sort()
for(var i=0;i<menu_list_array;i++){
    htmldata=htmldata+'<li>'+menu_list_array+'</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML= htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort()
htmldata
for(var i=0;i<menu_list_array;i++){
    htmldata=htmldata+'<div class="card">'
                    +'<img src="images/pizzaImg"/>'
                    +menu_list_array[i]+'</div>'
}
htmldata=htmldata+'</section>'
}

function add_top(){
    var item= document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}