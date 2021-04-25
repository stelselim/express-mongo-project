import jwt from 'jsonwebtoken';
import { TOKEN_KEY } from '../../config/key';
const refreshTokenKey = "";


export const createAuthorizationCode = (client_id: string, client_secret: string) => {
    const token = jwt.sign(
        { client_id: client_id, client_secret: client_secret, },
        TOKEN_KEY,
        { expiresIn: '30 days' });
    return token;

}