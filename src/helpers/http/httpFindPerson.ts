import {ajax, AjaxError} from 'rxjs/ajax';
import { ENDPOINT_FIND_ONE_PERSON_BY_CREDENTIAL_ID} from '../../constants/endpoints';
import { Person } from '../../models';
import { login } from '../../store/slices/personSlice';

export const httpFindPerson = (id:string,dispatch:any) => {
    ajax.post<Person>(`${ENDPOINT_FIND_ONE_PERSON_BY_CREDENTIAL_ID}${id}`)
        .subscribe({
            next: (ajaxResponse) => {
                const { response:person } = ajaxResponse;
                console.log({person});
                dispatch(login(person));
            },
        error:(error:AjaxError) => {
            const {message, response, status} = error;
            console.warn({
                status,
                response,
                message
            });
        }
    });
}