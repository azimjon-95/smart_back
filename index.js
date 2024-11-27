const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user")
const LoginRoute = require("./routes/loginroute")
require('dotenv/config');
const cors = require("cors");
const certificate = require('./routes/certificate');
const telegramRoute = require('./routes/telegramRoute');
const visitorsRoutes = require('./routes/visitorRoute')


const app = express();
app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);

async function serverFunc() {
    await mongoose.connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(res => console.log("muvaffiqiyatli"))
        .catch(error => console.log("serverda error"))
}
serverFunc()

app.get("/", (req, res) => {
    res.status(200).send("ishladi")
})

app.use('/user', userRoutes)
app.use('/auth', LoginRoute)
app.use("/certificate", certificate);
app.use("/telegram", telegramRoute);
app.use('/visitors', visitorsRoutes)

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`server ${port}da eshitilmoqda... `)
});