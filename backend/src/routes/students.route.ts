import express from "express";
import * as StudentsController from "../controllers/students.controller";

export const router = express.Router();
router.get("/", StudentsController.getStudents);
router.get("/:id", StudentsController.getStudent);
router.post("/", StudentsController.createStudent);
router.put("/:id", StudentsController.updateStudent);
router.delete("/:id", StudentsController.deleteStudent);