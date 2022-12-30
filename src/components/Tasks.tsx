import { Task as TaskModel } from "../models"
import { Task } from "./Task";

type PropsTasks = {
    tasks:TaskModel[];
}
const createTask:TaskModel = {
    name:'Crear Task',
    description:`De click para agregar una nueva tarea`,
    createdAt: new Date().toString()
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