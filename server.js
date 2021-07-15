import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

var corsOptions = {
	origin: "http://127.0.0.1:5500",
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
	res.send("this is D; socket study server!");
});

app.post("/signup", (req, res) => {
	console.log(req);
	res.json({
		test: "hello",
		ok: true,
	});
});

app.listen(port, () => {
	console.log(`🙂 server is running at http://localhost:${port}`);
});
