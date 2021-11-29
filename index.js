/* 
    Opdracht 1.
        Na een verandering van de input `string-a`: 
            - roep de function `showStringALength` aan.
*/ 

function setup(){
    document.getElementById("string-a-action").addEventListener("click", showStringALength);
    // Vervang dit met de code voor opdracht 1
    document.getElementById("string-b-action").addEventListener("click", showStringBChar);

    document.getElementById("string-c-action").addEventListener("click", showStringCPadded);

}

window.addEventListener('load', setup);

function showStringALength() {
    let aString = document.getElementById('string-a').value;
    let aLength = aString.length;
    document.getElementById('string-a-result').innerHTML = aLength;
}


/* 
    Opdracht 2.
        Sla de values op van de inputs `string-b` en `string-b-index` in variabelen.
        Bereken hiermee de juiste waarde van de variabele `stringBChar`:
            - de letter uit `string-b` op de index `string-b-index`
*/

function showStringBChar() {
    let bChar = null; 

    document.getElementById('string-b-result').innerHTML = bChar;
}


/* 
    Opdracht 3.
        Sla de values van de inputs `string-c`, `string-c-length` en `string-c-padString` 
        op in variabelen.
        
        Maak een nieuwe variabele met de waarde:
            - roep padEnd aan op de variabele voor `string-c` met de juiste argumenten.

        Toon deze variabele in het element `string-c-result`

        Zord dat de functie wordt aangeroepen bij een click op de button
*/

function showStringCPadded() {
    let cString = document.getElementById('string-c').value;
    let cPadLength = document.getElementById('string-c-padLength').value;
    let cPadString = document.getElementById('string-c-padString').value;
    
    let paddedString = cString.padEnd(cPadLength, cPadString); 

    document.getElementById('string-c-result').innerHTML = paddedString;
}