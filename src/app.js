console.log("Merhaba Kodlama io :)")

// Günümüzde bunları artık kullanmıyoruz. Onun yerine let kullanıyoruz.
/*
var dolarDun = 9.20
var dolarBugun = 9.30
*/

// JS type safe değildir.
let dolarDun = 9.20
let dolarBugun = 9.30

{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2

console.log(euroDun)

// array: "" ya da ''  olur.
//camelCase
//PascalCase
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"]
let konutKredileri2 = [12, "Emlak Konut Kredisi", ["a", "b", "c"]]

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")

console.log(konutKredileri)
