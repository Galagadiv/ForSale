(() => {
	const burgerBtn = document.getElementById("burger-btn");
	const burgerList = document.getElementById("burger-list");

	burgerBtn.addEventListener("click", () => {
		// Додаємо або забираємо клас для анімації
		burgerList.classList.toggle("is-visible");
	});
})();
