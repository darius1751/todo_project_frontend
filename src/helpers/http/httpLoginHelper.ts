import {ajax, AjaxError} from 'rxjs/ajax';
import { ENDPOINT_LOGIN } from '../../constants/endpoints';
import { Credential } from "../../models";
import { httpFindPerson } from './httpFindPerson';


export const httpLoginHelper = async (credential:Credential, dispatch:any) => {
    ajax.post<{id:string}>(ENDPOINT_LOGIN,credential)
        .subscribe({
            next: (ajaxResponse) => {
                const {response} = ajaxResponse;
                const {id} = response;
                httpFindPerson(id, dispatch);
                
            },
        error:(error:AjaxError) => {
            const {message, response, status} = error;
            console.log({
                status,
                response,
                message
            });
        }
    });
    
}