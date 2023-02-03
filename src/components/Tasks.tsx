import { Task as TaskModel } from "../models"
import { Task } from "./Task";

type PropsTasks = {
    tasks:TaskModel[];
}

export const Tasks = ({tasks}:PropsTasks) => {
    return (
        <section className="tasks">
            {
                tasks.map((task) => <Task task={task} key={task.createdAt}/>)
            }
            {/* <Task task={createTask}/> */}
        </section>
    )
}