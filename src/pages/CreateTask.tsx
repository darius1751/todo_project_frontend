import { DashboardNav } from "../components/DashboardNav"
import { useForm } from "../hooks/useForm";
import { Task } from "../models";
import '../styles/create-task.css';
const initialTask:Task = {
    name:'',
    description:''
}
export const CreateTask = () => {
    const [newTask, handleChange] = useForm<Task>(initialTask);
    return (
        <div className ="create-task dashboard-page">
            <DashboardNav/>
            <form>
                <input type="text" placeholder="Ingrese el titulo de la tarea" name='name' value = {newTask.name} onChange={handleChange} autoComplete={'off'}/>
                <br />
                <input type="text" placeholder="Ingrese la descripcion de la tarea" name='description' value={newTask.description}  onChange={handleChange} autoComplete={'off'}/>
                <br />
                <input type="submit" value='Crear tarea'/>
            </form>
        </div>
    )
}