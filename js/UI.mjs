export class Ui{
    constructor(){

    }

     displayGames(data){
        let cols="";
        for (let i = 0 ; i<data.length ; i++){
            cols += `
            <div class="col-lg-3 col-md-4 col-sm-6 mt-5 ">
            <div class="card bg-transparent text-white h-100 " style="width: 100%" data-id=${data[i].id}>
            <img src="${data[i].thumbnail}" class="card-img-top " alt="...">
            <div class="card-body pb-3">
              <div class="d-flex justify-content-between ">
                <h6 class="small">${data[i].title} </h6>
                <span class="badge btn p-1 ">free</span>
              </div>
              <p class="card-text text-center opacity-50 py-2 small">${data[i].short_description.split(" ",8)}</p>
            </div> 
            <div class="card-footer d-flex justify-content-between ">
              <span class="small">${data[i].genre}</span>
              <span class="small">${data[i].platform}</span>
            </div>
            </div>
          </div>
            `
            
        }
        document.querySelector(".row").innerHTML = cols;
    }
    displayDetails(data){
           const cols = `
            <div class="col-md-4 ">
            <figure>
              <img src="${data.thumbnail}" alt="" class="w-100 ">
            </figure>
          </div>
          <div class="col-md-8 ">
            <h2 class="mb-4">Title: ${data.title}</h2>
            <p class="mb-4">Category: <span class="bg-primary text-black p-1 rounded-3"> ${data.genre}</span></p>
            <p class="mb-4">Platform: <span class="bg-primary text-black p-1 rounded-3"> ${data.platform}</span></p>
            <p class="mb-4">Status: <span class="bg-primary text-black p-1 rounded-3"> ${data.status}</span></p>
            <p>${data.description}</p>
            <a href="${data.game_url}" class="btn btn-outline-warning" target="_blank">Show Game</a>
            `
            document.getElementById("detailsBox").innerHTML = cols;
        }
    }


  