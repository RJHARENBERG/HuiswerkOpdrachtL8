/*
Opdracht 3 - Array methoden en functies
    [v] Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina
        weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er
        dubbele namen in zitten, is niet erg.
        1. maak in html een Ul (unorderdlist) met id "TvBrandList"
        2. sla een array op om de brands op te slaan
        3. maak een for loop met de lenkte van de array
        4. create element li
        5. voer de text content per index in
        6. append child
        7. get element by id en append child
    [v] Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om
        onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie
        -declaratie niet aan te roepen!
        1. wrap de coden in een functie merkenAanbod
        2. roep de functie aan met daar in de inventory array
*/

console.log("opdracht3");

//3a.

/*
const tvMerken = inventory.map((inventory)=> inventory.brand);

for (let i =0 ; i < tvMerken.length ; i++){

    const nieuwElement = document.createElement("li");
    let input = document.createTextNode(tvMerken[i]);
    nieuwElement.appendChild(input);

    document.getElementById("TvBrandList").appendChild(nieuwElement);
}
*/
console.log("uit komst op 3a: uit komst is de list met TV merken op de pagina");

//3b.

function merkenAanbod(inventory) {

    const tvMerken = inventory.map((inventory) => inventory.brand);

    for (let i = 0; i < tvMerken.length; i++) {

        const nieuwElement = document.createElement("li");
        let input = document.createTextNode(tvMerken[i]);
        nieuwElement.appendChild(input);

        document.getElementById("TvBrandList").appendChild(nieuwElement);
    }
}

merkenAanbod(inventory);
console.log("uit komst op 3b: uit komst is de list met TV merken op de pagina");