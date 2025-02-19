const { Router } = require("express")
const { getToDos, saveToDos, deleteToDos, updateTodos } = require("../controllers/ToDoController")
const router = Router()

router.post("/get", getToDos)
router.post("/save", saveToDos)
router.delete("/delete/:id", deleteToDos)
router.put("/update", updateTodos)


module.exports = router