function add(){
    var area=Number(document.getElementById("firstno").value)*Number(document.getElementById("firstno").value);
    var perimeter=Number(document.getElementById("firstno").value)*4;
    document.getElementById("lblArea").innerHTML=area;
    document.getElementById("lblPerimeter").innerHTML=perimeter;
  
  }