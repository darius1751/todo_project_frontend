import { Task as TaskModel } from "../models";
type PropsTask = {
    task:TaskModel
}
export const Task = ({task}:PropsTask) => {
    const date = new Date(task.createdAt);
    const dateFormat = date.toLocaleDateString();
    const timeFormat =  date.toLocaleTimeString();
    return (
        <section className="task">
            
            <h4 className="task-name">{task.name}</h4>
            <section className="task-description">
                {task.description}
            </section>
            <section className="task-date">
                {dateFormat}
                <br />
                {timeFormat}
            </section>

        </section>
    )
}