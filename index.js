// Packages
const express = require("express");


// App
const PORT = process.env.PORT || 8080;
const app = express();

app.use("/unique-name", require("./routes/unique-name"))
app.use("/unique-room", require("./routes/unique-room"))

app.listen(PORT, () => {
	console.log(`Classy Games Express Api Of Bingo Game had Started On Port : ${PORT}`);
})
