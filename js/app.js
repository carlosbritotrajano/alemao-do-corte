const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () =>
nav.classList.toggle("active"));

function whatsapp(){
    var numero = '+5511961805535';
    var url = "https://wa.me/" + numero + "?text="
    + "Olá, tudo bem? Gostaria de falar com um especialista.";

    window.open(url, '_blank').focus();
}