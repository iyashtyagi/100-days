const zod = require("zod");

const todoValidation = zod.object({
    title : zod.string().min(1).max(250),
    description : zod.string().min(1).max(2000)
});

const idValidation = zod.string();


module.exports = {
    todoValidation,idValidation
}