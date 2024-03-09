const mongoose = require("mongoose");
const {config} = require("dotenv");
config();

(async function dbConnection(){
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("DB connected successfuly");
    }
    catch{
        console.log("Something bad with DB auth");
    }
})()

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todo = mongoose.model("todos",todoSchema);

module.exports = {
    todo
}