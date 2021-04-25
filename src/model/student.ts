import mongoose from 'mongoose';
import { StudentMongooseInterface } from '../interfaces/student';


const studentScheme = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    school: { type: String },
    password: { type: String, required: true },
    salt: { type: String, required: true, },
    department: { type: String },
    accessToken: { type: String },
    refreshToken: { type: String }
});

const Student = mongoose.model<StudentMongooseInterface>("Students", studentScheme);
export default Student;
