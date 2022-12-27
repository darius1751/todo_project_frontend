import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { DashboardNav } from "../components/DashboardNav";
import { PersonStore } from "../store";
import { PersonSlice } from "../store/slices/personSlice";
import { State } from "../models";
import { ColumnStateTask } from "../components/ColumnStateTask";
import { httpFindAllStates } from "../helpers/http/httpFindAllStates";
import '../styles/dashboard.css';
export const Dashboard = ( ) => {
    const {person} = useSelector<PersonStore, PersonSlice>((state) => state.personStore);
    const navigate = useNavigate();
    const [states, setStates] = useState<State[]>([]);
    useEffect(() => {
        if(!person.id)
            navigate('/login');
        httpFindAllStates(setStates);

    },[])
    return (
        <div className="dashboard">
            <DashboardNav/>
            <h2>Bienvenido: {person.name}</h2>
            
            <article className="states">
                {
                    states.map((state) => <ColumnStateTask key = {Date.now()+Math.random()} state={state}/>)
                }
            </article>
        </div>
    )

}