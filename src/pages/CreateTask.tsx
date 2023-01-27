import { DashboardNav } from "../components/DashboardNav"
import { useForm } from "../hooks/useForm";
import { Task } from "../models";
import { FormEvent } from "react";
import '../styles/create-task.css';
import { Footer } from "../components/Footer";
const initialTask:Task = {
    name:'',
    description:''
}
export const CreateTask = () => {
    const [newTask, handleChange] = useForm<Task>(initialTask);
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`Create task`);
    }
    return (
        <div className ="create-task dashboard-page">
            <DashboardNav/>
            <h2>Crea tu tarea :D</h2>
            <form onSubmit={handleSubmit} className='form-create-task'>
                <input type="text" placeholder="Ingrese el titulo de la tarea" name='name' value = {newTask.name} onChange={handleChange} autoComplete={'off'} className='form-input-text'/>
                <br />
                <input type="text" placeholder="Ingrese la descripcion de la tarea" name='description' value={newTask.description}  onChange={handleChange} autoComplete={'off'} className='form-input-text'/>
                <br />
                <input type="submit" value='Crear tarea'/>
            </form>
            <Footer/>
        </div>
    )
}