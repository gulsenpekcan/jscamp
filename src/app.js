// 18.10.2021

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

// 23.10.2021

// js type safe değildir.
let sayi1 = 10;
sayi1 = "Engin Demiroğ"
let student = {id: 1, name: "Gulsen"}
// console.log(student)

/*
function save(ogrenci, puan = 10) {
    console.log(ogrenci.name + " : " + puan)
}

save(student, 100);
*/

function save(puan = 10, ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}

save(undefined, student);

let students = ["Engin Demiroğ", "Gülşen Pekcan", "Ecenur Bayrak", "Ethem Önal"]
//console.log(students)

let students2 = [students, {id: 2, name: "Gülşen"}, "Ankara", {city: "İstanbul"}]
//console.log(students2)

// rest
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts)
//showProducts(10, "Elma", "Armut", "Karpuz")

//Spread
let points = [1,2,3,4,50,4,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC", "D", ..."EFG", "H")

//Destructuring: Elimizdeki array'in değerlerini değişkenlere atama yöntemi
let populations = [10000, 20000, 30000, [40000, 10000]]
let [small, medium, high, [veryHigh, maximum]] = populations
console.log(small) 
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1], number) {
    console.log(small1)
}

someFunction(populations)

let category = {id: 1, name: "İçecek"}
console.log(category.id)
console.log(category["name"])

let {id, name} = category
console.log(id)
console.log(name)
