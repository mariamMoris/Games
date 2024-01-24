
 import {Games} from "./games.mjs"

 const games = new Games()




window.addEventListener("scroll",()=>{
    if (window.scrollY > 80) {
        document.querySelector(".nav").classList.add("top-0")
    } else {
        document.querySelector(".nav").classList.remove("top-0")
    }
    });
    
    


