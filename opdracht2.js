/*
Opdracht 2 - Elementen in de DOM plaatsen
Tip: wanneer we meerdere waardes uit een array willen terugbrengen tot één getal of één string, gebruik je hier gewoon
        een oude vertrouwde for-loop voor!

    [v] Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
        1. sla op in nieuwe array met sold key wordt
        2. maak map loop aan
        3. loop over de sold is stock en tel deze op in variabele
        5. print variabele
    [v] Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
        1. maak in html een id soldTVs
        2. gebruik in js de getElementById("soldTVs")
        3. verander de textcontent naar uitkomst van totaalVerkochteTVs
        4. verander de style color naar green
    [v] Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in
        de console.
        1. sla op in nieuwe array de in gekochte tv (originalStock)
        2. maak map loop aan
        3. loop over de originalStock en tel deze op in een variabele (totaalIngekochtTVs)
        5. print variabele totaalIngekochtTVs
    [v] Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
        1. maak in html een id
        2. gebruik in js de getElementById("IngekochtTVs")
        3. verander de textcontent naar uitkomst van totaalVerkochteTVs
        4. verander de style color naar blauw
    [v] Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
        1. maak functie om de sold en de totaalIngekochtTVs van elkaar af terekken noem dit nogTeVerkopen
        2. maak een html id
        3. verander de textcontent naar uitkomst van nogTeVerkopen
        4. verander de style color naar rood
*/
console.log("opdracht2");

//2a.
const verkochteTVs = inventory.map((inventory) => {
    return inventory.sold;
});

let totaalVerkochteTVs = 0;

for (let i = 0; i < verkochteTVs.length; i++) {
    totaalVerkochteTVs += verkochteTVs[i];
}

console.log("uit komst op 2a: " + totaalVerkochteTVs);

//2b.

const soldTVs = document.getElementById("SoldTVs");
soldTVs.textContent = totaalVerkochteTVs;
soldTVs.style.color = "green";

console.log("uit komst op 2b: uit komst is de groene 33 op de pagina");

//2c.
const ingekochtTVs = inventory.map((inventory) => {
    return inventory.originalStock;
});

let totaalIngekochtTVs = 0;

for (let i = 0; i < ingekochtTVs.length; i++) {
    totaalIngekochtTVs += ingekochtTVs[i];
}
;
console.log("uit komst op 2c: " + totaalIngekochtTVs);

//2d.
const ingekocht = document.getElementById("IngekochtTVs");
ingekocht.textContent = totaalIngekochtTVs;
ingekocht.style.color = "blue";

console.log("uit komst op 2d: uit komst is de blauwe 73 op de pagina");

//2e.
const stok = totaalIngekochtTVs - totaalVerkochteTVs;

const nogTeVerkopen = document.getElementById("NogTeVerkopen");
nogTeVerkopen.textContent = stok;
nogTeVerkopen.style.color = "red";

console.log("uit komst op 2e: uit komst is de rood 40 op de pagina");
