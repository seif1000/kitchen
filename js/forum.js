document.addEventListener("DOMContentLoaded",come)
let box = document.querySelector('.enter');
function come(){
   box.classList.add("come");
   
}



document.getElementById("forum").addEventListener('submit',saveComment);
function saveComment(e){
    let userName = document.getElementById("name").value;
    let comment = document.getElementById("coment").value;

    let post ={
        name :userName,
        comentaire:comment
    }

    if(localStorage.getItem("posts") === null){
       let posts =[];
       posts.push(post);
       localStorage.setItem("posts" ,JSON.stringify(posts));
    }else{
        let posts = JSON.parse(localStorage.getItem("posts"));
        posts.push(post);
        localStorage.setItem("posts" ,JSON.stringify(posts));
    }

 
    fetchPost();
    e.preventDefault();
}



 function fetchPost() {
     let posts = JSON.parse(localStorage.getItem("posts"));
     document.querySelector(".post").innerHTML = "";
     for(post in posts ){ 
         document.querySelector(".post").innerHTML +=`
               
                
                <div class="user">user name :${posts[post].name}</div>
                <div class="user">comment :${posts[post].comentaire}</div>
                
               
         `
         
       
    }
 }