import UserSchema from "./user.schema.js";
//now write the function to write the business logic
//new entry
export const insertUser = (obj) => {
  return UserSchema(obj).save();
};
//read all data
export const getAllUser = () => {
  return UserSchema.find();
};
//find single task
// export const getTask = (_id) => {
//   return UserSchema.findById(_id);
// };
// //update
// export const updateTask = ({ _id, hr }) => {
//   return UserSchema.findByIdAndUpdate(_id, { hr }, { new: true });
// };
//delete data
export const deleteUser = (_id) => {
  return UserSchema.findByIdAndDelete(_id);
};
