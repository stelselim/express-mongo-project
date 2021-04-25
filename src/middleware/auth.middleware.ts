import jwt from 'jsonwebtoken';
import { TOKEN_KEY } from '../config/key';
import Student from '../model/student';

export const authMiddleware = async (req: any, res: any, next: any) => {
    try {

        if (!req.headers.authorization) {
            res.status(401).send({ message: "Invalid Authentication Header" })
        }

        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, TOKEN_KEY);

        //@ts-ignore
        const client_id: string = decodedToken.client_id;
        //@ts-ignore
        const client_secret: string = decodedToken.client_secret;
        console.log(client_secret);
        console.log(client_id);


        const student = await Student.findOne({ client_id: client_id });


        if (student) {


            if (student.client_secret === client_secret) {

                next();
            } else {

                res.status(401).send({ message: "Invalid User" })
            }
        } else {
            res.status(401).send({ message: "Invalid User" })
        }

    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: "Invalid Request" })
    }
};