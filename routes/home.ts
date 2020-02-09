import { Router, Request, Response } from "express";
import todo, { IToDo} from "../modules/todo";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const colection = await todo.find({});
  return res.json(colection);
});
router.post("/", async (req: Request, res: Response) => {
  const colection: IToDo = await todo.findById(req.body._id);
  colection.condidate = !!req.body.condidate;
  await colection.save();
});
router.get("/:id", async (req, res) => {
  const toDo = await todo.findById(req.params.id);
  return res.json(toDo);
});
router.post("/:id", async (req, res) => {
  const todoItem: IToDo = await todo.findById(req.params.id);
  todoItem.title = req.body.value;
  await todoItem.save();
});

module.exports = router;
