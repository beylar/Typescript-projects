"use strict";
const reviewsList = [
    {
        id: 100,
        name: "Els",
        location: "London",
        comment: "Just crazy!"
    },
    {
        id: 101,
        name: "Louis",
        location: "Michigan"
    },
    {
        id: 102,
        name: "Luke",
        comment: "Yooo laa!"
    }
];
const elementLength = document.querySelector("#getreview");
function countReviews(num) {
    elementLength.innerHTML = num.toString();
}
countReviews(reviewsList.length);
