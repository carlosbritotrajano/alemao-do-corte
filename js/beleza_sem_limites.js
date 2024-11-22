document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Para melhorar desempenho
    }
});
}, {
threshold: 0.2 // Elemento precisa estar 20% visível
});

// Seleciona os elementos que precisam de animação
const elements = document.querySelectorAll('.p-pessoas h2, .p-pessoas p, .p-pessoas button, .pessoas img');
elements.forEach((el) => observer.observe(el));
});



