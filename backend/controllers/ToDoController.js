const ToDoModel = require("../models/TodoModel");

module.exports.getToDos = async (req, res) => {
    const { email } = req.body;
    const toDos = await ToDoModel.find({ email });
    res.send(toDos);
};

module.exports.saveToDos = (req, res) => {
    const { email, toDo } = req.body;
    ToDoModel.create({ toDo, email })
        .then((data) => {
            console.log("Saved Succesfully");
            res.status(201).send(data);
        })
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Something went wrong" });
        });
};

module.exports.updateTodos = (req, res) => {
    const { id } = req.params
    const { toDo } = req.body
    ToDoModel.findByIdAndUpdate(id, { toDo }).then(() => {
        res.send("Updated Successfully")
    })
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Something went wrong" });
        });
}

module.exports.deleteToDos = (req, res) => {
    const { id } = req.params;
    ToDoModel.findByIdAndDelete(id)
        .then(() => {
            console.log("Deleted Succesfully");
            res.send("Deleted Succesfully")
        })
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Something went wrong" });
        });
};
