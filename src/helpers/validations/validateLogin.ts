import { Credential } from "../../models";
import { isValidPassword } from "./validPassword";

export const validateLogin = (credential:Credential) => {
    const {username, password} = credential;
    if(username.trim().length === 0)
        throw new Error(`Username not valid`);
    if(password.trim().length === 0)
        throw new Error(`Password not valid`);
    isValidPassword(credential.password)
}