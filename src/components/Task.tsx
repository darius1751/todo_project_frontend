import { Task as TaskModel } from "../models";
import { OptionsTask } from "./OptionsTask";
import { MouseEvent, useState } from "react";
export type PropsTask = {
    task:TaskModel
}
export const Task = ({task}:PropsTask) => {
    const date = new Date(task.createdAt || Date.toString());
    const dateFormat = date.toLocaleDateString();
    const timeFormat =  date.toLocaleTimeString();
    const [visibleOptions, setVisibleOptions] = useState<boolean>(false);
    const handleOptionsTask = (e:MouseEvent<any>) =>{
        e.preventDefault();
        console.log({task});
        setVisibleOptions(true);        
    }
    return (
        <div>
            <div className="task" onClick={handleOptionsTask}>
                <h4 className="task-name">{task.name}</h4>
            <section className="task-description">
                {task.description}
            </section>
            <section className="task-date">
                {dateFormat}
                <br />
                {timeFormat}
            </section>
            </div>
            { visibleOptions && <OptionsTask task={task} setVisibleOptions={setVisibleOptions}/>}
        </div>
    )
}