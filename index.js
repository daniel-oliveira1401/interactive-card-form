//handle card info submit
$(".form").on("submit", (e) => {
	e.preventDefault();

	showSuccessCard();
});

//handle input invalid styles
$(".form .form__input").on("invalid", (e) => {
	e.originalEvent.preventDefault();

	$($(e.target).parents(".form__input-group")[0]).addClass("invalid");
});

//remove invalid styles when user types in the input
$(".form .form__input").on("input", (e) => {
	$($(e.target).parents(".form__input-group")[0]).removeClass("invalid");
	let inputId = e.target.id;

	$(`#overlay__${inputId}`).text(e.target.value);
});

//initialize the card image with the input values when the page loads (for cached values that the browser might keep)
$(".form .form__input")
	.toArray()
	.forEach((input) => {
		let inputId = input.id;

		$(`#overlay__${inputId}`).text(input.value);
	});

//go back to the main screen
$(".success-card__continue").click(() => {
	showFormCard();
});

//set the mask for the card number input
$("#card-number-input").mask("0000 0000 0000 0000");

function showErrorMessages() {}

function showFormCard() {
	$(".success-card").fadeOut(250);
	setTimeout(() => {
		$(".form").fadeIn(250);
	}, 250);
}

function showSuccessCard() {
	$(".form").fadeOut(250);
	setTimeout(() => {
		$(".success-card").fadeIn();
	}, 250);
}

// showSuccessCard();
