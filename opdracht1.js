/*
    [v] Koppel jouw javaScript bestand met de HTML pagina. Doe dit ook voor het CSS bestand.
    [v] Voel je vrij om voor iedere opdracht een nieuw .js bestand te maken indien jouw bestand anders te groot wordt.
        Houdt er wel rekening mee dat je ieder afzonderlijk .js bestand moet koppelen via een <script>-tag in de HTML.
    [v] Vergeet niet dat je bij iedere wijziging eerst moet opslaan en de browser moet refreshen. Nodemon is niet meer
        nodig omdat we JavaScript nu in de browser gaan gebruiken (waar het voor bedoeld is)
    [v] Schrijf voor alle onderstaande opdrachten eerst stap voor stap de psuedo-code uit.
*/

/*
Opdracht 1 - Array Methoden
    [v] Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
        1. sla op in nieuwe array
        2. maak map loop aan
        3. sla alle namen op
        4. print nieuwe array
    [v] Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn.
        Log de uitkomst in de console.
        1. sla op in nieuwe array
        2. maak map loop aan
        3. originalStock - sold is stock
        4. if stock === 0 {"uitverkocht"}
        5. print nieuwe array
    [v] Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken.
        Log de uitkomst in de console.
        1. sla op in nieuwe array
        2. maak filter loop aan
        3. if inventory.options.ambiLight === true return inventory.type + inventory.name
        4. print nieuwe array

    [v] Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
        1. maak sort methode
        2. sorteer op prijs
        3. print nieuwe array
*/
console.log("opdracht1");

//1a.
const namen = inventory.map((inventory) => {
    return inventory.type;
});
console.log("uit komst op 1a: " + namen);

//1b.
const uitverkocht = inventory.map((inventory) => {
    if ((inventory.originalStock - inventory.sold) === 0) {
        return inventory.type + inventory.name;

    }
});
console.log("uit komst op 1b: " + uitverkocht);

// 1c.
const ambiLight = inventory.map((inventory) => {

    if (inventory.options.ambiLight === true) {
        return inventory.type + inventory.name;
    }
});
console.log("uit komst op 1b: " + ambiLight);

//1d.
inventory.sort((a, b) => {
    return a.price - b.price;
});

console.log("uit komst op 1d: " + inventory.map((inventory) => {
    return inventory.price;
}));