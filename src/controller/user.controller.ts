import express from "express";
import { UpdateStudentInterface } from "../interfaces/student";
export const router = express.Router();
import { userCreateService, userDeleteService, userGetService, userUpdateService } from '../services/user.service'

router.get("/:email", async (req, res) => {
    try {
        const value = await userGetService(req.params.email)
        res.send({ message: value })
    } catch (error) {
        console.log(error)
        res.send({ message: error.message })
    }

})


router.post("/create", async (req, res) => {
    try {
        const value = await userCreateService(
            req.body.name, req.body.school, req.body.email, req.body.password, req.body.department,
        );
        res.send({ message: value });

    } catch (error) {
        console.log(error)
        res.send({ message: error.message })
    }

})

router.post("/delete", async (req, res) => {
    try {

        const value = await userDeleteService(req.body.email);
        res.send({ message: value });
    } catch (error) {
        console.log(error);
        res.send({ message: error.message })
    }
})


router.post("/update", async (req, res) => {
    try {
        const updateStudent: UpdateStudentInterface = {
            school: req.body.school,
            department: req.body.department,
            name: req.body.name,
            email: req.body.email,
        }

        const value = await userUpdateService(req.body.currentEmail, updateStudent);
        res.send({ message: value })
    } catch (error) {
        console.log(error)
        res.send({ message: error.message })
    }
})