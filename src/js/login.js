const loginForm = document.querySelector(".form-login");

const handlerInit = () => {
	loginForm.addEventListener("submit", loginSubmit);
};

const loginSubmit = (e) => {
	e.preventDefault();
	const email = loginForm.email.value;
	const password = loginForm.password.value;
	console.log("email : ", email);
	console.log("password : ", password);
};

const init = () => {
	handlerInit();
};

init();
