![poster](poster.png)

# DOM exercises

## Kom igång

Ladda ner sinus minishop. All din kod ska skrivas i _script.js_.
I denna övning kommer du få öva på:

-   Leta reda på saker i DOM och ändra innehåll
-   Lyssna efter events på olika element
-   Lägga till ny HTML med JS

## DOM Selecta!

![screen](screen.png)

**1.** Byt _namn_ på första hoodien från _Ash_ till _Potato_.

<details>
    <summary>Tips</summary>
    använd .innerText eller .textContent
</details>

**2.** Byt _namn_ på _Home_ till _Start_.

**3.** Byt _namn_ på _Contact_ till _Mail Us_.

**4.** Byt ut informationen om _Sinus Hoodie - Fire_.

**5.** Byt _bakgrundsfärg_ och _text_ på en knapp.

<details>
    <summary>Tips</summary>
    använd el.style.backgroundColor
</details>

**6.** Byt bakgrundsfärg på någon av produkterna.

**7.** Byt ut adressen på sidan.

**8.** Byt färg på samtliga `<p>`.

<details>
    <summary>Tips</summary>
    använd .querySelectorAll()
</details>

**9.** Ändra text på samtliga knappar till _add to cart_.

**10.** Lägg till classen _active_ på menyalternativet _home_.

<details>
    <summary>Tips</summary>
    använd el.classList.add()
</details>

**11.** Ta bort classen _logo_ på logotypen.

<details>
    <summary>Tips</summary>
    använd el.classList.remove()
</details>

## Add Content

**12.** Lägg till ett nytt menyalternativ.

**13.** Lägg till en ny produkt med följande info.

| el  | beskrivning                                                              |
| --- | ------------------------------------------------------------------------ |
| img | hoodie-forrest.png                                                       |
| h2  | Sinus Hoodie                                                             |
| h3  | Forrest                                                                  |
| p   | Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores. |

## Events

**14.** Lyssna efter ett klick på logotypen (`.logo`). När den registrerar ett klick skall du console.log:a "found you!";

**15.** Lyssna efter klick på samtliga produkter ( `<article>`). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".
