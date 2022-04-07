/*
Opdracht 4 -Functies
Maak deze gehele opdracht eerst alsof je het voor één tv doet. We gaan één tv weergeven in het volgende format:

    [v] Opdracht 4a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één
        enkel tv-object (zoals inventory[0] of inventory[6]) verwacht en de naam op de volgende manier samenvoegt:
        [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV. Test of jouw
        functie ook werkt wanneer er een ander tv object wordt meegegeven.
        1. functie productString (IndexNum)
        2. maak een string en plak daar het inventory[indexNum]. merk, type en naam in

    [v] Opdracht 4b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als
        parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Test of jouw functie ook werkt
        wanneer er een andere tv-prijs wordt meegegeven.
        1. haal de prijs uit inventoty[].prijs
        2. wrap die in een funktie die een index nummer verwacht
        3. return de inventoty[indexNum].prijs in een string met euro teken en ,-

    [v] Opdracht 4c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv,
        in zowel inches als cm. Doe dit door een functie te schrijven die één screen-sizes array verwacht
        ( zoals inventory[0].availableSizes) en de groottes op de volgende manier samenvoegt: [schermgrootte]
        inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv
        maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft
        ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Test of jouw functie
        werkt in alle mogelijke gevallen.\
        1. haal de array met availableSizes uit inventoty[].availableSizes en sla die op in een array inches
        2. maak en array cm en reken de inches om naar cm en stop die er in
        3. maak een string met daar in schermgrootte in inches en de cm tussen () er achter

    [v] Opdracht 4d: Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
        Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.

    [v] Opdracht 4e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld. Dit wil je
        natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
        Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten.
        De overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten.
        Vergeet 'm niet aan te roepen!
*/
console.log("opdracht4");

//4a.
function productString(object, indexNum) {
    return object[indexNum].brand + " " + object[indexNum].type + " - " + object[indexNum].name
}

console.log("uit komst op 4a: " + productString(inventory, 1));

//4b.
function prijsFormat(object, indexNum) {
    return "€" + object[indexNum].price + ",-";
}

console.log("uit komst op 4b: " + prijsFormat(inventory, 0));

//4c.
function schermString(object, indexNum) {

    const inches = [...object[indexNum].availableSizes];
    const schermGroteString = [];

    for (let i = 0; i < inches.length; i++) {

        schermGroteString.push("inches " + inches[i] + " (" + inches[i] * 2.54 + " cm)");
        if ([i] < inches.length - 1) {
            schermGroteString.push("|");
        }

    }

    return schermGroteString.join().replaceAll(",", " ");
}

console.log("uit komst op 4c: " + schermString(inventory, 0));

//4d.
function productInfo(object, indexNum) {

    const metodes = [productString(object, indexNum), prijsFormat(object, indexNum), schermString(object, indexNum)];
    const tag = ["h3", "li", "li"];

    for (let i = 0; i < metodes.length; i++) {

        const productStringElement = document.createElement(tag[i]);
        const productStringInput = document.createTextNode(metodes[i]);
        productStringElement.appendChild(productStringInput);
        document.getElementById("TVInfo").appendChild(productStringElement);
    }

}

// productInfo(inventory,0);
console.log("uit komst op 4d: uit komst is TV info op pagina");

//4e.
function productInfoAll(object) {

    for (let i = 0; i < object.length; i++) {
        productInfo(object, [i]);
    }

}

// productInfoAll(inventory);
console.log("uit komst op 4e: uit komst is TV info op pagina");
