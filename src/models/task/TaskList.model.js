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
//update
export const updateTask = ({ _id, hr }) => {
  return TaskListSchema.findByIdAndUpdate(_id, { hr }, { new: true });
};
//delete data
export const deleteTask = (_id) => {
  return TaskListSchema.findByIdAndDelete(_id);
};
