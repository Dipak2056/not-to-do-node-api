import TaskListSchema from "./TaskList.schema.js";
//now write the function to write the business logic
//new entry
export const insertTask = (obj) => {
  return TaskListSchema(obj).save();
};
//read all data
export const getAllTask = () => {
  return TaskListSchema.find();
};
//find single task
export const getTask = (_id) => {
  return TaskListSchema.findById(_id);
};
//delete data
