let splide; // Змінна для збереження екземпляра слайдера

// Функція для створення нового екземпляра Splide
function createSlider() {
	splide = new Splide(".splide", {
		type: "slide",
		drag: "free",
		snap: true,
		perPage: 3,
		focus: "center",
		pagination: false,
		arrows: false,
	});
	splide.mount();
}

// Об'єднана функція для керування слайдером і відступом hero
function handleResize() {
	const burgerList = document.getElementById("burger-list");
	const hero = document.querySelector(".hero");
	const viewportWidth = window.innerWidth;

	// Логіка для управління слайдером
	if (viewportWidth < 1440) {
		if (splide) {
			splide.destroy(); // Знищуємо слайдер для екранів <= 1440px
			splide = null; // Очищаємо змінну
		}
	} else {
		if (!splide) {
			createSlider(); // Створюємо новий слайдер для більших екранів
		}
	}

	// Логіка для управління відступом hero і станом меню
	if (viewportWidth >= 1440) {
		if (burgerList && burgerList.classList.contains("is-visible")) {
			hero.style.marginTop = `-92px`; // Встановлюємо відступ для hero
			burgerList.classList.remove("is-visible"); // Закриваємо меню
		}
	} else {
		if (hero) hero.style.marginTop = ""; // Скидаємо відступ для менших екранів
	}
}

// Ініціалізація слайдера та перевірка стану при завантаженні сторінки
if (window.innerWidth >= 1440) {
	createSlider();
}
handleResize(); // Початкова перевірка стану

// Викликаємо об’єднану функцію при зміні розміру вікна
window.addEventListener("resize", handleResize);
