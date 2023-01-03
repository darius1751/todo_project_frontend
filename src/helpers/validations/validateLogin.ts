import { Credential } from "../../models";

export const validateLogin = (credential:Credential) => {
    const {username, password} = credential;
    if(username.trim().length === 0 || password.trim().length === 0)
        throw new Error(`Credential no valid`);
}