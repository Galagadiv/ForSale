(() => {
	const burgerList = document.getElementById("burger-list");
	const hero = document.querySelector(".hero");

	// Функція, яка виконується при зміні ширини viewport
	const handleResize = () => {
		const viewportWidth = window.innerWidth;

		// Перевіряємо, чи ширина viewport >= 1440
		if (viewportWidth >= 1440) {
			// Якщо меню відкрите
			if (burgerList.classList.contains("is-visible")) {
				hero.style.marginTop = `-92px`; // Встановлюємо відступ для hero
				burgerList.classList.remove("is-visible"); // Закриваємо меню
			}
		} else {
			// Якщо ширина менша за 1440px, скидаємо marginTop у hero
			hero.style.marginTop = "";
		}
	};

	// Додаємо eventListener для події 'resize'
	window.addEventListener("resize", handleResize);

	// Викликаємо функцію одразу для початкового визначення ширини
	handleResize();
})();
