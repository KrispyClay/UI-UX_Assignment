function searchCourse(){

let input=document.getElementById("searchInput").value.toLowerCase();

let table=document.getElementById("results");

let rows=table.getElementsByTagName("tr");

for(let i=0;i<rows.length;i++){

let rowText=rows[i].textContent.toLowerCase();

if(rowText.indexOf(input)>-1){

rows[i].style.display="";

}else{

rows[i].style.display="none";

}

}

}
