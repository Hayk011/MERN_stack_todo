import { Router, Request, Response } from "express";
const Todo = require("../modules/todo");
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const colection = await Todo.find({});
  return res.json(colection);
});
module.exports = router;
router.post("/", async (req: Request, res: Response) => {
  const colection = await Todo.findById(req.body._id);
  colection.condidate = !!req.body.condidate;
  await colection.save();
});
