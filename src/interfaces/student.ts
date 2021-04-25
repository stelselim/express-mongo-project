import mongoose from "mongoose";


export interface StudentMongooseInterface extends mongoose.Document {
    name: string,
    email: string,
    password: string,
    salt: string,
    school?: string,
    department?: string,
    accessToken?: string,
    refreshToken?: string,
}

export interface StudentInterface {
    name: string,
    email: string,
    password: string,
    salt: string,
    school?: string,
    department?: string,
    accessToken?: string,
    refreshToken?: string,
}

export interface UpdateStudentInterface {
    name?: string,
    email?: string,
    password?: string,
    school?: string,
    department?: string,
    accessToken?: string,
    refreshToken?: string,
}