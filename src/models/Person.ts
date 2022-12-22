import { Credential } from './';

export interface Person{
    id?:string;
    credential?:Credential;
    name:string;
    email:string;
    phone?:string;
    createdAt?:string;    
    updatedAt?:string;    
}