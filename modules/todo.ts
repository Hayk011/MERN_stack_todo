import { Schema, model, Document } from "mongoose";
export interface IToDo extends  Document , IToDoVo {
_id: any;
}
interface IToDoVo {
  _id?: any;
  title?: string;
  condidate?: boolean;
}
const schema: Schema = new Schema({
  title: {
    type: String,
    required: true
  },
  condidate: {
    type: Boolean,
    default: false
  }
});
export default model("todo", schema);
