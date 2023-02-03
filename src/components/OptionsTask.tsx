import { MouseEvent } from "react";
import { useForm } from "../hooks/useForm";
import { PropsTask } from "./Task";
import { Task } from "../models";
import '../styles/options-task.css';
type PropsOptionsTask = PropsTask & {
    setVisibleOptions:React.Dispatch<React.SetStateAction<boolean>>
};
export const OptionsTask = ({task, setVisibleOptions}:PropsOptionsTask) => {
    const [taskForm,handleChangeTaskForm] = useForm<Task>(task);
    const handleCancel = (e:MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        setVisibleOptions(false);
    };
    const handleSave = (e:MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(`Save`);
        setVisibleOptions(false);
    }
    return (
        <article className="options-task-background">
            <form  className='options-task'>
                <input type="text" value={taskForm.name} onChange={handleChangeTaskForm} name='name'/>
                <br />
                <input type="text" value={taskForm.description} onChange={handleChangeTaskForm} name='description'/>
                <br />
                <input type="submit" value="Save" onClick={handleSave}/>
                <input type="button" value='Cancel' onClick={handleCancel}/>
            </form>
        </article>
        
    )
}