const dotenv = require("dotenv");
dotenv.config()
const app = require('./index.js');
const connectDb = require("./config/db.js")

const createServer = () => {
    const port = process.env.PORT || 4000
    connectDb();
    app.listen(port, () => {
        console.log(`server is running on http://localhost:${port}`)
    })
}

createServer();