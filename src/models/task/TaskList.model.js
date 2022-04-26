import TaskListSchema from "./TaskList.schema.js";
//now write the function to write the business logic
//new entry
export const insertTask = (obj) => {
  return TaskListSchema(obj).save();
};
//read all data
//delete data
