document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".layout");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    section.classList.add("show");
                }
            });
        },
        { threshold: 0.1 } // Ajusta a visibilidade necessária para ativar
    );

    observer.observe(section);
});