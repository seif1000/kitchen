

function recipts(){
    var xhr  = new XMLHttpRequest();
    xhr.open("GET","../menu.json",true);
    xhr.onload= function(){
        
        if(this.status == 200){
          var dish = JSON.parse(this.responseText);
          var output = '';

          
          for(i in dish){
            output +=
            `
            <div class = "dish">
              <div class = "photo">
                <img src="${dish[i].image}">
              </div>
              <div class = "text">
                <h1></h1>
                <h1>${dish[i].reciptName}</h1>
                <h1>component</h1>
                <p>${dish[i].component}</p>
                <h1>how to do</h1>
                <p>${dish[i].how}</p>
              </div>
              
            </div>
            `
           

            
         
        }
        document.querySelector('.section-1').innerHTML = output;
      
    }
  }
    xhr.send();
}