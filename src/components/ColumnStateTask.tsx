import {  Task } from "../models";
import { Tasks } from "./Tasks";

type PropsColumnStateTask = {
    name:string;
    tasks:Task[]
}
export const ColumnStateTask = ({name, tasks}:PropsColumnStateTask) => {
    return (
    <section className="column-state-task">
        <h4 className="state-name">{name}</h4>
        <Tasks tasks={tasks}/>
    </section>)
}