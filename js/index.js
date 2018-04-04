let search =document.querySelector('.fa-search');
let gone = document.querySelector("#click");
gone.addEventListener('click',hiddAll);
search.addEventListener('click' ,showSearchBar);
function showSearchBar(){
    var searchBar = document.getElementById('search-bar');
    
    searchBar.style.display = 'block';
   
   
}
function hiddAll(){
    var searchBar = document.getElementById('search-bar');
    
    searchBar.style.display = 'none';
   
   
   
    
    
}

let y = document.getElementById("slid-nav");
let z  =document.querySelector('#up');
y.addEventListener("click",down);
z.addEventListener("click",up);
function down(){
  
    
    let x= document.querySelector(".window");
    x.style.height= "100%";
    x.style.bottom = "0";
   
}
function up(){
    let x= document.querySelector(".window");
    x.style.height= "0";
    x.style.bottom = "100%";  
    
}

