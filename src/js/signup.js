const signupForm = document.querySelector(".form-signup");

const handlerInit = () => {
	signupForm.addEventListener("submit", signupSubmit);
};

const signupSubmit = (e) => {
	e.preventDefault();
	const email = signupForm.email.value;
	const password = signupForm.password.value;
	fetch("http://127.0.0.1:3000/signup", {
		method: "post",
		body: {
			email,
			password,
		},
	});
};

const init = () => {
	handlerInit();
};

init();
