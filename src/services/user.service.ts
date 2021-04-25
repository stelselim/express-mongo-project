import Student from "../model/student"
import crypto from 'crypto';
import { StudentInterface, UpdateStudentInterface } from "../interfaces/student";
import { hashPassword } from "../utility/auth/hashPassword"

export const userCreateService = async (name: string, school: string, email: string, password: string, department: string,) => {


    const salt = crypto.randomBytes(16).toString("hex");
    let passwordHashed = hashPassword(password, salt);

    let studentToSave = new Student({
        name: name,
        school: school,
        email: email,
        password: passwordHashed,
        department: department,
        salt: salt,
    })

    await studentToSave.save();
    return "User saved: email, " + email;
}


export const userDeleteService = async (email: string) => {

    await Student.deleteOne({ email: email });
    return "User deleted: email, " + email;
}


export const userUpdateService = async (email: string, updatedStudent: UpdateStudentInterface) => {

    let student = await Student.findOne({ email: email });

    if (!student) {
        return "No user: email, " + email;
    }

    const studentObject = student?.toObject()

    student.email = updatedStudent.email ?? studentObject?.email;
    student.name = updatedStudent.name ?? studentObject?.name;
    student.school = updatedStudent.school ?? studentObject?.school;
    student.department = updatedStudent.department ?? studentObject?.department;
    student.password = updatedStudent.password ?? studentObject?.password;
    student.refreshToken = updatedStudent.refreshToken ?? studentObject?.refreshToken;
    student.accessToken = updatedStudent.accessToken ?? studentObject?.accessToken;

    await student.save()

    return "Updated user: email, " + email;

}



export const userGetService = async (email: string) => {


    let student = await Student.findOne({ email: email });

    let studentObject = student?.toObject()
    console.log(studentObject?.email);

    return {
        email: studentObject?.email,
        name: studentObject?.name,
        department: studentObject?.department,
        school: studentObject?.school,
    };
}

