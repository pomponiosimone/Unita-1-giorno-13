const CreateTable = (function () {
for (let i=0; i<=76; i++)
{ const Cella = document.createElement("div")
        Cella.classList.add("cella")
        const NumeroCella = document.createElement("h3")
        NumeroCella.innerText = i
        Cella.appendChild(NumeroCella)
        const tabellone = document.getElementById("tabellone")
        tabellone.appendChild(Cella)
 
    }})

    CreateTable()
const form = document.querySelector("form")
        form.addEventListener("submit",function(event) {
            event.preventDefault()                              
            const paragrafo = document.createElement("p")
                paragrafo.classList.add("risultato")
               form.appendChild(paragrafo)
               const numeroCasuale = generaNumeroCasuale(1,76);
            paragrafo.innerText= numeroCasuale

             const numeriCelle = document.querySelectorAll(".cella h3");
    numeriCelle.forEach( function (cella) {
        if (cella.innerText === numeroCasuale.toString()) {
            cella.classList.add("opacita");
        }
    });
           
            form.appendChild(paragrafo)
        
        })

    function generaNumeroCasuale(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
       
    }