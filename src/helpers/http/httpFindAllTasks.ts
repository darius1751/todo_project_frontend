import {ajax, AjaxError} from 'rxjs/ajax';
import { ENDPOINT_FIND_ALL_TASK_BY_PERSON} from '../../constants/endpoints';


export const httpFindAllTasks = (personId:string,setState:Function) => {
    ajax.getJSON<any>(`${ENDPOINT_FIND_ALL_TASK_BY_PERSON}${personId}`)
        .subscribe({
            next: (tasks) => {
                console.log({tasks});
                setState(tasks);
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