import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

import { DashboardNav } from "../components/DashboardNav";
import { ColumnStateTask } from "../components/ColumnStateTask";
import { Footer } from "../components/Footer";

import { PersonStore } from "../store";
import { PersonSlice } from "../store/slices/personSlice";

import { httpFindAllTasks } from "../helpers/http/httpFindAllTasks";

import '../styles/dashboard.css';

export const Dashboard = ( ) => {
    const {person} = useSelector<PersonStore, PersonSlice>((state) => state.personStore);
    const navigate = useNavigate();
    const [tasks, setTasks] = useState<any>({});
    useEffect(() => {
        if(!person.id)
            navigate('/login');
        else
            httpFindAllTasks(person.id,setTasks);

    },[])
    return (
        <div className="dashboard dashboard-page">
            <DashboardNav/>
            <h2>Bienvenido: {person.name}</h2>
            
            <article className="states-tasks">
                {
                    Object.keys(tasks).map((name, index) => {
                        return (<ColumnStateTask name={name} tasks={tasks[name]} key={index}/>)
                    })
                }
            </article>
            <Footer/>
        </div>
    )

}