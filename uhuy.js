document.addEventListener("DOMContentLoaded", () => {

    // Animasi sederhana saat section masuk viewport
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    cards.forEach((card) => {
        card.classList.add("hidden");
        observer.observe(card);
    });

});