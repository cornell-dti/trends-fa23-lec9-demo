import express, { Router } from "express";

import {
  getTasks,
  addTask,
  deleteTask,
  updateChecked,
} from "./tasks.controller";
import { Task } from "../../common/types";

const taskRouter: Router = express.Router();

taskRouter.post("/getUserTasks", async (req, res) => {
  try {
    const email: string = req.body.email;
    let tasks = await getTasks(email);

    res.status(200).send({
      message: `SUCCESS retrieved ${tasks} from the tasks collection in Firestore`,
      data: tasks,
    });
  } catch (err) {
    res.status(500).json({
      error: `ERROR: an error occurred: ${err}`,
    });
  }
});

taskRouter.post("/addTask", async (req, res) => {
  try {
    const { text, checked, owner } = req.body;
    const task: Task = { text, checked, owner };
    await addTask(task);

    res.status(200).send({
      message: `SUCCESS added ${task} to the tasks collection in Firestore`
    });
  } catch (err) {
    res.status(500).json({
      error: `ERROR: an error occurred: ${err}`,
    });
  }
});

taskRouter.delete("/:taskId", async (req, res) => {
  try {
    const taskId = req.params.taskId;
    await deleteTask(taskId);

    res.status(200).send({
      message: `SUCCESS deleted task with id: ${taskId} from the tasks collection in Firestore`,
    });
  } catch (err) {
    res.status(500).json({
      error: `ERROR: an error occurred: ${err}`,
    });
  }
});

taskRouter.put("/:taskId", async (req, res) => {
  try {
    const { checked } = req.body;
    const taskId = req.params.taskId;

    await updateChecked(taskId, checked);

    res.status(200).send({
      message: `SUCCESS updated task with id: ${taskId} from the tasks collection in Firestore`,
    });
  } catch (err) {
    res.status(500).json({
      error: `ERROR: an error occurred: ${err}`,
    });
  }
});

export { taskRouter };
