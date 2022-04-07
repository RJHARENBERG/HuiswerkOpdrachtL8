/*
Bonusopdracht
    [v] b1.Maak drie knoppen op de pagina:
    [v] Sorteer op prijs,
    [v] AmbiLight TV's en
    [v] Uitverkochte exemplaren.
    [v Gebruik de code die je in opdracht
    [v] 1b hebt gemaakt en schrijf dit om naar functies
    [v] 1c hebt gemaakt en schrijf dit om naar functies
    [v] 1d hebt gemaakt en schrijf dit om naar functies
    [v] zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden.
    [v] Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt.
    [v] Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!
    [v] b2.Zorg er nu voor, in plaats van dat de uitkomsten in de console worden gelogd, dat de uitkomsten worden meegegeven
        aan jouw generateTV-functie zodat de resultaten daadwerkelijk op de pagina weergegeven worden!
*/
console.log("bonus");

//bonus1.

console.log("uit komst op bonus1: ");

//bonus1b.
function productUitverkocht(object) {

    const uitverkocht = [];

    object.map((inventory) => {
        if ((inventory.originalStock - inventory.sold) === 0) {

            uitverkocht.push(inventory);
        }
    });
    console.log("productUitverkocht is geklikt " + uitverkocht.map((inventory) => inventory.name))
    return uitverkocht
}

//bonus1c.
function productAmbiLight(object) {

    const ambiLightObject = [];

    object.map((inventory) => {

        if (inventory.options.ambiLight === true) {

            ambiLightObject.push(inventory);

        }
    });
    console.log("ambiLight is geklikt " + ambiLightObject.map((inventory) => inventory.name));
    return ambiLightObject;
}

//bonus1c.
function productPrijsGesorteerd(object) {
    const prijsGesorteerd = [...object];

    prijsGesorteerd.sort((a, b) => a.price - b.price);

    console.log("prijsGesorteerdt is geklikt " + prijsGesorteerd.map((inventory) => inventory.price));
    return prijsGesorteerd;
}

//bonus2.

console.log("uit komst op bonus2: ");