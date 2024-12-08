var splide = new Splide(".splide", {
	type: "slide",
	drag: "free",
	snap: true,
	perPage: 3,
	focus: "center",
	pagination: false,
	arrows: false,
});

// Монтуємо слайдер
splide.mount();

// Функція для перевірки ширини екрану та управління слайдером
function handleResize() {
	if (window.innerWidth <= 1440) {
		splide.destroy(); // Повністю вимикаємо слайдер для екранів <= 1440px
	} else {
		if (!splide.Components) {
			splide.mount(); // Повторно монтуємо слайдер для більших екранів
		}
	}
}

// Викликаємо функцію при зміні розміру вікна
window.addEventListener("resize", handleResize);

// Викликаємо функцію для початкового налаштування
handleResize();
