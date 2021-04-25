import crypto from 'crypto'
import { hashPassword } from './hashPassword'

// Method to check the entered password is correct or not
export const validatePassword = (passwordPlainText: string, salt: string, passwordHashed: string) => {

    const hashToCheck = hashPassword(passwordPlainText, salt);
    return hashToCheck === passwordHashed;
}