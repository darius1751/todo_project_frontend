import {ajax, AjaxError} from 'rxjs/ajax';
import { ENDPOINT_FIND_ALL_STATES} from '../../constants/endpoints';
import { State } from '../../models';

export const httpFindAllStates = (setState:Function) => {
    ajax.getJSON<State[]>(`${ENDPOINT_FIND_ALL_STATES}`)
        .subscribe({
            next: (states) => {
                console.log({states});
                setState(states);
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