import { MouseEvent } from "react";
import { PropsTask } from "./Task";
import '../styles/options-task.css';
type PropsOptionsTask = PropsTask & {
    setVisibleOptions:React.Dispatch<React.SetStateAction<boolean>>
};
export const OptionsTask = ({task, setVisibleOptions}:PropsOptionsTask) => {
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
                <input type="text" value={task.name}/>
                <br />
                <input type="text" value={task.description}/>
                <br />
                <input type="submit" value="Save" onClick={handleSave}/>
                <input type="button" value='Cancel' onClick={handleCancel}/>
            </form>
        </article>
        
    )
}