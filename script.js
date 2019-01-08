window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();
}

function showStart() {
    console.log("burgermenu");
    document.querySelector(".burgermenu").addEventListener("click", visMenu);

}

function visMenu() {
    console.log("menufremme");
    document.querySelector(".box").classList.toggle("hide");
    document.querySelector(".burgermenu").classList.toggle("change");
    document.querySelector(".burgermenu").addEventListener("click", showStart);
}
