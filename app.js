let nav = $("#nav");
// let navToggle = $("#navToggle")
$("#navToggle").on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");
})

let nav_2 = $("#nav_2");
// let navToggle_2 = $("#navToggle_2")

$("#navToggle_2").on("click", function (event) {
    event.preventDefault();

    nav_2.toggleClass("show");
})