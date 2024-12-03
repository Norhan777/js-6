(async function getApi(){
    var item = await fetch ('https://jsonplaceholder.typicode.com/photos');
    var result = await item.json();
    var text ="";
    for(var i=0; i<result.length; i++){
        var cartona= `<div class="col-md-4 text-center mb-4 ">
              <img src="${ result[i].url}"class="img-fluid">
              <h2>${result[i].id}</h2>
              <h5>${ result[i].title}</h5>
              </div>
             `;
             text=text+cartona;
    }
    
    document.querySelector('.test').innerHTML = text;


})();