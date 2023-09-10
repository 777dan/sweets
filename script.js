"use strict"
let count = +prompt("How many sweets would you like?");
const halfCount = count / 2;
let question;
while (count > 0) {
    question = confirm("More sweet?");
    if (question) {
        count--;
        if (count >= halfCount) {
            alert("There are still a lot of sweets");
            continue;
        }
        if (count < halfCount && count > 3) {
            alert("Not enough sweets");
            continue;

        }
        if (count <= 3) {
            alert("The sweets are running out!");
            continue;
        }
    } else {
        alert("Okay");
        break;
    }
}
if (question) {
    alert("Sweets are out! Time to buy another box...");
}