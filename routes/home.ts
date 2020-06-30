import { Router, Request, Response } from "express";
import todo, { IToDo } from "../modules/todo";
import Joi from "joi";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const colection = await todo.find({});
  return res.json(colection);
});
router.put("/", async (req: Request, res: Response) => {
  const colection: IToDo = await todo.findById(req.body._id);
  colection.condidate = !!req.body.condidate;
  await colection.save();
});
router.post("/", async (req: Request, res: Response) => {
  const schema = Joi.object().keys({
    title: Joi.string()
      .min(2)
      .max(30)
      .required(),
    condidate: Joi.boolean()
  });
  Joi.validate(
    req.body,
    schema,
    async (err: Joi.ValidationError, result: any) => {
      if (err) {
        return res.status(400).json({
          message: "somthing is wrong"
        });
      }
      const colection: IToDo = await todo.create(req.body);
      return colection;
    }
  );
});
router.get("/:id", async (req: Request, res: Response) => {
  const toDo = await todo.findById(req.params.id);
  res.json(toDo).end();
});
router.post("/:id", async (req: Request, res: Response) => {
  try {
    const todoItem: IToDo = await todo.findById(req.params.id);
    todoItem.title = req.body.value;
    await todoItem.save();
    res.end();
  } catch (e) {
    console.log(e.message);
  }

});

module.exports = router;
