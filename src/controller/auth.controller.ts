import express from "express";
import crypto from "crypto";
import Student from "../model/student";
import { createAuthorizationCode } from "../utility/auth/createToken";
import { validatePassword } from "../utility/auth/validatePassword";

export const router = express.Router();


router.post("/login", async (req, res) => {
    try {
        let email = req.body.email
        let passwordPlainText = req.body.password;
        const student = await Student.findOne({ email: email });

        if (student) {

            if (passwordPlainText && email) {

                let check = validatePassword(passwordPlainText, student.salt, student.password);

                // Create A new Client Secret, In every Login
                // Create Authorization Code
                // Send Authorization Code
                if (check) {

                    const client_secret = crypto.randomBytes(16).toString("hex");
                    student.client_secret = client_secret
                    await student.save();

                    const authorization_code = createAuthorizationCode(student.client_id, student.client_secret);


                    res.send(
                        {
                            message: "LOGGED IN",
                            client_id: student.client_id,
                            type: "Bearer",
                            authorization_code: authorization_code,
                            expired_in: "30 days"
                        })

                }
                // Wrong Password
                else {
                    res.send({ message: "WRONG PASSWORD" })

                }
            } else {
                res.send({ message: "WRONG PASSWORD" })
            }


        } else {
            res.send({ message: "USER NOT FOUND" })
        }

    } catch (error) {

    }
})


router.get("/getRefreshToken", async (req, res) => {
    try {

    } catch (error) {

    }
})

router.get("/getAccessToken", () => {
    try {

    } catch (error) {

    }
})

router.get("/forgotPassword", () => {
    try {

    } catch (error) {

    }
})