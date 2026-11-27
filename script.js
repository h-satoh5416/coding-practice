/*------------アコーディオン------------*/

const accordions = document.querySelectorAll(".accordion-area .title");

accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        const isOpen = accordion.classList.contains("open");

        accordions.forEach(item => {
            item.classList.remove("open");
            item.nextElementSibling.classList.remove("open");
        });

        if (!isOpen) {
            accordion.classList.add("open");
            accordion.nextElementSibling.classList.add("open");
        }
    });
});

