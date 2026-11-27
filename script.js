/*------------アコーディオン------------*/

const accordions = document.querySelectorAll(".accordion-area .title");

accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        const isOpen = accordion.classList.contains("open");

        accordions.forEach(item => {
            item.classList.remove("open");
            item.closest("h3").nextElementSibling.classList.remove("open");
            item.setAttribute("aria-expanded", "false");
        });

        if (!isOpen) {
            accordion.classList.add("open");
            accordion.closest("h3").nextElementSibling.classList.add("open");
            accordion.setAttribute("aria-expanded", "true");
        }
    });
});

