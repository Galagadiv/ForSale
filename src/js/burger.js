(() => {
	const burgerBtn = document.getElementById("burger-btn");
	const burgerList = document.getElementById("burger-list");
	const hero = document.querySelector(".hero");
	const mobile = document.querySelector(".mobile");

	burgerBtn.addEventListener("click", () => {
		burgerList.classList.toggle("is-visible");

		if (burgerList.classList.contains("is-visible")) {
			hero.style.marginTop = "0";
		} else {
			hero.style.marginTop = `${mobile.offsetHeight}px`;
		}
	});
})();
