document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel__item");
    const button_html = Array.from(items, () =>{
        return `<span class="carousel__btn"></span>`;
    });

    console.log(button_html);

    carousel.insertAdjacentHTML("beforeend",`
    <div class="carousel__controls">${button_html.join("")}</div>`);
    const buttons = carousel.querySelectorAll(".carousel__btn");
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            items.forEach(item => {
                item.classList.remove("carousel__item--selected");
            });
            buttons.forEach(button => {
                button.classList.remove("carousel__btn--selected");
            });
            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__btn--selected");
        });
    });
});