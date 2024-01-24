import { Ui } from "./UI.mjs"
export class Games {
    constructor() {
        document.querySelectorAll(".nav-item a").forEach((link) => {
            link.addEventListener("click", () => {
                document.querySelector(".nav-item .active").classList.remove("active");
                link.classList.add("active")
                const category = link.getAttribute("data-target")
                this.getData(category)
            })
        })
        this.games = document.getElementById("games")
        this.details = document.getElementById("details")
        this.loading = document.querySelector(".loading")
        this.ui = new Ui()
        this.getData("MMORPG")
       
    }


    async getData(category) {
        this.loading.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd1d7823ca0msh6d9ee1f097f07a2p16a4abjsn23343d629f18',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        const response = await api.json();
        this.loading.classList.add("d-none")
        this.ui.displayGames(response)


        document.querySelectorAll(".card").forEach((item)=>{
            item.addEventListener("click",()=>{
                this.details.classList.remove("d-none")
                this.games.classList.add("d-none")
                this.getDetails(item.getAttribute("data-id"))

            });
            document.querySelector(".btn-close").addEventListener("click",()=>{
                this.details.classList.add("d-none")
                this.games.classList.remove("d-none")
            })
            
        })
    }
    async getDetails(id) {
        this.loading.classList.remove("d-none")

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'd1d7823ca0msh6d9ee1f097f07a2p16a4abjsn23343d629f18',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        const response = await api.json();
        console.log(response)
        this.loading.classList.add("d-none")

        this.ui.displayDetails(response)
    
    }
}







 
