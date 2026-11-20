/*------------アコーディオン------------*/

const accordions = document.querySelectorAll(".title");

accordions.forEach(accordion => {
    accordion.addEventListener("click", () => {
        const isOpen = accordion.classList.contains("open");

        accordions.forEach(item => {
            item.classList.remove("open");
            const box = item.nextElementSibling;
            box.classList.remove("open");

            if (!isOpen) {
                accordion.classList.add("open");
                const box = accordion.nextElementSibling;
                box.classList.add("open");
            };
        });
    });
});

