// Завдання 1

const friends = ["Mango", "Poly", "Kiwi", "Pomelo"];

let stringFor = "";

for (let i = 0; i < friends.length; i += 1) {
    if (i !== friends.length - 1) {
        stringFor += friends[i] + ",";
    } else {
        stringFor += friends[i]
    }
}

console.log("stringFor:>>>", stringFor);

let stringJoin = "";

stringJoin = friends.join(",");

console.log("stringJoin:>>>", stringJoin);

// Завдання 2

const cards = ["Карточка-1", "Карточка-2", "Карточка-3", "Карточка-4", "Карточка-5"];

console.log("cards:>>>", cards);

const cardToRemove = "Карточка-3";

const cardToInsert = "Карточка-6";

cards.splice(cards.indexOf(cardToRemove), 1);

cards.push(cardToInsert);

console.log("modified cards:>>>", cards);