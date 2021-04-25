import mongoose from "mongoose";


export interface StudentMongooseInterface extends mongoose.Document {
    name: string,
    email: string,
    password: string,
    salt: string,
    client_id: string,
    client_secret: string,
    school?: string,
    department?: string,
}

export interface StudentInterface {
    name: string,
    email: string,
    password: string,
    salt: string,
    client_id: string,
    client_secret: string,
    userId: string,
    school?: string,
    department?: string,
}

export interface UpdateStudentInterface {
    name?: string,
    email?: string,
    password?: string,
    school?: string,
    department?: string,
}