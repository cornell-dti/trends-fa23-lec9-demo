import { db } from "../firebase";
import { Task, TaskWithId } from "../../common/types";
import { taskRouter } from "./tasks.routes";

const taskCollectionRef = db.collection("tasks");

export const getTasks = async (email: string) => {
  const snapshot = await taskCollectionRef.where("owner", "==", email).get();
  let tasks: TaskWithId[] = [];
  snapshot.forEach((doc) => {
    const task = { id: doc.id, ...(doc.data() as Task) };
    tasks.push(task);
  });
  return tasks;
};

export const addTask = async (task: Task) => {
  const newDoc = taskCollectionRef.doc();
  return await newDoc.set(task);
};

export const deleteTask = async (taskId: string) => {
  return await taskCollectionRef.doc(taskId).delete();
};

export const updateChecked = async (taskId: string, checked: boolean) => {
  return await taskCollectionRef.doc(taskId).update({ checked });
}
