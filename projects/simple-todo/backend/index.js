const express = require("express");
const {todoValidation, idValidation} = require("./validator");
const {todo} = require("./db");
const cors = require("cors");

const port = 3000;
const app = express();
app.use(express.json());
app.use(cors())

let totalRequest = 1;

/**
 * @param {import('express').Request} req - The request object.
 * @param {import('express').Response} res - The response object.
 * @param {import('express').NextFunction} next - The callback function to invoke the next middleware.
 */
async function logger(req,res,next){
    console.log(`request number : ${totalRequest++}` + req.url+" " + req.ip);
    next();
}

app.use(logger);

app.get("/todos",async (req,res)=>{

    const todos = await todo.find({});
    res.json({todos});
    
});

app.get("/todos/:id",async (req,res)=>{
    const id = req.params.id;
    const isValid =idValidation.safeParse(id);
    if(!isValid.success){
        return res.status(411).json({msg:"Wrong input"});
    }
    const todos = await todo.findById({_id : id});

    res.json({todos})
});

app.post("/todo",async (req,res)=>{
    const {title, description} = req.body;
    const isValid = todoValidation.safeParse({title, description})
    if(!isValid.success){
        return res.status(411).json({msg:"Wrong input"});
    }

    const newTodo = await todo.create({
        title: title,
        description : description,
        completed : false
    });

    console.log(newTodo);

    res.json({
        msg : "ok"
    });
    
}); 

app.put("/completed",async (req,res)=>{
    const {id} = req.body;
    const isValid =idValidation.safeParse(id);
    if(!isValid.success){
        return res.status(411).json({msg:"Wrong input"});
    }

    await todo.findByIdAndUpdate({_id : id},{completed :true});

    res.json({
        msg : "done"
    })

})

app.listen(port, () => {
    console.log(`Server started: ${port}`);
})