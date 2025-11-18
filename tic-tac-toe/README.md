# Tic Tac Toe

## Introduktion

Detta är en övning där ni i flera delmoment (funktion för funktion) kommer att kunna bygga ett fungerande Tic-Tac-Toe (tre-i-rad).

I denna övning kommer ni att använda er av grundläggande kodning, arrayer, objekt, DOM-inläsning, DOM-modifikation, händelsehantering, validering, felhantering med mera.

## Instruktioner

### Programmet

Programmet består av två stycken filer, `index.html` och `script.js`.

Det är MYCKET VIKTIGT att ni inte ändrar på någonting mellan alls i `index.html`, all er kod skall skrivas i `script.js`.

Själva programmet i script.js innehåller ett globalt objekt. Detta objekt heter oGameData, och innehåller allt från båda spelarnas symboler, namn, färgval osv, till själva spelplanen. Tack vare att allt detta är globalt så kommer ni att kunna komma åt denna data från alla era funktioner senare under utvecklingens gång. (För att komma åt spelplanen anropar ni tex oGameData.gameField, currentPlayer blir oGameData.currentPlayer osv.).

### Steg 1

Här kommer ni att få bygga spelet såpass långt så att det faktiskt kommer gå att spela. Vi kommer att att använda oss av bootstrap klassen "d-none" för att bestämma vilka element i DOM:en som skall synas och vice versa. Därutöver kommer vi att läsa in objekt från DOM:en, placera händelselyssnare, skicka variabler, ta emot parametrar, skriva ut saker på skärmen med mera.

#### 1. prepGame()

Här skall ni lägga till klassen "d-none" på elementet i DOM-en med id:t "gameArea", samt lägga en lyssnare på "Starta spelet!"-knappen som lyssnar efter ett klick. När den klickas skall ni anropa funktionen "initiateGame()".

#### 2. initiateGame()

Lägg till kod för följande:

-   Göm formuläret genom att lägga till klassen "d-none".
-   Visa spelplanen genom att ta bort klassen "d-none" på elementet med id:t "gameArea".
-   Ta bort textInnehållet i elementet med id:t "errorMsg".
-   Spara information om båda spelarna i objektet "oGameData" (dvs. användarnamn och färgval för respektive spelare).
-   Töm spelplanen genom att läsa in alla td-element, loopa igenom dem, och ändra dess text till en tom sträng (inga mellanslag). Sätt dessutom alla td-elements bakgrundsfärg till "#ffffff".
-   Deklarera de lokala variablerna "playerChar" och "playerName".
-   Bestäm vilken spelare som skall börja genom att slumpa fram ett tal mellan 0 och 1.
-   Om talet är mindre än 0.5 så tilldelar ni:
    -   playeChar = oGameData.playerOne;
    -   playerName = oGameData.nickNamePlayerOne;
    -   oGameData.currentPlayer = oGameData.playerOne;
-   Om talet är större än, eller lika med, 0.5 gör ni samma sak som ovan, fast med spelare 2.
-   Ändra texten i h1-elementet som ligger i div-elementet med klassen "jumbotron" till "Aktuell spelare är XXX", där ni ersätter XXX med namnet på den aktuella spelaren.
-   Lägg till en klicklyssnare på tabellen som innehåller spelplanen. Vid klick skall funktionen "executeMove()" anropas.

#### 3. executeMove(event)

-   OM klickhändelsen INTE skett på en tabellcell (td) skall ni inte göra någonting. Annars forstätt följa kokboken.
    <details>
      <summary>Tips!</summary>
      event.target.tagName ger er namnet på elementet som klickades.
    </details>
-   Kontrollera att den klickade cellen är ledig. Om den är ledig, gör följande (annars gör ni inget):
    -   Hämta ut attributet "data-id" (event.target.dataset.id) från den klickade cellen, och använd detta för att sätta "oGameData.gameField" på den hämtade positionen till nuvarande spelare "oGameData.currentPlayer" (som kommer vara "X", eller "O").
    -   Kontrollera vem som är den nuvarande spelaren, och sätt
    -   Kontrollera vem som är nuvarande spelare, och utifrån det sätt bakgrundsfärgen på den klickade tabellcellen till aktuell spelares färg. Sätt även cellens textinnehåll till spelarens symbol ("X" eller "O")
    -   Ändra därefter oGameData.currentPlayer till den andra spelaren, och uppdatera texten i jumbotronen till den nya spelarens namn
-   Anropa er rättningsfunktion för att kontrollera om spelet är slut (den kommer returnera antingen 1, 2, 3 för slut, eller 0 om spelet inte är slut). Om spelet är slut gör följande (annars gör ni inget):
    -   Anropa gameOver och skicka med resultatet (1, 2 eller 3).

#### 4. gameOver(result)

Denna funktion tar emot resultatet för spelet (1 om spelare 1 vunnit, 2 och spelare 2 vunnit, eller 3 om spelet slutat oavgjort)

-   Ta bort klicklyssnaren på tabellen
    <details>
      <summary>Tips!</summary>
      Googla metoden removeEventListener()!
    </details>
-   Ta bort klassen "d-none" på formuläret
-   Lägg till klassen "d-none" på spelplanen
-   Kontrollera vilken spelare som vunnit
-   Skriv ut ett vinnarmeddelande i jumbotronen, följa av "Spela igen?".
-   Anropa funktionen "initGlobalObject()" som nollställer vårt globala objekt till ursprungsinställningarna.

### Steg 2

Här höjer vi svårighetsnivån något genom att inte ange några detaljerade steg-för-steginstruktioner.
Kortfattat så skall ni i "prepGame()" anropa funktionen "validateForm()" istället för "initiateGame()". Först efter att "validateForm()" returnerat true anropar ni "initiateGame()".

#### validateForm()

Krav för att få spela:

-   Användarnamnet måste vara mellan 3 och 10 tecken långt.
-   Den valda färgen får inte vara svart eller vit.
-   Lägg gärna till egna saker att kolla efter också.
