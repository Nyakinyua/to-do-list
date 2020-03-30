// create a close button and append it to each list
var myTodoList = document.getElementsByTagName("LI");
var i;
for (i=0;i<myTodoList.length;i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myTodoList[i].appendChild(span);
}
